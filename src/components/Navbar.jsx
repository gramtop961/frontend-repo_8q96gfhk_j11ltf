import React from 'react';
import { Rocket, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2 text-gray-900">
          <Rocket className="h-6 w-6" />
          <span className="font-semibold">PostMuse.ai</span>
        </a>
        <nav className="hidden gap-6 text-sm text-gray-600 sm:flex">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#faq" className="hover:text-gray-900">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#pricing"
            className="hidden rounded-lg px-3 py-2 text-sm text-gray-600 ring-1 ring-gray-200 hover:bg-gray-50 sm:inline-block"
          >
            Start Trial
          </a>
          <button className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-3 py-2 text-sm text-white shadow hover:scale-[1.02] transition-transform">
            <User className="h-4 w-4" />
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
