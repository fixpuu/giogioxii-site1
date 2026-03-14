import { useEffect, useRef, useState } from 'react';
import { Youtube, Instagram, MessageCircle, Mail, Heart, ExternalLink } from 'lucide-react';
import ParticlesBg from '@/components/ParticlesBg';

const CONTACTS = [
  { icon: Mail, label: 'Email', value: 'gioelebisson@outlook.it', href: 'mailto:gioelebisson@outlook.it', accent: '#FFD700' },
  { icon: MessageCircle, label: 'Discord', value: '@giogioxii_02984', href: null, accent: '#5865F2' },
  { icon: Instagram, label: 'Instagram DM', value: '@giogioxii', href: 'https://www.instagram.com/giogioxii', accent: '#E1306C' },
];

const CHANNELS = [
  {
    name: 'Giogioxii',
    desc: 'Il canale principale — gaming, tutorial, speicali e molto altro.',
    url: 'https://www.youtube.com/@Giogioxii',
    accent: '#FF0000',
    tag: 'MAIN',
  },
  {
    name: 'Giogioxii Plus',
    desc: 'Il secondo canale — contenuti extra, gameplay e format sperimentali unici.',
    url: 'https://youtube.com/@giogioxii_plus?si=qwav13GVTNr81tYa',
    accent: '#FFD700',
    tag: 'NEW',
  },
];

const SOCIALS = [
  { icon: Youtube, href: 'https://www.youtube.com/@Giogioxii', label: 'YouTube', color: '#FF0000' },
  { icon: Instagram, href: 'https://www.instagram.com/giogioxii?igsh=YjFscjB1azIwdnJs&utm_source=qr', label: 'Instagram', color: '#E1306C' },
  { icon: MessageCircle, href: 'https://www.tiktok.com/@giogioxiiofficial?_t=ZN-8xRlO6lKp54&_r=1', label: 'TikTok', color: '#69C9D0' },
  { icon: MessageCircle, href: 'https://whatsapp.com/channel/0029VaOVoAJ8vd1PQUKdFV27', label: 'WhatsApp', color: '#25D366' },
];

const ContactSection = () => {
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
    <section id="contact" ref={ref} className="relative py-24 px-6" style={{ background: 'linear-gradient(180deg, #0a0b10 0%, #08090d 100%)' }}>
      <ParticlesBg count={12} rockets intensity={0.5} />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-gaming text-xs tracking-[0.4em] mb-3" style={{ color: 'rgba(255,215,0,0.5)' }}>— CONTATTI —</p>
          <h2 className="text-4xl md:text-6xl font-gaming font-black mb-4" style={{ color: '#FFD700', textShadow: '0 0 40px rgba(255,215,0,0.3)' }}>
            Rimaniamo in Contatto
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Hai un'idea per una collaborazione? Vuoi dire ciao? Scrivimi!</p>
        </div>

        {/* YouTube Channels — featured prominently */}
        <div className={`mb-10 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-gaming text-xs tracking-widest mb-4 text-center" style={{ color: 'rgba(255,215,0,0.45)' }}>I MIEI CANALI YOUTUBE</p>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {CHANNELS.map((ch) => (
              <a
                key={ch.name}
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl p-5 flex items-start gap-4 transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: `${ch.accent}08`,
                  border: `1px solid ${ch.accent}30`,
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 30px ${ch.accent}20`)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${ch.accent}18`, border: `1px solid ${ch.accent}40` }}
                >
                  <Youtube className="h-5 w-5" style={{ color: ch.accent }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-gaming text-white text-base group-hover:text-neon-yellow transition-colors">{ch.name}</span>
                    <span
                      className="px-2 py-0.5 rounded-full font-gaming text-xs"
                      style={{ background: `${ch.accent}20`, color: ch.accent, border: `1px solid ${ch.accent}40` }}
                    >
                      {ch.tag}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{ch.desc}</p>
                </div>
                <ExternalLink className="h-4 w-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: ch.accent }} />
              </a>
            ))}
          </div>
        </div>

        {/* Contact info + Socials */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact row */}
          <div
            className={`rounded-2xl p-6 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,215,0,0.12)' }}
          >
            <h3 className="font-gaming text-sm tracking-widest mb-5" style={{ color: 'rgba(255,215,0,0.6)' }}>CONTATTAMI DIRETTAMENTE</h3>
            <div className="space-y-3">
              {CONTACTS.map((c) => {
                const Icon = c.icon;
                const content = (
                  <>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${c.accent}18`, border: `1px solid ${c.accent}35` }}>
                      <Icon className="h-4 w-4" style={{ color: c.accent }} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-0.5">{c.label}</p>
                      <p className="text-white text-sm font-gaming">{c.value}</p>
                    </div>
                  </>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} className="flex items-center gap-3 p-3 rounded-xl transition-all hover:scale-[1.02]" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    {content}
                  </a>
                ) : (
                  <div key={c.label} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Social + thank you */}
          <div className="flex flex-col gap-6">
            <div
              className={`rounded-2xl p-6 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,215,0,0.12)' }}
            >
              <h3 className="font-gaming text-sm tracking-widest mb-5" style={{ color: 'rgba(255,215,0,0.6)' }}>SEGUIMI SUI SOCIAL</h3>
              <div className="grid grid-cols-2 gap-3">
                {SOCIALS.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:scale-[1.03] group"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = `${color}40`)}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
                  >
                    <Icon className="h-5 w-5 transition-colors" style={{ color: 'rgba(255,255,255,0.3)' }} />
                    <span className="font-gaming text-sm text-gray-500 group-hover:text-white transition-colors">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div
              className={`rounded-2xl p-6 text-center transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ background: 'rgba(244,63,94,0.07)', border: '1px solid rgba(244,63,94,0.2)' }}
            >
              <Heart className="h-8 w-8 mx-auto mb-3" style={{ color: '#f43f5e' }} />
              <p className="font-gaming text-white mb-1">Grazie per il supporto!</p>
              <p className="text-gray-600 text-sm">Ogni like, commento e condivisione mi aiuta a crescere. Siete fantastici! ❤️</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
