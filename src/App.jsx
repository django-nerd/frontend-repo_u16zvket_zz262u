import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrendingCarousel from './components/TrendingCarousel';
import ToolsGrid from './components/ToolsGrid';
import Pricing from './components/Pricing';
import AboutAuth from './components/AboutAuth';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      {/* global background gradient glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-x-0 top-[-20%] mx-auto h-[500px] w-[90%] rounded-full bg-gradient-to-r from-purple-700/20 via-cyan-500/10 to-blue-600/20 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <TrendingCarousel />
        <ToolsGrid />
        <Pricing />
        <AboutAuth />
      </main>
      <footer className="border-t border-white/10/ p-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} AI Tools Hub. All rights reserved.
      </footer>
    </div>
  );
}
