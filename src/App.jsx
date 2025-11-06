import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import SignInModal from './components/SignInModal';
import { supabase } from './supabaseClient';

function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Load current session on mount
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    // Listen for auth changes
    const { data: sub } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess);
    });
    return () => {
      sub.subscription?.unsubscribe?.();
    };
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setAuthOpen(false);
  };

  return {
    /* Using a fragment to avoid extra wrapper */
  } && (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onSignIn={() => setAuthOpen(true)} />

      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>

      <Footer />

      <SignInModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        onAuthed={() => setAuthOpen(false)}
      />

      {session && (
        <div className="fixed bottom-4 right-4 flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-gray-700 shadow ring-1 ring-gray-200">
          <span className="hidden sm:inline">Signed in as</span>
          <span className="font-medium">{session.user?.email}</span>
          <button onClick={handleSignOut} className="rounded bg-gray-900 px-2 py-1 text-xs text-white">Sign out</button>
        </div>
      )}
    </div>
  );
}

export default App;
