import React, { useState } from 'react';

export function AuthModal({ isOpen, mode, onClose, onSwitchMode }) {
  const [role, setRole] = useState('student'); // 'student', 'institution', 'employer'
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
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
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
                {mode === 'login' ? 'Welcome Back' : 'Create SkillSetu Account'}
              </h3>
              <p className="text-xs text-on-surface-variant">SIH 2026 Ayush Talent Ecosystem</p>
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
              {mode === 'login' ? 'Logged in successfully!' : 'Account created successfully!'}
            </h4>
            <p className="text-xs text-on-surface-variant">Redirecting to your SkillSetu dashboard...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Role Picker */}
            <div>
              <label className="block text-xs font-bold text-outline uppercase tracking-wider mb-2">
                I am a:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'student', label: 'Student / Doctor' },
                  { id: 'institution', label: 'College / Institute' },
                  { id: 'employer', label: 'Employer / Hospital' }
                ].map((r) => (
                  <button
                    type="button"
                    key={r.id}
                    onClick={() => setRole(r.id)}
                    className={`py-2 px-2 rounded-xl text-xs font-bold text-center border transition-all ${
                      role === r.id
                        ? 'bg-primary text-on-primary border-primary shadow-xs'
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
              <label className="block text-xs font-semibold text-on-surface mb-1">Email Address</label>
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
              className="w-full bg-primary text-on-primary font-bold py-3 px-6 rounded-xl hover:bg-primary/90 transition-all shadow-soft active:scale-95 text-sm mt-2"
            >
              {mode === 'login' ? 'Log In to Dashboard' : 'Create Verified Account'}
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
