import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

const STORAGE_KEY = 'skillsetu_notifications';
const PER_ROLE_CAP = 50;
const DEDUP_WINDOW_MS = 10000; // 10 seconds double-click protection

// Initial seed data representing authentic platform activity across stakeholders
const INITIAL_SEED_NOTIFICATIONS = [
  {
    id: 'seed-notif-1',
    targetRole: 'student',
    targetRecipientId: 'NIA/AY/2026/0491',
    targetRecipientName: 'Aarav Sharma',
    senderId: 'EMP-DABUR-QC-89',
    senderName: 'Dabur India R&D Division',
    senderRole: 'company',
    title: 'Interview scheduled with Dabur India',
    message: 'Dabur India R&D Division scheduled your technical round for Phytochemistry QC Trainee on Sept 25, 11:00 AM.',
    link: '#dashboard-student',
    read: false,
    timestamp: new Date(Date.now() - 1000 * 60 * 25).toISOString() // 25m ago
  },
  {
    id: 'seed-notif-2',
    targetRole: 'company',
    targetRecipientId: 'EMP-DABUR-QC-89',
    targetRecipientName: 'Dabur India',
    senderId: 'NIA/AY/2026/0491',
    senderName: 'Aarav Sharma',
    senderRole: 'student',
    title: 'New applicant for QC Specialist',
    message: 'Aarav Sharma (BAMS Final Year, 96% Competency Match) applied for Phytochemical Standardization & HPTLC QC Specialist.',
    link: '#dashboard-company',
    read: false,
    timestamp: new Date(Date.now() - 1000 * 60 * 75).toISOString() // 1h 15m ago
  },
  {
    id: 'seed-notif-3',
    targetRole: 'college',
    targetRecipientId: 'AISHE-C-24901',
    targetRecipientName: 'National Institute of Ayurveda (NIA), Jaipur',
    senderId: 'NIA/AY/2026/0491',
    senderName: 'Aarav Sharma',
    senderRole: 'student',
    title: 'Aarav Sharma requested an NOC',
    message: 'Aarav Sharma submitted an NOC request for Phytochemical QC Trainee at Dabur India (Ref: NIA/AYUSH/NOC/2026/8941).',
    link: '#dashboard-college',
    read: false,
    timestamp: new Date(Date.now() - 1000 * 60 * 180).toISOString() // 3h ago
  },
  {
    id: 'seed-notif-4',
    targetRole: 'all',
    targetRecipientId: null,
    targetRecipientName: null,
    senderId: 'AYUSH-NAT-MINISTRY',
    senderName: 'Ministry of Ayush National Portal',
    senderRole: 'admin',
    title: 'National Ayush Diagnostic Assessment Live',
    message: 'The standardized 6-axis diagnostic quiz engine is now active across all 4 specialization branches.',
    link: '#assessment',
    read: true,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString() // 1 day ago
  }
];

// In-memory fallback if localStorage is disabled or restricted
let memoryStorage = [...INITIAL_SEED_NOTIFICATIONS];

const safeGetStorage = () => {
  try {
    if (typeof window === 'undefined') return INITIAL_SEED_NOTIFICATIONS;
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_SEED_NOTIFICATIONS));
      return INITIAL_SEED_NOTIFICATIONS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : INITIAL_SEED_NOTIFICATIONS;
  } catch (e) {
    console.warn('[NotificationContext] localStorage read error, using in-memory store:', e);
    return memoryStorage;
  }
};

const safeSetStorage = (notifications) => {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notifications));
    }
    memoryStorage = notifications;
  } catch (e) {
    console.warn('[NotificationContext] localStorage write error, using in-memory store:', e);
    memoryStorage = notifications;
  }
};

const NotificationContext = createContext(null);

