import { useEffect, useRef, useState } from 'react';
import { Youtube, Instagram, MessageCircle, Mail, Heart, ExternalLink, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import ParticlesBg from '@/components/ParticlesBg';

const CONTACTS = [
  { icon: Mail, label: 'Email', value: 'gioelebisson@outlook.it', href: 'mailto:gioelebisson@outlook.it', accent: '#FFD700' },
  { icon: MessageCircle, label: 'Discord', value: '@giogioxii_02984', href: null, accent: '#5865F2' },
  { icon: Instagram, label: 'Instagram DM', value: '@giogioxii', href: 'https://www.instagram.com/giogioxii', accent: '#E1306C' },
];

const CHANNELS = [
  {
    name: 'Giogioxii',
    desc: 'Il canale principale — gaming, tutorial, speciali e molto altro.',
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

  // Form State
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [result, setResult] = useState("");

  // 🔑 INSERISCI QUI LA TUA ACCESS KEY DI WEB3FORMS
  const ACCESS_KEY = "a93d4c2d-6b5a-4230-a30a-1cf462405762";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setResult("Messaggio inviato con successo! Ti risponderò al più presto.");
        (e.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setStatus('error');
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setStatus('error');
      setResult("Si è verificato un errore durante l'invio.");
    }

    // Reset status after a few seconds if successful
    if (status === 'success') {
      setTimeout(() => {
        setStatus('idle');
        setResult("");
      }, 5000);
    }
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="relative py-24 px-6 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a0b10 0%, #08090d 100%)' }}>
      <ParticlesBg count={12} rockets intensity={0.5} />

      {/* Background Glow - Reduced blur for performance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-yellow/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-gaming text-xs tracking-[0.4em] mb-3" style={{ color: 'rgba(255,215,0,0.5)' }}>— CONTATTI —</p>
          <h2 className="text-4xl md:text-6xl font-gaming font-black mb-4 holo-text" style={{ textShadow: '0 0 40px rgba(255,215,0,0.3)' }}>
            Mettiamoci in Contatto
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Hai una proposta, una domanda o vuoi semplicemente salutarmi? Usa il form qui sotto!</p>
        </div>

        {/* Channels Grid */}
        <div className={`mb-16 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {CHANNELS.map((ch) => (
              <a
                key={ch.name}
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl p-6 flex items-start gap-4 transition-all duration-300 hover:translate-y-[-4px]"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: `1px solid ${ch.accent}20`,
                }}
              >
                <div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-10" style={{ background: ch.accent }} />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${ch.accent}15`, border: `1px solid ${ch.accent}30` }}
                >
                  <Youtube className="h-6 w-6" style={{ color: ch.accent }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-gaming text-white text-lg group-hover:text-neon-yellow transition-colors">{ch.name}</span>
                    <span
                      className="px-2 py-0.5 rounded-full font-gaming text-[10px] tracking-widest"
                      style={{ background: `${ch.accent}20`, color: ch.accent, border: `1px solid ${ch.accent}30` }}
                    >
                      {ch.tag}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{ch.desc}</p>
                </div>
                <ExternalLink className="h-4 w-4 flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity mt-1" style={{ color: ch.accent }} />
              </a>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div
              className="rounded-3xl p-8 md:p-10 relative overflow-hidden h-full"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,215,0,0.15)',
              }}
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-neon-yellow/30 rounded-tl-3xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-neon-yellow/30 rounded-br-3xl pointer-events-none" />

              <h3 className="font-gaming text-2xl text-white mb-8 flex items-center gap-3">
                <Mail className="h-6 w-6 text-neon-yellow" />
                Invia un Messaggio
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block font-gaming text-[10px] tracking-[0.2em] text-gray-400 ml-1">IL TUO NOME</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Gamer_One"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:outline-none focus:border-neon-yellow/50 transition-colors font-tech"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-gaming text-[10px] tracking-[0.2em] text-gray-400 ml-1">EMAIL DI CONTATTO</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="player@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:outline-none focus:border-neon-yellow/50 transition-colors font-tech"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block font-gaming text-[10px] tracking-[0.2em] text-gray-400 ml-1">OGGETTO</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Proposta Collaborazione / Saluti"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:outline-none focus:border-neon-yellow/50 transition-colors font-tech"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block font-gaming text-[10px] tracking-[0.2em] text-gray-400 ml-1">IL TUO MESSAGGIO</label>
                  <textarea
                    name="message"
                    required
                    placeholder="Scrivi qui il tuo messaggio..."
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:outline-none focus:border-neon-yellow/50 transition-colors resize-none font-tech"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full group relative overflow-hidden py-4 rounded-xl font-gaming text-sm font-bold tracking-widest transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
                  style={{
                    background: 'linear-gradient(90deg, #FFD700, #FFA500)',
                    color: '#000',
                    boxShadow: '0 0 20px rgba(255,215,0,0.3)'
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === 'submitting' ? (
                      <><Loader2 className="h-4 w-4 animate-spin" /> INVIO IN CORSO...</>
                    ) : (
                      <><Send className="h-4 w-4" /> INVIA MESSAGGIO</>
                    )}
                  </span>
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 animate-fade-in">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <p className="text-sm font-tech">{result}</p>
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 animate-fade-in">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <p className="text-sm font-tech">{result}</p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right Column: Cards */}
          <div className={`lg:col-span-2 flex flex-col gap-6 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {/* Direct Info */}
            <div
              className="rounded-3xl p-6 relative overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,215,0,0.12)' }}
            >
              <h3 className="font-gaming text-xs tracking-widest mb-6 text-gray-500">— LINK DIRETTI</h3>
              <div className="space-y-4">
                {CONTACTS.map((c) => {
                  const Icon = c.icon;
                  const itemContent = (
                    <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-12" style={{ background: `${c.accent}15`, border: `1px solid ${c.accent}30` }}>
                        <Icon className="h-5 w-5" style={{ color: c.accent }} />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-[10px] font-gaming text-gray-600 tracking-wider mb-0.5">{c.label}</p>
                        <p className="text-white text-sm font-gaming truncate group-hover:text-neon-yellow transition-colors">{c.value}</p>
                      </div>
                    </div>
                  );
                  return c.href ? (
                    <a key={c.label} href={c.href} className="block transition-transform hover:translate-x-1">
                      {itemContent}
                    </a>
                  ) : (
                    <div key={c.label}>
                      {itemContent}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Socials Grid */}
            <div
              className="rounded-3xl p-6 relative overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,165,0,0.12)' }}
            >
              <h3 className="font-gaming text-xs tracking-widest mb-6 text-gray-500">— SOCIAL NETWORK</h3>
              <div className="grid grid-cols-2 gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/5 transition-all hover:bg-white/10 hover:border-white/20 hover:translate-y-[-2px] group"
                  >
                    <s.icon className="h-6 w-6 mb-2 transition-transform group-hover:scale-110" style={{ color: s.color }} />
                    <span className="font-gaming text-[10px] tracking-widest text-gray-400 group-hover:text-white uppercase">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Support Message */}
            <div
              className="rounded-3xl p-8 text-center flex-1 flex flex-col justify-center items-center relative overflow-hidden group"
              style={{ background: 'rgba(244,63,94,0.05)', border: '1px solid rgba(244,63,94,0.15)' }}
            >
              <div className="absolute inset-0 bg-radial-at-t from-rose-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Heart className="h-10 w-10 text-rose-500 mb-4 animate-bounce-slow" />
              <h4 className="font-gaming text-white text-lg mb-2">Supporto Infinito</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ogni tuo messaggio e interazione conta tantissimo per me. Grazie per far parte di questa community! ❤️
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
