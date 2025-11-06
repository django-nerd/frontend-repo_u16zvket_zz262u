import React from 'react';
import { Home, Flame, LogIn, UserPlus } from 'lucide-react';

const NavLink = ({ children, href = '#' }) => (
  <a
    href={href}
    className="text-sm md:text-base text-zinc-300 hover:text-white transition-colors px-3 py-2"
  >
    {children}
  </a>
);

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 sm:px-6 py-2 sm:py-3 backdrop-blur-xl shadow-lg shadow-cyan-500/5"
          aria-label="Main Navigation"
        >
          {/* Left */}
          <div className="flex items-center gap-1 sm:gap-2">
            <NavLink href="#home"><span className="inline-flex items-center gap-2"><Home className="h-4 w-4" /> Home</span></NavLink>
            <NavLink href="#trending">Top 3 Tools</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
          </div>

          {/* Center Logo */}
          <a href="#home" className="hidden sm:flex items-center gap-2 select-none">
            <div className="relative">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 blur-sm opacity-80"></span>
              <Flame className="relative h-6 w-6 text-white" />
            </div>
            <span className="font-semibold tracking-wide text-white">AI Tools Hub</span>
          </a>

          {/* Right */}
          <div className="flex items-center gap-1 sm:gap-2">
            <NavLink href="#about">About Us</NavLink>
            <a href="#login" className="text-sm md:text-base text-zinc-300 hover:text-white transition-colors px-3 py-2 inline-flex items-center gap-2"><LogIn className="h-4 w-4" /> Login</a>
            <a
              href="#signup"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-blue-500/30 hover:shadow-blue-500/50 transition-transform hover:-translate-y-0.5"
            >
              <UserPlus className="h-4 w-4" /> Create Account
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
