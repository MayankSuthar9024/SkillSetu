import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Send, 
  Paperclip, 
  CheckCheck, 
  ArrowLeft,
  X,
  MessageSquare
} from 'lucide-react';

import meenakshiAvatar from '../assets/images/meenakshi_avatar.jpg';
import vikramAvatar from '../assets/images/vikram_avatar.jpg';
import priyaAvatar from '../assets/images/priya_avatar.jpg';
import sanjayAvatar from '../assets/images/sanjay_avatar.jpg';

export function MessagePage({ onNavigate, currentUser, onChatOpenStateChange }) {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: 'Prof. Meenakshi Joshi',
      role: 'HOD Dravyaguna, AIIA New Delhi',
      avatar: 'MJ',
      avatarImage: meenakshiAvatar,
      avatarBg: 'bg-emerald-800',
      online: true,
      unreadCount: 1,
      lastTime: '10:42 AM',
      messages: [
        { id: 101, sender: 'them', text: 'Hello! I reviewed your clinical research notes and case observations.', time: '10:30 AM' },
        { id: 102, sender: 'them', text: 'Approved your findings! Great work on the correlation metrics.', time: '10:35 AM' },
        { id: 103, sender: 'me', text: 'Thank you so much Professor! Should I upload the secondary dataset as well?', time: '10:38 AM' },
        { id: 104, sender: 'them', text: 'Yes, please share the secondary dataset by tomorrow evening.', time: '10:42 AM' }
      ]
    },
    {
      id: 2,
      name: 'Dr. Vikram Sethi',
      role: 'R&D Lead, Dabur Research Center',
      avatar: 'VS',
      avatarImage: vikramAvatar,
      avatarBg: 'bg-teal-800',
      online: true,
      unreadCount: 2,
      lastTime: '9:15 AM',
      messages: [
        { id: 201, sender: 'them', text: 'We reviewed your verified HPLC Phytochemistry badge score (88%).', time: '9:10 AM' },
        { id: 202, sender: 'them', text: 'Would love to schedule an interview for the Junior Formulations Officer role!', time: '9:15 AM' }
      ]
    },
    {
      id: 3,
      name: 'Dr. Priya Nair',
      role: 'BAMS Final Year Scholar, Amrita School of Ayurveda',
      avatar: 'PN',
      avatarImage: priyaAvatar,
      avatarBg: 'bg-emerald-700',
      online: false,
      unreadCount: 0,
      lastTime: 'Yesterday',
      messages: [
        { id: 301, sender: 'them', text: 'Can you share the Ashwagandha extraction protocol link?', time: 'Yesterday' },
        { id: 302, sender: 'me', text: 'Sure! Here is the CCRAS open-access protocol document link.', time: 'Yesterday' }
      ]
    },
    {
      id: 4,
      name: 'Central Ayush Research Helpdesk',
      role: 'Ministry of Ayush',
      avatar: 'CC',
      avatarImage: sanjayAvatar,
      avatarBg: 'bg-emerald-900',
      online: true,
      unreadCount: 0,
      lastTime: '2d ago',
      messages: [
        { id: 401, sender: 'them', text: 'Your verified SkillSetu Scholar Profile has been upgraded to Level 3.', time: '2d ago' }
      ]
    }
  ]);

  const [activeChatId, setActiveChatId] = useState(null);
  const [inputText, setInputText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const messagesEndRef = useRef(null);

  const activeChat = activeChatId ? (conversations.find(c => c.id === activeChatId) || null) : null;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (activeChat) {
      scrollToBottom();
    }
  }, [activeChat?.messages]);

  const handleSelectChat = (chatId) => {
    setActiveChatId(chatId);
    if (onChatOpenStateChange) {
      onChatOpenStateChange(Boolean(chatId));
    }
    if (chatId) {
      setConversations(prev => prev.map(c => c.id === chatId ? { ...c, unreadCount: 0 } : c));
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim() || !activeChatId) return;

    const userText = inputText.trim();
    const newMsg = {
      id: Date.now(),
      sender: 'me',
      text: userText,
      time: 'Just now'
    };

    setConversations(prev => prev.map(chat => {
      if (chat.id === activeChatId) {
        return {
          ...chat,
          lastTime: 'Just now',
          messages: [...chat.messages, newMsg]
        };
      }
      return chat;
    }));

    setInputText('');

    // Simulated reply after brief delay
    const targetChatId = activeChatId;
    const recipientName = currentUser?.name?.split(' ')[0] || 'there';
    setTimeout(() => {
      setConversations(prev => prev.map(chat => {
        if (chat.id === targetChatId) {
          return {
            ...chat,
            lastTime: 'Just now',
            messages: [
              ...chat.messages,
              {
                id: Date.now() + 1,
                sender: 'them',
                text: `Received your note, ${recipientName}! Thank you for reaching out. I'll review and get back to you shortly.`,
                time: 'Just now'
              }
            ]
          };
        }
        return chat;
      }));
    }, 1200);
  };

  const filteredConversations = conversations.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-none sm:rounded-3xl border-0 sm:border border-slate-200 overflow-hidden h-[calc(100dvh-64px)] sm:h-[calc(100vh-140px)] flex flex-col md:flex-row animate-fadeIn">
      
      {/* Left Conversations Sidebar */}
      <div className={`w-full md:w-80 lg:w-96 border-r border-slate-200/80 bg-white flex flex-col shrink-0 ${activeChatId ? 'hidden md:flex' : 'flex h-full'}`}>
        
        {/* Sidebar Header */}
        <div className="px-5 py-4 border-b border-slate-100 space-y-3 shrink-0">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              Messages
            </h1>
            <span className="text-xs font-semibold text-slate-400">
              {conversations.length}
            </span>
          </div>

          {/* Clean Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 focus:bg-white border border-slate-200/90 focus:border-slate-400 rounded-xl pl-9 pr-8 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 cursor-pointer p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto divide-y divide-slate-100/80">
          {filteredConversations.length === 0 ? (
            <div className="py-12 text-center text-slate-400 px-4">
              <p className="text-xs font-medium text-slate-600">No conversations found</p>
            </div>
          ) : (
            filteredConversations.map((chat) => {
              const isActive = chat.id === activeChatId;
              const lastMsg = chat.messages[chat.messages.length - 1];

              return (
                <div
                  key={chat.id}
                  onClick={() => handleSelectChat(chat.id)}
                  className={`px-5 py-3.5 transition-colors cursor-pointer flex gap-3.5 items-start ${
                    isActive
                      ? 'bg-slate-100/80'
                      : 'hover:bg-slate-50/70'
                  }`}
                >
                  {/* Avatar */}
                  <div className="relative shrink-0 mt-0.5">
                    <div className={`w-11 h-11 rounded-full ${chat.avatarBg} text-white font-bold text-xs flex items-center justify-center overflow-hidden shadow-2xs`}>
                      {chat.avatarImage ? (
                        <img src={chat.avatarImage} alt={chat.name} className="w-full h-full object-cover" />
                      ) : (
                        chat.avatar
                      )}
                    </div>
                    {chat.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full ring-2 ring-white"></span>
                    )}
                  </div>

                  {/* Conversation Meta & Snippet */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline gap-2 mb-0.5">
                      <h2 className={`text-sm truncate leading-snug ${
                        chat.unreadCount > 0 ? 'font-bold text-slate-900' : 'font-semibold text-slate-900'
                      }`}>
                        {chat.name}
                      </h2>
                      <span className="text-[11px] text-slate-400 shrink-0 font-normal">
                        {chat.lastTime}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 truncate font-normal mb-1">
                      {chat.role}
                    </p>

                    <p className={`text-xs truncate ${
                      chat.unreadCount > 0 ? 'font-semibold text-slate-900' : 'font-normal text-slate-500'
                    }`}>
                      {lastMsg ? lastMsg.text : 'No messages'}
                    </p>
                  </div>

                  {/* Unread Pill */}
                  {chat.unreadCount > 0 && !isActive && (
                    <span className="bg-slate-900 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-1">
                      {chat.unreadCount}
                    </span>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>

      {/* Right Chat Panel */}
      <div className={`flex-1 flex flex-col bg-slate-50/40 h-full ${!activeChatId ? 'hidden md:flex' : 'flex'}`}>
        
        {activeChat ? (
          <>
            {/* Header */}
            <div className="px-5 py-3.5 border-b border-slate-200/80 bg-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <button
                  onClick={() => handleSelectChat(null)}
                  className="md:hidden text-slate-500 hover:text-slate-900 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer shrink-0 -ml-1.5"
                  title="Back to messages"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>

                <div 
                  onClick={() => onNavigate && onNavigate('profile', activeChat)}
                  className="flex items-center gap-3 cursor-pointer group min-w-0"
                >
                  <div className={`w-10 h-10 rounded-full ${activeChat.avatarBg} text-white font-bold text-xs flex items-center justify-center shrink-0 overflow-hidden relative shadow-2xs`}>
                    {activeChat.avatarImage ? (
                      <img src={activeChat.avatarImage} alt={activeChat.name} className="w-full h-full object-cover" />
                    ) : (
                      activeChat.avatar
                    )}
                    {activeChat.online && (
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white"></span>
                    )}
                  </div>

                  <div className="min-w-0">
                    <h2 className="font-bold text-sm text-slate-900 group-hover:text-emerald-800 transition-colors truncate">
                      {activeChat.name}
                    </h2>
                    <p className="text-xs text-slate-500 truncate font-normal">
                      {activeChat.online ? (
                        <span className="text-emerald-700 font-medium">Online</span>
                      ) : (
                        'Offline'
                      )}
                      {' · '}{activeChat.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-3">
              {activeChat.messages.map((msg) => {
                const isMe = msg.sender === 'me';
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} max-w-full`}
                  >
                    <div
                      className={`max-w-[85%] sm:max-w-[70%] px-4 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        isMe
                          ? 'bg-slate-900 text-white rounded-br-xs'
                          : 'bg-white border border-slate-200/80 text-slate-900 rounded-bl-xs shadow-2xs'
                      }`}
                    >
                      <p className="whitespace-pre-line break-words font-normal">{msg.text}</p>
                    </div>

                    <div className="flex items-center gap-1 mt-1 text-[10px] text-slate-400 font-normal px-1">
                      <span>{msg.time}</span>
                      {isMe && <CheckCheck className="w-3.5 h-3.5 text-slate-400" />}
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSendMessage} className="p-3 sm:p-4 border-t border-slate-200/80 bg-white flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => alert('Select a research PDF or case image to attach...')}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
                title="Attach file"
              >
                <Paperclip className="w-4 h-4" />
              </button>

              <input
                type="text"
                placeholder={`Message ${activeChat.name.split(' ')[0]}...`}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 bg-slate-50 focus:bg-white border border-slate-200 focus:border-slate-400 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
              />

              <button
                type="submit"
                disabled={!inputText.trim()}
                className="bg-slate-900 hover:bg-slate-800 disabled:opacity-30 text-white p-2.5 rounded-xl transition-all shrink-0 cursor-pointer flex items-center justify-center active:scale-95 shadow-xs"
                title="Send"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </>
        ) : (
          /* Clean Empty State on Desktop */
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-3 text-slate-400">
              <MessageSquare className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h2 className="font-semibold text-sm text-slate-700">Select a conversation</h2>
            <p className="text-xs text-slate-400 max-w-xs mt-1">
              Choose someone from the list to view messages or start a discussion.
            </p>
          </div>
        )}

      </div>

    </div>
  );
}

export default MessagePage;
