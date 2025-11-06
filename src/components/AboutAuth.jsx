import React from 'react';
import { Info, LogIn, UserPlus } from 'lucide-react';

export default function AboutAuth() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* About */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-2 mb-3">
            <Info className="h-5 w-5 text-cyan-400" />
            <h3 className="text-white text-xl font-semibold">About Us</h3>
          </div>
          <p className="text-zinc-300 leading-relaxed">
            “AI Tools Hub is built for creators and businesses to explore the world’s best AI tools in one dashboard. Our goal: make AI accessible, affordable, and powerful for everyone.”
          </p>
        </div>

        {/* Auth Block (minimal) */}
        <div id="login" className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-white text-xl font-semibold mb-4">Get Started</h3>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10"
            >
              <LogIn className="h-5 w-5" /> Login
            </a>
            <a
              id="signup"
              href="#"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 px-5 py-3 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
            >
              <UserPlus className="h-5 w-5" /> Create Account
            </a>
          </div>
          <p className="mt-3 text-xs text-zinc-400">Use the buttons above to sign in or create your account.</p>
        </div>
      </div>
    </section>
  );
}
