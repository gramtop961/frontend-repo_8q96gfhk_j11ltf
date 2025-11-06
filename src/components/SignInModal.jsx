import React, { useState } from 'react';
import { X, Mail, Lock, Github, Chrome } from 'lucide-react';

const Input = ({ icon: Icon, type = 'text', placeholder, value, onChange, autoComplete }) => (
  <div className="relative">
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
      <Icon className="h-4 w-4" />
    </div>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-9 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
    />
  </div>
);

const TabButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition ${
      active ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50'
    }`}
  >
    {children}
  </button>
);

const OAuthButton = ({ icon: Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-gray-200 transition hover:bg-gray-50"
  >
    <Icon className="h-4 w-4" />
    {label}
  </button>
);

const SignInModal = ({ open, onClose }) => {
  const [tab, setTab] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    // Placeholder UX: simulate request
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setMessage(tab === 'signin' ? 'Signed in (demo). In production this connects to Supabase.' : 'Account created (demo). In production this connects to Supabase.');
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <h3 className="text-sm font-semibold text-gray-900">Welcome to PostMuse.ai</h3>
          <button onClick={onClose} className="rounded p-1 text-gray-400 hover:bg-gray-50 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-6 py-4">
          <div className="mb-4 flex gap-2">
            <TabButton active={tab === 'signin'} onClick={() => setTab('signin')}>Sign In</TabButton>
            <TabButton active={tab === 'signup'} onClick={() => setTab('signup')}>Create Account</TabButton>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              icon={Mail}
              type="email"
              placeholder="Email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              icon={Lock}
              type="password"
              placeholder="Password"
              autoComplete={tab === 'signin' ? 'current-password' : 'new-password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white shadow transition hover:opacity-90 disabled:opacity-60"
            >
              {loading ? 'Please wait…' : tab === 'signin' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {message && (
            <div className="mt-3 rounded-lg bg-gray-50 p-3 text-xs text-gray-700 ring-1 ring-gray-200">
              {message}
            </div>
          )}

          <div className="mt-6 flex items-center gap-2">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs text-gray-500">Or continue with</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <OAuthButton icon={Github} label="GitHub" onClick={() => setMessage('GitHub auth (demo)')} />
            <OAuthButton icon={Chrome} label="Google" onClick={() => setMessage('Google auth (demo)')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
