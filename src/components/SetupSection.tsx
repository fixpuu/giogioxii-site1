import { useEffect, useRef, useState } from 'react';
import { Monitor, Headphones, Keyboard, Camera, Mic, ExternalLink } from 'lucide-react';
import ParticlesBg from '@/components/ParticlesBg';
import CountUp from './CountUp';

const SETUP_CATS = [
  {
    category: 'Periferiche',
    icon: Keyboard,
    accent: '#FFD700',
    items: [
      { name: 'Tastiera', spec: 'Mechanical RGB Gaming', link: null },
      { name: 'Mouse', spec: 'Gaming Mouse 16000 DPI', link: null },
      { name: 'Controller', spec: 'Xbox Series X Controller', link: null },
      { name: 'Mousepad', spec: 'RGB Gaming Mousepad XL', link: null },
    ],
  },
  {
    category: 'Audio & Video',
    icon: Mic,
    accent: '#f43f5e',
    items: [
      { name: 'Microfono', spec: 'TONOR Microfono USB', link: 'https://amzn.eu/d/0iDgg7mz' },
      { name: 'Braccio Mic', spec: 'Articolato Pro Arm', link: null },
      { name: 'Webcam', spec: 'Logitech HD Webcam', link: null },
      { name: 'Tappetino', spec: 'HoYiXi Tappetino XXL', link: null },
    ],
  },
  {
    category: 'Display & Audio',
    icon: Headphones,
    accent: '#60a5fa',
    items: [
      { name: 'Monitor', spec: '27" 144Hz Gaming IPS', link: null },
      { name: 'Cuffie', spec: 'Gaming Headset 7.1', link: null },
    ],
  },
];

const SOFTWARE = [
  { name: 'CapCut', purpose: 'Video Editing', color: '#00BFFF', letter: 'C' },
  { name: 'OBS Studio', purpose: 'Recording & Stream', color: '#8B5CF6', letter: 'O' },
  { name: 'Discord', purpose: 'Community', color: '#5865F2', letter: 'D' },
  { name: 'Steam', purpose: 'Gaming Platform', color: '#1b2838', letter: 'S' },
];

const STATS = [
  { value: '100+', label: 'Ore di Streaming', color: '#FFD700' },
  { value: '4K', label: 'Qualità Video', color: '#f43f5e' },
  { value: '144Hz', label: 'Gaming Smooth', color: '#60a5fa' },
  { value: '24/7', label: 'Setup Ready', color: '#4ade80' },
];

const SetupSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="setup" ref={ref} className="relative py-24 px-6" style={{ background: '#0a0b10' }}>
      <ParticlesBg count={16} rockets grid intensity={0.6} />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-gaming text-xs tracking-[0.4em] mb-3" style={{ color: 'rgba(255,215,0,0.5)' }}>— HARDWARE & SOFTWARE —</p>
          <h2 className="text-4xl md:text-6xl font-gaming font-black mb-4 holo-text" style={{ textShadow: '0 0 40px rgba(255,215,0,0.3)' }}>
            Il Mio Setup
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">L'hardware e il software che utilizzo per creare contenuti di qualità</p>
        </div>

        {/* Hardware */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {SETUP_CATS.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.category}
                className={`rounded-2xl p-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{
                  transitionDelay: `${i * 150}ms`,
                  background: 'rgba(255,255,255,0.025)',
                  border: `1px solid ${cat.accent}20`,
                }}
              >
                <div className="relative flex items-center gap-3 p-4 rounded-xl overflow-hidden mb-5">
                  <div className="absolute inset-0 animated-border opacity-20" />
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${cat.accent}18`, border: `1px solid ${cat.accent}35` }}>
                      <Icon className="h-4 w-4" style={{ color: cat.accent }} />
                    </div>
                    <h3 className="font-gaming text-sm tracking-wider" style={{ color: cat.accent }}>{cat.category.toUpperCase()}</h3>
                  </div>
                </div>
                <div className="space-y-3">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between p-3 rounded-xl hover:scale-[1.02] transition-transform duration-200"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <div>
                        <p className="text-white text-sm font-gaming">{item.name}</p>
                        <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{item.spec}</p>
                      </div>
                      {item.link && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: cat.accent }}>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Software */}
        <div
          className={`rounded-2xl p-6 mb-8 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,215,0,0.12)' }}
        >
          <h3 className="font-gaming text-sm tracking-widest mb-5" style={{ color: 'rgba(255,215,0,0.6)' }}>SOFTWARE & TOOLS</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SOFTWARE.map((s) => (
              <div
                key={s.name}
                className="flex items-center gap-3 p-4 rounded-xl hover:scale-[1.03] transition-transform duration-200"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-gaming font-black text-sm flex-shrink-0"
                  style={{ background: s.color }}
                >
                  {s.letter}
                </div>
                <div>
                  <p className="text-white font-gaming text-sm">{s.name}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.purpose}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {STATS.map((st) => (
            <div
              key={st.label}
              className="rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-200"
              style={{ background: `${st.color}0a`, border: `1px solid ${st.color}25` }}
            >
              <p className="font-gaming font-black text-2xl mb-1" style={{ color: st.color, textShadow: `0 0 20px ${st.color}40` }}>
                <CountUp target={parseInt(st.value.replace(/\D/g, ''))} suffix={st.value.replace(/[0-9]/g, '')} trigger={visible} />
              </p>
              <p className="text-xs text-gray-600 font-gaming tracking-wide uppercase">{st.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SetupSection;
