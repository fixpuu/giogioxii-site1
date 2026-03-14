import { useState, useEffect } from 'react';
import { Youtube, Home, User, Monitor, Gamepad2, Mail, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Content', href: '#content', icon: Monitor },
  { name: 'Setup', href: '#setup', icon: Gamepad2 },
  { name: 'Contatti', href: '#contact', icon: Mail },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-3'
        }`}
      style={{
        background: scrolled
          ? 'rgba(5,6,10,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,215,0,0.12)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <button
          onClick={() => scrollTo('#home')}
          className="font-gaming font-black text-xl tracking-wider"
          style={{ color: '#FFD700', textShadow: '0 0 20px rgba(255,215,0,0.5)' }}
        >
          GIOGIOXII
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ name, href }) => (
            <button
              key={name}
              onClick={() => scrollTo(href)}
              className="font-gaming text-sm tracking-wider transition-all duration-300 hover:scale-105"
              style={{ color: 'rgba(255,215,0,0.55)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#FFD700')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,215,0,0.55)')}
            >
              {name}
            </button>
          ))}
        </div>

        {/* YouTube CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => window.open('https://www.youtube.com/@Giogioxii', '_blank')}
            className="flex items-center gap-2 px-5 py-2 rounded-full font-gaming text-sm font-bold transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              color: '#0a0a0a',
              boxShadow: '0 0 20px rgba(255,215,0,0.3)',
            }}
          >
            <Youtube className="h-4 w-4" />
            YouTube
          </button>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: '#FFD700' }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ background: 'rgba(5,6,10,0.97)', borderBottom: '1px solid rgba(255,215,0,0.12)' }}
      >
        <div className="px-6 py-4 space-y-1">
          {NAV_LINKS.map(({ name, href, icon: Icon }) => (
            <button
              key={name}
              onClick={() => scrollTo(href)}
              className="flex items-center gap-3 w-full text-left py-3 px-3 rounded-lg font-gaming text-sm transition-all duration-200"
              style={{ color: 'rgba(255,215,0,0.65)' }}
              onMouseEnter={e => { (e.currentTarget.style.color = '#FFD700'); (e.currentTarget.style.background = 'rgba(255,215,0,0.06)'); }}
              onMouseLeave={e => { (e.currentTarget.style.color = 'rgba(255,215,0,0.65)'); (e.currentTarget.style.background = 'transparent'); }}
            >
              <Icon className="h-4 w-4" />
              {name}
            </button>
          ))}
          <div className="pt-3 border-t border-neon-yellow/10">
            <button
              onClick={() => { window.open('https://www.youtube.com/@Giogioxii', '_blank'); setIsOpen(false); }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-gaming text-sm font-bold"
              style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)', color: '#0a0a0a' }}
            >
              <Youtube className="h-4 w-4" />
              Visita YouTube
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
