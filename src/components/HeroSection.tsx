import { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Users, Eye, Video, Youtube, ChevronDown } from 'lucide-react';
import CountUp from './CountUp';

/* ── Static data ── */
const STATS = [
  { icon: Users, value: '420+', label: 'Iscritti' },
  { icon: Video, value: '900+', label: 'Video' },
  { icon: Eye, value: '250K+', label: 'Views nel 2025' },
];

/* ── Spaceship SVG inline ── */
const Rocket = ({ color = '#FFD700', size = 32 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 1.6} viewBox="0 0 32 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Body */}
    <ellipse cx="16" cy="22" rx="8" ry="16" fill={color} opacity="0.9" />
    {/* Nose */}
    <path d="M16 2 C10 10, 8 16, 8 22 L24 22 C24 16, 22 10, 16 2Z" fill={color} />
    {/* Wings */}
    <path d="M8 30 L2 44 L8 38" fill={color} opacity="0.7" />
    <path d="M24 30 L30 44 L24 38" fill={color} opacity="0.7" />
    {/* Window */}
    <circle cx="16" cy="20" r="4" fill="#0a0a0a" opacity="0.6" />
    <circle cx="16" cy="20" r="2.5" fill={color} opacity="0.3" />
    {/* Flame */}
    <ellipse cx="16" cy="44" rx="4" ry="7" fill="#FF6B00" opacity="0.85" />
    <ellipse cx="16" cy="44" rx="2.5" ry="5" fill="#FFD700" opacity="0.9" />
  </svg>
);

/* ── Shooting star ── */
const ShootingStar = ({ top, left, delay, duration, angle }: { top: string; left: string; delay: number; duration: number; angle: number }) => (
  <div
    className="absolute pointer-events-none"
    style={{ top, left, animationDelay: `${delay}s`, animationDuration: `${duration}s`, animation: `meteor ${duration}s ease-in infinite ${delay}s` }}
  >
    <div
      style={{
        width: '80px',
        height: '2px',
        background: `linear-gradient(90deg, rgba(255,215,0,0) 0%, rgba(255,215,0,0.9) 100%)`,
        borderRadius: '2px',
        transform: `rotate(${angle}deg)`,
        boxShadow: '0 0 8px rgba(255,215,0,0.6)',
      }}
    />
  </div>
);

/* Ships data */
const SHIPS = [
  { animClass: 'animate-ship-1', top: '30%', color: '#FFD700', size: 28 },
  { animClass: 'animate-ship-2', top: '55%', color: '#FFA500', size: 22 },
  { animClass: 'animate-ship-3', top: '20%', color: '#FFD700', size: 18 },
];

const STARS_DATA = [
  { top: '15%', left: '10%', delay: 1, duration: 4, angle: 35 },
  { top: '30%', left: '65%', delay: 5, duration: 5, angle: 30 },
  { top: '60%', left: '20%', delay: 9, duration: 3.5, angle: 38 },
  { top: '10%', left: '40%', delay: 14, duration: 4.5, angle: 32 },
];

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: `${Math.random() * 6}s`,
  duration: `${4 + Math.random() * 5}s`,
  size: Math.random() > 0.6 ? 2.5 : 2,
}));

/* ── Mouse spark component ── */
const MouseSparks = () => {
  const [sparks, setSparks] = useState<{ id: number; x: number; y: number }[]>([]);
  const counterRef = useRef(0);

  const lastPos = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Basic distance throttle to avoid too many state updates
    const dist = Math.hypot(e.clientX - lastPos.current.x, e.clientY - lastPos.current.y);
    if (dist < 30) return;

    lastPos.current = { x: e.clientX, y: e.clientY };
    const id = counterRef.current++;
    setSparks(prev => [...prev.slice(-8), { id, x: e.clientX, y: e.clientY }]);
    setTimeout(() => setSparks(prev => prev.filter(s => s.id !== id)), 600);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5]">
      {sparks.map(s => (
        <div
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: s.x - 3,
            top: s.y - 3,
            width: 6,
            height: 6,
            background: 'rgba(255,215,0,0.7)',
            boxShadow: '0 0 8px rgba(255,215,0,0.9)',
            animation: 'float-slow 0.6s ease-out forwards',
            transform: 'scale(1)',
            opacity: 0,
            animationFillMode: 'forwards',
          }}
        />
      ))}
    </div>
  );
};

