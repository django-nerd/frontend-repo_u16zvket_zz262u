import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-36">
      {/* Background gradient aura */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-purple-600/30 via-cyan-500/20 to-blue-600/30 blur-3xl" />
        <div className="absolute left-[-20%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-purple-600/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-8">
        {/* Left copy */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Unlock 20+ Powerful AI Tools in One Place
          </h1>
          <p className="mt-4 max-w-xl text-zinc-300 text-base md:text-lg">
            Get lifetime access to 20+ premium AI tools for creators, businesses, and developers — all in one dashboard. Try free for 3 days.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 px-6 py-3 text-sm md:text-base font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-transform hover:-translate-y-0.5"
            >
              <Rocket className="h-5 w-5" /> Start Free Trial
            </a>
            <a
              href="#tools"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm md:text-base font-semibold text-white/90 hover:bg-white/10 transition-colors"
            >
              <Play className="h-5 w-5" /> Explore Tools
            </a>
          </div>

          <p className="mt-3 text-xs md:text-sm text-zinc-400">One-time payment: $17.99 after free trial.</p>
        </div>

        {/* Right 3D Spline */}
        <div className="relative z-10 h-[360px] sm:h-[440px] md:h-[520px] lg:h-[560px] w-full rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />

          {/* soft radial overlay to enhance glow without blocking interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
