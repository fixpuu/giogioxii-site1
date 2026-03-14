import { useEffect, useRef, useState } from 'react';
import { Target, Heart, Lightbulb, Gamepad2, Camera, Code, Music, MessageSquare, Video, Mic } from 'lucide-react';
import ParticlesBg from '@/components/ParticlesBg';
import MatrixRain from './MatrixRain';

const STORY = [
  {
    icon: MessageSquare,
    title: 'Il Nome',
    content:
      'Il nome era stato inventato quando avevo creato l\'account Epic Games. Non sapevo che nome mettere, perché non volevo usare "GioXi 01". Dopo un po\' ho pensato: di soprannome mi chiamavano "Giogio", quindi ho fatto l\'unione tra Giogio e GioXi 01. Il risultato fu "Giogioxi", ma quel nome era già usato — ho aggiunto una "i" e nacque "Giogioxii".',
    accent: '#FFD700',
  },
  {
    icon: Video,
    title: 'Pubblicazione sui Social',
    content:
      'L\'inizio fu a settembre 2023 con contenuti su TikTok. Un mese dopo iniziai su YouTube. Il mio primo Shorts esplose: 7 iscritti e 2000+ views in poco tempo. Prima di tutto però, insieme a Fixpu, avevamo creato il logo che trovate sul sito.',
    accent: '#FF0000',
  },
  {
    icon: Mic,
    title: 'Primo Video Parlato',
    content:
      'Il primo video parlato era su Fortnite. A convincermi fu Fixpu: "Se tu parlassi, i tuoi video andranno meglio" — aveva ragione. Ero timido, parlavo casuale, ma col tempo la timidezza è svanita e ho imparato a editare sempre meglio.',
    accent: '#5865F2',
  },
  {
    icon: Target,
    title: 'Oggi e Domani',
    content:
      'Da ottobre 2023 ad oggi i contenuti sono cambiati tantissimo. A giugno 2025 sono a 420+ iscritti e con 110K+ views fatte solo nel 2025. Non mi sarei mai immaginato arrivare a questo punto — e non mi fermo.',
    accent: '#4ade80',
  },
];

const INTERESTS = [
  { icon: Gamepad2, name: 'Gaming', desc: 'FPS, RPG, Indie Games', accent: '#FFD700' },
  { icon: Camera, name: 'Content', desc: 'YouTube, TikTok', accent: '#FF0000' },
  { icon: Code, name: 'Tech', desc: 'Hardware, Software', accent: '#60a5fa' },
  { icon: Music, name: 'Music', desc: 'Electronic, Gaming OSTs', accent: '#a78bfa' },
];

const SKILLS = [
  { name: 'Content Creation', level: 90, color: '#FFD700' },
  { name: 'Video Editing', level: 85, color: '#FFA500' },
  { name: 'Gaming', level: 95, color: '#4ade80' },
  { name: 'Storytelling', level: 80, color: '#60a5fa' },
];

const AboutSection = () => {
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
    <section id="about" ref={ref} className="relative py-24 px-6 overflow-hidden" style={{ background: 'linear-gradient(180deg, #08090d 0%, #0d0e14 100%)' }}>
      <ParticlesBg count={18} rockets grid intensity={0.4} />
      <MatrixRain opacity={0.12} color="#FFD700" />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-gaming text-xs tracking-[0.4em] mb-3" style={{ color: 'rgba(255,215,0,0.5)' }}>— CHI SONO —</p>
          <h2 className="text-4xl md:text-6xl font-gaming font-black mb-4 holo-text" style={{ textShadow: '0 0 40px rgba(255,215,0,0.3)' }}>
            La Mia Storia
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">La mia storia, le mie passioni e quello che mi guida ogni giorno</p>
        </div>

        {/* Story cards - horizontal scroll on mobile, vertical on desktop */}
        <div className="space-y-4 mb-16">
          {STORY.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className={`rounded-2xl p-6 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{
                  transitionDelay: `${i * 120}ms`,
                  background: 'rgba(255,255,255,0.025)',
                  border: `1px solid ${s.accent}20`,
                  backdropFilter: 'blur(10px)',
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 30px ${s.accent}15`)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5"
                    style={{ background: `${s.accent}18`, border: `1px solid ${s.accent}35` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: s.accent }} />
                  </div>
                  <div>
                    <h3 className="font-gaming text-white text-lg mb-2" style={{ textShadow: `0 0 15px ${s.accent}30` }}>
                      {s.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills + Interests grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Skills */}
          <div
            className={`rounded-2xl p-6 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,215,0,0.12)' }}
          >
            <h3 className="font-gaming text-lg tracking-wider mb-6" style={{ color: 'rgba(255,215,0,0.7)' }}>SKILLS</h3>
            <div className="space-y-5">
              {SKILLS.map((sk) => (
                <div key={sk.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white text-sm font-gaming">{sk.name}</span>
                    <span className="text-xs font-mono" style={{ color: sk.color }}>{sk.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)' }}>
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: visible ? `${sk.level}%` : '0%',
                        background: `linear-gradient(90deg, ${sk.color}, ${sk.color}88)`,
                        boxShadow: `0 0 10px ${sk.color}60`,
                        transitionDelay: '500ms',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests + Goals */}
          <div className="space-y-6">
            {/* Interests */}
            <div
              className={`rounded-2xl p-6 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,215,0,0.12)' }}
            >
              <h3 className="font-gaming text-lg tracking-wider mb-5" style={{ color: 'rgba(255,215,0,0.7)' }}>INTERESSI</h3>
              <div className="grid grid-cols-2 gap-3">
                {INTERESTS.map((it) => {
                  const Icon = it.icon;
                  return (
                    <div
                      key={it.name}
                      className="rounded-xl p-4 transition-all duration-200 hover:scale-105"
                      style={{ background: `${it.accent}0d`, border: `1px solid ${it.accent}25` }}
                    >
                      <Icon className="h-5 w-5 mb-2" style={{ color: it.accent }} />
                      <p className="text-white text-sm font-gaming">{it.name}</p>
                      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{it.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Goals mini-card */}
            <div
              className={`rounded-2xl p-6 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,215,0,0.12)' }}
            >
              <h3 className="font-gaming text-lg tracking-wider mb-4" style={{ color: 'rgba(255,215,0,0.7)' }}>OBIETTIVI</h3>
              <div className="space-y-3">
                {[
                  { icon: Heart, text: 'Costruire una community solida e accogliente', color: '#f43f5e' },
                  { icon: Lightbulb, text: 'Sperimentare nuovi format e contenuti originali', color: '#FFD700' },
                  { icon: Gamepad2, text: 'Crescere e raggiungere nuovi traguardi ogni mese', color: '#4ade80' },
                ].map(({ icon: I, text, color }) => (
                  <div key={text} className="flex items-start gap-3">
                    <I className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color }} />
                    <p className="text-gray-500 text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
