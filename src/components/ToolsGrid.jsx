import React from 'react';

const categories = [
  {
    title: 'AI Chatbots',
    items: [
      { name: 'ChatGPT', url: 'https://chat.openai.com', icon: 'https://cdn-icons-png.flaticon.com/512/4712/4712101.png', desc: 'Converse with the most advanced AI assistant.' },
      { name: 'Claude', url: 'https://claude.ai', icon: 'https://avatars.githubusercontent.com/u/12220062?s=200&v=4', desc: 'Helpful, harmless AI assistant by Anthropic.' },
      { name: 'Gemini', url: 'https://ai.google.dev', icon: 'https://ssl.gstatic.com/ai/gemini/gemini-icon.svg', desc: 'Google’s multi-modal AI for the web.' },
    ],
  },
  {
    title: 'Image Generators',
    items: [
      { name: 'Midjourney', url: 'https://www.midjourney.com', icon: 'https://api.iconify.design/simple-icons:midjourney.svg?color=%23ffffff', desc: 'High-quality image generation via Discord.' },
      { name: 'Leonardo', url: 'https://leonardo.ai', icon: 'https://avatars.githubusercontent.com/u/52819941?s=200&v=4', desc: 'Art and asset creation for creatives.' },
      { name: 'Ideogram', url: 'https://ideogram.ai', icon: 'https://ideogram.ai/favicon.ico', desc: 'Text-to-image with strong typography.' },
    ],
  },
  {
    title: 'Voice & Video',
    items: [
      { name: 'ElevenLabs', url: 'https://elevenlabs.io', icon: 'https://avatars.githubusercontent.com/u/121501973?s=200&v=4', desc: 'Ultra-realistic AI speech synthesis.' },
      { name: 'Pika Labs', url: 'https://pika.art', icon: 'https://pika.art/favicon.ico', desc: 'Text-to-video for creators and teams.' },
      { name: 'Runway', url: 'https://runwayml.com', icon: 'https://avatars.githubusercontent.com/u/42800906?s=200&v=4', desc: 'AI tools for video editing and VFX.' },
    ],
  },
  {
    title: 'Productivity',
    items: [
      { name: 'Notion AI', url: 'https://notion.so', icon: 'https://www.notion.so/images/favicon.ico', desc: 'Write, plan, and organize with AI.' },
      { name: 'Taskade AI', url: 'https://www.taskade.com', icon: 'https://www.taskade.com/favicon-32x32.png', desc: 'Collaborative tasks with AI workflows.' },
    ],
  },
  {
    title: 'Marketing',
    items: [
      { name: 'Jasper', url: 'https://www.jasper.ai', icon: 'https://www.jasper.ai/favicon-32x32.png', desc: 'AI copywriting for teams and brands.' },
      { name: 'Copy.ai', url: 'https://www.copy.ai', icon: 'https://www.copy.ai/favicon-32x32.png', desc: 'Write marketing copy in seconds.' },
    ],
  },
  {
    title: 'Coding',
    items: [
      { name: 'Replit AI', url: 'https://replit.com', icon: 'https://replit.com/public/icons/favicon-196.png', desc: 'Code, collaborate, and deploy with AI.' },
      { name: 'GitHub Copilot', url: 'https://github.com/features/copilot', icon: 'https://github.githubassets.com/favicons/favicon.svg', desc: 'Your AI pair programmer.' },
    ],
  },
];

const Card = ({ tool }) => (
  <div className="group rounded-2xl border border-white/10 bg-white/5 p-4 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1">
    <div className="flex items-center gap-3">
      <img src={tool.icon} alt={tool.name} className="h-10 w-10 rounded-md object-cover" />
      <div>
        <p className="text-white font-medium">{tool.name}</p>
        <p className="text-sm text-zinc-400 line-clamp-2">{tool.desc}</p>
      </div>
    </div>
    <div className="mt-4">
      <a
        href={tool.url}
        target="_blank"
        rel="noreferrer"
        className="inline-block rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 hover:bg-cyan-500/20"
      >
        Try Now
      </a>
    </div>
  </div>
);

export default function ToolsGrid() {
  return (
    <section id="tools" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
      <h2 className="text-2xl md:text-3xl font-semibold text-white">Explore All AI Tools by Category</h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div key={cat.title}>
            <h3 className="mb-4 text-lg font-medium text-cyan-300">{cat.title}</h3>
            <div className="grid gap-4">
              {cat.items.map((tool) => (
                <Card key={tool.name} tool={tool} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
