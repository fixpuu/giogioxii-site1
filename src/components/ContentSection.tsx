import { useState } from 'react';
import { Play, Eye, ThumbsUp, Calendar, ExternalLink, MessageCircle, Youtube } from 'lucide-react';
import ParticlesBg from '@/components/ParticlesBg';
import TiltCard from './TiltCard';

const videos = [
  {
    id: 1,
    title: 'Recensione e Test Guida - Citroen Ami e Mobilize Duo 45 Neo',
    category: 'Vlog',
    views: '950',
    likes: '45',
    date: '3 mesi fa',
    thumbnail: 'https://img.youtube.com/vi/0tffStcelIw/hqdefault.jpg',
    duration: '15:20',
    url: 'https://youtu.be/0tffStcelIw',
  },
  {
    id: 2,
    title: 'Come mettere le MOD su EuroTruck Simulator 2 (TUTORIAL)',
    category: 'Tutorial',
    views: '1.2K',
    likes: '82',
    date: '1 anno fa',
    thumbnail: 'https://img.youtube.com/vi/fHSDyji3O3w/hqdefault.jpg',
    duration: '18:45',
    url: 'https://youtu.be/fHSDyji3O3w',
  },
  {
    id: 3,
    title: 'COME SI USA IL GRIMALDELLO SEMPLICE - Ep.2 Thief Simulator',
    category: 'Gaming',
    views: '840',
    likes: '38',
    date: '2 mesi fa',
    thumbnail: 'https://img.youtube.com/vi/6rOCp2xJryU/hqdefault.jpg',
    duration: '12:10',
    url: 'https://youtu.be/6rOCp2xJryU',
  },
  {
    id: 4,
    title: 'SPECIALE 100 ISCRITTI! - Umboxing',
    category: 'Speciale',
    views: '520',
    likes: '28',
    date: '6 mesi fa',
    thumbnail: 'https://img.youtube.com/vi/b5HvEky3TfE/hqdefault.jpg',
    duration: '12:34',
    url: 'https://youtu.be/b5HvEky3TfE',
  },
];

const community = [
  {
    title: 'Community Discord',
    description: 'Server Discord attivo per condividere gaming, contenuti e momenti divertenti insieme.',
    tags: ['Community', 'Gaming', 'Social'],
    link: 'https://discord.gg/9T9zbyp8',
    accent: '#5865F2',
    icon: '🎮',
  },
  {
    title: 'Canale WhatsApp',
    description: 'Seguimi su WhatsApp per aggiornamenti rapidi, anteprime e contenuti esclusivi.',
    tags: ['Updates', 'Exclusive', 'Community'],
    link: 'https://whatsapp.com/channel/0029VaOVoAJ8vd1PQUKdFV27',
    accent: '#25D366',
    icon: '💬',
  },
  {
    title: 'Giogioxii Plus',
    description: 'Il mio secondo canale YouTube pieno di contenuti extra, gameplay e molto altro!',
    tags: ['YouTube', 'Extra Content', 'Gaming'],
    link: 'https://youtube.com/@giogioxii_plus?si=qwav13GVTNr81tYa',
    accent: '#FF0000',
    icon: '▶',
  },
];

const CARD_STYLE = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,215,0,0.15)',
  backdropFilter: 'blur(10px)',
};

