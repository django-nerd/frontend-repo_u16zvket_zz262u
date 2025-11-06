import React from 'react';
import { BadgeCheck } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Simple Lifetime Pricing</h2>
        <p className="mt-2 text-zinc-400">Pay once, access forever.</p>
      </div>

      <div className="mt-10 mx-auto max-w-3xl">
        <div className="relative rounded-3xl border border-cyan-400/30 bg-white/5 p-8 shadow-[0_0_40px_-10px] shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-shadow">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-600/10 blur-2xl pointer-events-none" />

          <div className="relative">
            <p className="text-5xl font-extrabold text-white tracking-tight">$17.99</p>
            <p className="text-zinc-400">Lifetime Access</p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-2 text-zinc-200"><BadgeCheck className="h-5 w-5 text-cyan-400" /> Access 20+ curated AI tools</li>
              <li className="flex items-center gap-2 text-zinc-200"><BadgeCheck className="h-5 w-5 text-cyan-400" /> Free 3-day trial</li>
              <li className="flex items-center gap-2 text-zinc-200"><BadgeCheck className="h-5 w-5 text-cyan-400" /> Lifetime updates</li>
            </ul>

            <div className="mt-8">
              <a
                href="#signup"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 animate-pulse"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
