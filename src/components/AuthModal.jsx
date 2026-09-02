import React, { useState } from 'react';
import { PORTALS_DATA } from '../data/portalData';

export function AuthModal({ isOpen, mode, onClose, onSwitchMode, onLoginSuccess }) {
  const [role, setRole] = useState('student'); // 'student', 'company', 'faculty', 'college', 'admin'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discipline: 'BAMS',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const targetPortal = PORTALS_DATA.find(p => p.id === (role === 'employer' ? 'company' : role === 'institution' ? 'college' : role)) || PORTALS_DATA[0];
    const loggedUser = {
      ...targetPortal.demoUser,
      name: formData.name || targetPortal.demoUser.name,
      email: formData.email || targetPortal.demoUser.email,
    };

    setTimeout(() => {
      setSubmitted(false);
      onClose();
      if (onLoginSuccess) {
        onLoginSuccess(targetPortal.id, loggedUser);
      }
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-surface-container-lowest border border-outline-variant/40 rounded-3xl max-w-md w-full p-6 sm:p-8 soft-shadow relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b border-outline-variant/20 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-2xl">spa</span>
            </div>
            <div>
              <h3 className="font-headline-md text-xl font-bold text-on-surface">
                {mode === 'login' ? 'Welcome Back to SkillSetu' : 'Create SkillSetu Account'}
              </h3>
              <p className="text-xs text-on-surface-variant">National Ayush Professional Ecosystem · SIH 2026</p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 text-outline hover:text-on-surface rounded-full hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center animate-fadeIn space-y-3">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl">
              <span className="material-symbols-outlined text-3xl">check</span>
            </div>
            <h4 className="font-bold text-lg text-on-surface">
              {mode === 'login' ? 'Authenticated successfully!' : 'Account created successfully!'}
            </h4>
            <p className="text-xs text-on-surface-variant">Redirecting to your verified Ayush professional workspace...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Role Picker */}
            <div>
              <label className="block text-xs font-bold text-outline uppercase tracking-wider mb-2">
                Select Your Role:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'student', label: 'Scholar / Doctor' },
                  { id: 'company', label: 'Company / R&D' },
                  { id: 'faculty', label: 'Faculty / Preceptor' }
                ].map((r) => (
                  <button
                    type="button"
                    key={r.id}
                    onClick={() => setRole(r.id)}
                    className={`py-2 px-2 rounded-xl text-xs font-bold text-center border transition-all ${
                      role === r.id
                        ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs'
                        : 'bg-surface-bright text-on-surface-variant border-outline-variant/30 hover:bg-surface-container-low'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {mode === 'signup' && (
              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Priya Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-on-surface mb-1">Email Address / ID</label>
              <input
                type="email"
                required
                placeholder="name@ayush.org.in"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-on-surface mb-1">Password</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-800 text-white font-bold py-3 px-6 rounded-xl hover:bg-emerald-900 transition-all shadow-soft active:scale-95 text-sm mt-2 cursor-pointer"
            >
              {mode === 'login' ? 'Log In to Ayush Platform' : 'Create Verified Account'}
            </button>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => onSwitchMode(mode === 'login' ? 'signup' : 'login')}
                className="text-xs text-primary font-semibold hover:underline"
              >
                {mode === 'login' 
                  ? "Don't have an account? Create one" 
                  : "Already have an account? Log in"}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}

export default AuthModal;