const ContentSection = () => {
  const [tab, setTab] = useState<'videos' | 'community'>('videos');

  return (
    <section id="content" className="relative py-24 px-6" style={{ background: 'linear-gradient(180deg, #08090d 0%, #0a0b10 100%)' }}>
      <ParticlesBg count={15} rockets={false} grid intensity={0.5} />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-gaming text-xs tracking-[0.4em] mb-3" style={{ color: 'rgba(255,215,0,0.5)' }}>
            — CONTENT HUB —
          </p>
          <h2
            className="text-4xl md:text-6xl font-gaming font-black mb-4 holo-text"
            style={{ textShadow: '0 0 40px rgba(255,215,0,0.3)' }}
          >
            I Miei Contenuti
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Esplora i miei video, progetti e tutto quello che creo per la community
          </p>
        </div>

        {/* Tabs with Animated Borders */}
        <div className="flex justify-center mb-12">
          <div className="flex rounded-full p-1 gap-1 overflow-hidden" style={{ background: 'rgba(255,215,0,0.07)', border: '1px solid rgba(255,215,0,0.15)' }}>
            {(['videos', 'community'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative px-8 py-2.5 rounded-full font-gaming text-sm tracking-wider transition-all duration-300 capitalize overflow-hidden ${tab === t ? 'text-[#0a0a0a]' : 'text-orange-400/50 hover:text-orange-400'}`}
              >
                {tab === t && <div className="absolute inset-0 animated-border" />}
                <span className="relative z-10 flex items-center justify-center">
                  {t === 'videos' ? (
                    <><Play className="inline h-4 w-4 mr-2" />Video</>
                  ) : (
                    <><MessageCircle className="inline h-4 w-4 mr-2" />Community</>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Videos grid */}
        {tab === 'videos' && (
          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((v) => (
              <TiltCard
                key={v.id}
                maxTilt={6}
                glowColor="rgba(255,215,0,0.15)"
                className="group rounded-2xl overflow-hidden cursor-pointer"
                style={CARD_STYLE}
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden h-48">
                  <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300"
                      style={{ background: 'rgba(255,215,0,0.9)' }}
                    >
                      <Play className="h-6 w-6 text-black fill-black" />
                    </div>
                  </div>
                  {/* Duration badge */}
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-xs font-mono bg-black/80 text-white">
                    {v.duration}
                  </span>
                  {/* Category badge */}
                  <span
                    className="absolute top-2 left-2 px-3 py-1 rounded-full text-xs font-gaming"
                    style={{ background: 'rgba(255,215,0,0.9)', color: '#000' }}
                  >
                    {v.category}
                  </span>
                </div>
                {/* Info */}
                <div className="p-5">
                  <h3 className="font-gaming text-white text-base mb-3 line-clamp-2 group-hover:text-neon-yellow transition-colors">
                    {v.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Eye className="h-3.5 w-3.5" />{v.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="h-3.5 w-3.5" />{v.likes}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />{v.date}
                    </span>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        )}

        {/* Community grid */}
        {tab === 'community' && (
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {community.map((c) => (
              <TiltCard
                key={c.title}
                maxTilt={10}
                glowColor={`${c.accent}30`}
                className="group rounded-3xl p-8 cursor-pointer border transition-all duration-500"
                style={{ background: 'rgba(255,255,255,0.02)', borderColor: `${c.accent}20` }}
              >
                <div onClick={() => window.open(c.link, '_blank')}>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-xl"
                    style={{ background: `${c.accent}20`, border: `1px solid ${c.accent}40` }}
                  >
                    {c.icon}
                  </div>
                  <h3 className="font-gaming text-white text-lg mb-2 group-hover:text-neon-yellow transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{c.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-xs font-gaming"
                        style={{ background: `${c.accent}15`, color: c.accent, border: `1px solid ${c.accent}30` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-gaming" style={{ color: c.accent }}>
                    <ExternalLink className="h-3.5 w-3.5" />
                    Unisciti
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        )}

        {/* CTAs */}
        <div className="text-center mt-16 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="group relative overflow-hidden px-8 py-4 rounded-full font-gaming text-base font-bold transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)', color: '#000', boxShadow: '0 0 25px rgba(255,215,0,0.35)' }}
            onClick={() => window.open('https://www.youtube.com/@Giogioxii', '_blank')}
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            <Youtube className="inline mr-2 h-5 w-5" />
            Canale Principale
          </button>
          <button
            className="px-8 py-4 rounded-full font-gaming text-base font-bold transition-all duration-300 hover:scale-105"
            style={{ border: '1px solid rgba(255,215,0,0.3)', color: '#FFD700', background: 'rgba(255,215,0,0.05)' }}
            onClick={() => window.open('https://youtube.com/@giogioxii_plus', '_blank')}
          >
            <Youtube className="inline mr-2 h-5 w-5" />
            Giogioxii Plus
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
