import React, { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

const tools = [
  {
    name: 'ChatGPT',
    desc: 'Smartest AI Chat Assistant',
    logo: 'https://cdn-icons-png.flaticon.com/512/4712/4712101.png',
  },
  {
    name: 'Midjourney',
    desc: 'High-fidelity image generation',
    logo: 'https://api.iconify.design/simple-icons:midjourney.svg?color=%23ffffff',
  },
  {
    name: 'ElevenLabs',
    desc: 'Ultra-realistic AI voices',
    logo: 'https://avatars.githubusercontent.com/u/121501973?s=200&v=4',
  },
  {
    name: 'Runway',
    desc: 'Next-gen video editing with AI',
    logo: 'https://avatars.githubusercontent.com/u/42800906?s=200&v=4',
  },
];

export default function TrendingCarousel() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId;
    let start;

    const step = (timestamp) => {
      if (start === undefined) start = timestamp;
      const elapsed = timestamp - start;
      const speed = 0.04; // pixels per ms
      track.scrollLeft = (elapsed * speed) % (track.scrollWidth / 2);
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    const onEnter = () => cancelAnimationFrame(animationId);
    const onLeave = () => {
      start = undefined;
      animationId = requestAnimationFrame(step);
    };

    track.addEventListener('mouseenter', onEnter);
    track.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(animationId);
      track.removeEventListener('mouseenter', onEnter);
      track.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  const items = [...tools, ...tools]; // duplicate for seamless loop

  return (
    <section id="trending" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
      <div className="mb-6 flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-cyan-400" />
        <h2 className="text-xl md:text-2xl font-semibold text-white">🔥 Trending AI Tools This Week</h2>
      </div>
      <div
        ref={trackRef}
        className="relative flex gap-4 overflow-x-auto no-scrollbar rounded-2xl border border-white/10 bg-white/5 p-4"
      >
        {items.map((t, idx) => (
          <div
            key={`${t.name}-${idx}`}
            className="min-w-[260px] shrink-0 rounded-xl border border-white/10 bg-black/40 p-4 hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-3">
              <img src={t.logo} alt={`${t.name} logo`} className="h-10 w-10 rounded-md object-cover" />
              <div>
                <p className="text-white font-medium">{t.name}</p>
                <p className="text-sm text-zinc-400">{t.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
