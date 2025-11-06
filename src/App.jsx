import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import SignInModal from './components/SignInModal';

function App() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onSignIn={() => setAuthOpen(true)} />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />

      <SignInModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
}

export default App;