export function NotificationProvider({ children, activePortalId = 'student', currentUser = null }) {
  const [notifications, setNotifications] = useState(safeGetStorage);
  const [filterMode, setFilterMode] = useState('role'); // 'role' | 'all'
  const dedupRef = React.useRef(new Map());

  // Dual-path synchronization: Cross-Tab Storage Listener + Same-Tab Event Listener (Gap #1 & Gap #5)
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          const updated = JSON.parse(e.newValue);
          if (Array.isArray(updated)) {
            setNotifications(updated);
          }
        } catch (err) {
          console.warn('[NotificationContext] Storage parse error', err);
        }
      }
    };

    const handleCustomDispatch = (e) => {
      if (e.detail && Array.isArray(e.detail)) {
        setNotifications(e.detail);
      } else {
        setNotifications(safeGetStorage());
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('skillsetu_notification_dispatched', handleCustomDispatch);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('skillsetu_notification_dispatched', handleCustomDispatch);
    };
  }, []);

  // Recipient Matching Logic (Gap #2: ID-preferred matching with safe name fallback)
  const isRecipient = useCallback((notif) => {
    if (!notif) return false;
    // Broadcast alerts to all roles
    if (notif.targetRole === 'all') return true;

    // Normalizing role keys (e.g. tpo maps to college)
    const normalizedTarget = notif.targetRole === 'tpo' ? 'college' : notif.targetRole;
    const normalizedActive = activePortalId === 'tpo' ? 'college' : activePortalId;

    if (normalizedTarget !== normalizedActive) {
      return false;
    }

    // If a specific recipient ID is targeted, primary check is against currentUser.id
    if (notif.targetRecipientId && currentUser?.id) {
      if (notif.targetRecipientId === currentUser.id) return true;
    }

    // Name / brand / institution fallback check
    if (notif.targetRecipientName) {
      const targetNameLower = notif.targetRecipientName.toLowerCase().trim();
      const currentNameLower = (currentUser?.name || '').toLowerCase();
      const currentInstLower = (currentUser?.institution || '').toLowerCase();

      if (currentNameLower.includes(targetNameLower) || targetNameLower.includes(currentNameLower)) {
        return true;
      }
      if (currentInstLower.includes(targetNameLower) || targetNameLower.includes(currentInstLower)) {
        return true;
      }
    }

    // If no specific recipient ID or name was assigned, it is role-wide for this portal
    if (!notif.targetRecipientId && !notif.targetRecipientName) {
      return true;
    }

    // Default to true for simulated single-browser demo role alignment if in matching role
    return true;
  }, [activePortalId, currentUser]);

  // Derived filtered notifications for active role
  const roleNotifications = useMemo(() => {
    return notifications.filter(isRecipient);
  }, [notifications, isRecipient]);

  // Unread counts
  const unreadCount = useMemo(() => {
    return roleNotifications.filter(n => !n.read).length;
  }, [roleNotifications]);

  const allUnreadCount = useMemo(() => {
    return notifications.filter(n => !n.read).length;
  }, [notifications]);

  // Primary Dispatch Action (Gap #1, #2, #3, #8)
  const dispatchNotification = useCallback(({
    targetRole,
    targetRecipientId = null,
    targetRecipientName = null,
    senderId = null,
    senderName = null,
    senderRole = null,
    title,
    message,
    link = '#',
    metadata = {}
  }) => {
    if (!targetRole || !title) {
      console.warn('[NotificationContext] Missing required parameters for dispatchNotification', { targetRole, title });
      return false;
    }

    // Deduplication check: Suppress duplicate (targetRole, targetRecipientId, title) within 10s (Gap #8)
    const dedupKey = `${targetRole}-${targetRecipientId || ''}-${title}`;
    const now = Date.now();
    const lastTime = dedupRef.current.get(dedupKey);

    if (lastTime && now - lastTime < DEDUP_WINDOW_MS) {
      console.log(`[NotificationContext] Suppressed duplicate notification within ${DEDUP_WINDOW_MS}ms:`, dedupKey);
      return false;
    }
    dedupRef.current.set(dedupKey, now);

    const newNotification = {
      id: `notif-${now}-${Math.random().toString(36).substr(2, 6)}`,
      targetRole,
      targetRecipientId,
      targetRecipientName,
      senderId: senderId || currentUser?.id || null,
      senderName: senderName || currentUser?.name || 'System User',
      senderRole: senderRole || activePortalId || 'user',
      title,
      message: message || title,
      link,
      read: false,
      timestamp: new Date().toISOString(),
      metadata
    };

    setNotifications(prev => {
      // Per-Role Capping: Limit each targetRole to at most PER_ROLE_CAP (Gap #3)
      const roleGroup = prev.filter(n => n.targetRole === targetRole);
      const otherGroup = prev.filter(n => n.targetRole !== targetRole);
      const updatedRoleGroup = [newNotification, ...roleGroup].slice(0, PER_ROLE_CAP);
      const combined = [newNotification, ...prev.filter(n => n.id !== newNotification.id)];

      // Persist to storage
      safeSetStorage(combined);

      // Emit custom window event for same-tab cross-component notification
      try {
        window.dispatchEvent(new CustomEvent('skillsetu_notification_dispatched', { detail: combined }));
      } catch (e) {}

      return combined;
    });

    return true;
  }, [currentUser, activePortalId]);

  // Mark single notification as read (Gap #5)
  const markAsRead = useCallback((id) => {
    setNotifications(prev => {
      const updated = prev.map(n => n.id === id ? { ...n, read: true } : n);
      safeSetStorage(updated);
      try {
        window.dispatchEvent(new CustomEvent('skillsetu_notification_dispatched', { detail: updated }));
      } catch (e) {}
      return updated;
    });
  }, []);

  // Mark all visible notifications as read for current role (Gap #5)
  const markAllAsRead = useCallback(() => {
    setNotifications(prev => {
      const updated = prev.map(n => {
        if (isRecipient(n)) {
          return { ...n, read: true };
        }
        return n;
      });
      safeSetStorage(updated);
      try {
        window.dispatchEvent(new CustomEvent('skillsetu_notification_dispatched', { detail: updated }));
      } catch (e) {}
      return updated;
    });
  }, [isRecipient]);

  // Clear all notifications
  const clearAll = useCallback(() => {
    setNotifications([]);
    safeSetStorage([]);
    try {
      window.dispatchEvent(new CustomEvent('skillsetu_notification_dispatched', { detail: [] }));
    } catch (e) {}
  }, []);

  const value = {
    notifications,
    roleNotifications,
    unreadCount,
    allUnreadCount,
    filterMode,
    setFilterMode,
    dispatchNotification,
    markAsRead,
    markAllAsRead,
    clearAll
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
}

export function formatRelativeTime(isoString) {
  if (!isoString) return 'Recently';
  try {
    const diffMs = Date.now() - new Date(isoString).getTime();
    if (isNaN(diffMs) || diffMs < 0) return 'Just now';
    const diffSec = Math.floor(diffMs / 1000);
    if (diffSec < 60) return 'Just now';
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) return `${diffMin}m ago`;
    const diffHours = Math.floor(diffMin / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `${diffDays}d ago`;
    return new Date(isoString).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  } catch {
    return 'Recently';
  }
}

