import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white py-8">
      <div className="mx-auto max-w-6xl px-6 text-sm text-gray-600">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} PostMuse.ai. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
