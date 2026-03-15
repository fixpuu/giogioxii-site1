import { useEffect, useRef, useState } from 'react';
import { Youtube, Trophy, Users, Star } from 'lucide-react';
import ParticlesBg from '@/components/ParticlesBg';

const MILESTONES = [
    {
        year: '2023',
        title: "L'Inizio dell'Avventura",
        description: 'Settembre 2023: primi contenuti su TikTok e YouTube. Nasce il logo e inizia la grande passione.',
        icon: Youtube,
        accent: '#FF0000',
    },
    {
        year: '2024',
        title: 'I Primi Traguardi',
        description: 'Raggiunti i primi traguardi significativi e consolidata la community su Discord.',
        icon: Users,
        accent: '#5865F2',
    },
    {
        year: '2025',
        title: 'Lancio Giogioxii Plus',
        description: 'Apertura del secondo canale dedicato a contenuti extra, dietro le quinte e format sperimentali.',
        icon: Star,
        accent: '#FFD700',
    },
    {
        year: '2026',
        title: 'Oltre i 420 Iscritti!',
        description: 'La famiglia continua a crescere con nuovi progetti, traguardi e contenuti sempre più curati.',
        icon: Trophy,
        accent: '#FFD700',
    },
];

const TimelineSection = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold: 0.1 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section
            id="timeline"
            ref={ref}
            className="relative py-24 px-6 overflow-hidden"
            style={{ background: '#08090d' }}
        >
            <ParticlesBg count={12} rockets grid intensity={0.6} />
            <div className="scan-line" style={{ opacity: 0.15 }} />
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div
                    className={`text-center mb-20 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <p className="font-gaming text-xs tracking-[0.4em] mb-3" style={{ color: 'rgba(255,215,0,0.5)' }}>
                        — I MIEI TRAGUARDI —
                    </p>
                    <h2
                        className="text-4xl md:text-6xl font-gaming font-black holo-text"
                        style={{ textShadow: '0 0 40px rgba(255,215,0,0.3)' }}
                    >
                        Il Mio Percorso
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Center line */}
                    <div
                        className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 origin-top"
                        style={{
                            background: 'linear-gradient(180deg, transparent 0%, rgba(255,215,0,0.3) 10%, rgba(255,215,0,0.3) 90%, transparent 100%)',
                            transition: 'transform 1.5s ease',
                            transformOrigin: 'top',
                        }}
                    />

                    <div className="space-y-16">
                        {MILESTONES.map((m, i) => {
                            const Icon = m.icon;
                            const isRight = i % 2 === 0;
                            return (
                                <div
                                    key={i}
                                    className={`relative flex items-center transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : `opacity-0 ${isRight ? '-translate-x-12' : 'translate-x-12'}`}`}
                                    style={{ transitionDelay: `${i * 200 + 300}ms` }}
                                >
                                    {/* Dot */}
                                    <div
                                        className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full items-center justify-center z-10"
                                        style={{
                                            background: '#08090d',
                                            border: `2px solid ${m.accent}`,
                                            boxShadow: `0 0 20px ${m.accent}60`,
                                        }}
                                    >
                                        <Icon className="h-4 w-4" style={{ color: m.accent }} />
                                    </div>

                                    {/* Mobile dot */}
                                    <div
                                        className="md:hidden flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4"
                                        style={{ background: '#08090d', border: `2px solid ${m.accent}`, boxShadow: `0 0 16px ${m.accent}50` }}
                                    >
                                        <Icon className="h-4 w-4" style={{ color: m.accent }} />
                                    </div>

                                    {/* Card — alternating sides on desktop */}
                                    <div className={`w-full md:w-5/12 ${isRight ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                                        <div
                                            className="rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 group"
                                            style={{
                                                background: 'rgba(255,255,255,0.03)',
                                                border: `1px solid ${m.accent}25`,
                                                backdropFilter: 'blur(10px)',
                                            }}
                                            onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 30px ${m.accent}20`)}
                                            onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                                        >
                                            <span
                                                className="inline-block px-3 py-1 rounded-full font-gaming text-xs mb-3"
                                                style={{ background: `${m.accent}18`, color: m.accent, border: `1px solid ${m.accent}35` }}
                                            >
                                                {m.year}
                                            </span>
                                            <h3
                                                className="font-gaming text-xl text-white mb-2 group-hover:text-neon-yellow transition-colors"
                                            >
                                                {m.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">{m.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