/* ── HERO ── */
const HeroSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Mouse sparks */}
      <MouseSparks />

      {/* Deep space bg */}
      <div className="absolute inset-0 bg-[#08090d]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,215,0,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,215,0,0.025) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 55%, rgba(255,215,0,0.07) 0%, transparent 70%)' }}
      />

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-neon-yellow/30 pointer-events-none" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-neon-yellow/30 pointer-events-none" />
      <div className="absolute bottom-20 left-8 w-8 h-8 border-b-2 border-l-2 border-neon-yellow/20 pointer-events-none" />
      <div className="absolute bottom-20 right-8 w-8 h-8 border-b-2 border-r-2 border-neon-yellow/20 pointer-events-none" />

      {/* ─── SPACESHIPS flying across ─── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        {SHIPS.map((ship, i) => (
          <div
            key={i}
            className={`absolute ${ship.animClass}`}
            style={{ top: ship.top }}
          >
            {/* Engine trail */}
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <div style={{
                position: 'absolute',
                right: '100%',
                top: '50%',
                transform: 'translateY(-50%) rotate(0deg)',
                width: `${40 + i * 15}px`,
                height: '2px',
                background: `linear-gradient(90deg, transparent, ${ship.color}70)`,
                borderRadius: '2px',
              }} />
              <Rocket color={ship.color} size={ship.size} />
            </div>
          </div>
        ))}

        {/* ─── Shooting stars / meteors ─── */}
        {STARS_DATA.map((s, i) => (
          <ShootingStar key={i} {...s} />
        ))}
      </div>

      {/* ─── Floating particles ─── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {PARTICLES.map(p => (
          <div
            key={p.id}
            className="absolute animate-float"
            style={{ left: p.left, top: p.top, animationDelay: p.delay, animationDuration: p.duration }}
          >
            <div style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              borderRadius: '50%',
              background: 'rgba(255,215,0,0.45)',
              boxShadow: '0 0 5px rgba(255,215,0,0.5)',
            }} />
          </div>
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border text-xs font-gaming tracking-widest transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ borderColor: 'rgba(255,215,0,0.35)', background: 'rgba(255,215,0,0.07)', color: '#FFD700', backdropFilter: 'blur(8px)' }}
        >
          <span className="w-2 h-2 rounded-full bg-neon-yellow animate-pulse" />
          🎮 Content Creator Italiano
        </div>

        {/* Main heading with Glitch effect */}
        <h1
          className={`text-6xl md:text-8xl lg:text-9xl font-gaming font-black mb-4 leading-none tracking-tight transition-all duration-1000 delay-100 animate-float-slow glitch-text ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ color: '#FFD700', textShadow: '0 0 40px rgba(255,215,0,0.6), 0 0 80px rgba(255,215,0,0.25)' }}
          data-text="GIOGIOXII"
        >
          GIOGIOXII
        </h1>

        {/* Subtitle with Neon Flicker */}
        <p
          className={`font-gaming text-base md:text-lg tracking-[0.3em] mb-10 animate-neon-flicker transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ color: 'rgba(255,215,0,0.5)' }}
        >
          GAMING · TECH · CONTENT
        </p>

        <p
          className={`text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Gaming, tecnologia e contenuti che ispirano.{' '}
          <br className="hidden md:block" />
          Benvenuto nella mia community digitale!
        </p>

        {/* Stats with CountUp */}
        <div className={`grid grid-cols-3 gap-6 mb-12 max-w-lg mx-auto transition-all duration-1000 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {STATS.map(({ icon: Icon, value, label }) => {
            const numValue = parseInt(value.replace(/\D/g, ''));
            const suffix = value.replace(/[0-9]/g, '');
            return (
              <div key={label} className="flex flex-col items-center gap-2 group cursor-default">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-1 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 relative"
                  style={{ background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.3)' }}
                >
                  <Icon className="h-5 w-5" style={{ color: '#FFD700' }} />
                  <div className="absolute inset-0 rounded-full animate-pulse-ring pointer-events-none" style={{ border: '1px solid #FFD700' }} />
                </div>
                <span className="text-2xl md:text-3xl font-gaming font-black" style={{ color: '#FFD700', textShadow: '0 0 20px rgba(255,215,0,0.4)' }}>
                  <CountUp target={numValue} suffix={suffix} trigger={visible} />
                </span>
                <span className="text-xs text-gray-500 font-gaming tracking-wider">{label}</span>
              </div>
            );
          })}
        </div>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button
            size="lg"
            className="group relative overflow-hidden font-gaming px-8 py-4 text-lg rounded-full border-0"
            style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)', color: '#0a0a0a', boxShadow: '0 0 30px rgba(255,215,0,0.4)' }}
            onClick={() => window.open('https://www.youtube.com/@Giogioxii', '_blank')}
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            <Youtube className="mr-2 h-5 w-5" />
            Guarda i Video
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-gaming px-8 py-4 text-lg rounded-full transition-all duration-300"
            style={{ borderColor: 'rgba(255,215,0,0.4)', color: '#FFD700', background: 'rgba(255,215,0,0.05)', backdropFilter: 'blur(8px)' }}
            onClick={() => window.open('https://discord.gg/9T9zbyp8', '_blank')}
          >
            <Users className="mr-2 h-5 w-5" />
            Community
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className={`transition-all duration-1000 delay-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 mx-auto group"
            style={{ color: 'rgba(255,215,0,0.4)' }}
            aria-label="Scorri verso il basso"
          >
            <span className="font-gaming text-xs tracking-widest group-hover:text-neon-yellow transition-colors">SCOPRI DI PIÙ</span>
            <ChevronDown className="h-6 w-6 animate-bounce group-hover:text-neon-yellow transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
