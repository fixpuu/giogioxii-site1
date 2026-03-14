import { useState, useEffect, useCallback } from 'react';

const BOOT_LINES = [
    { text: '> GIOGIOXII_OS v2.0 — BOOT SEQUENCE INITIATED', delay: 0 },
    { text: '> Loading kernel modules...', delay: 350 },
    { text: '> [OK] GPU driver loaded — 144Hz mode active', delay: 700 },
    { text: '> [OK] Audio subsystem initialized', delay: 1050 },
    { text: '> Connecting to YouTube API...', delay: 1400 },
    { text: '> [OK] Channel data synchronized — 420 subscribers', delay: 1750 },
    { text: '> Loading community modules...', delay: 2100 },
    { text: '> [OK] Discord link established', delay: 2350 },
    { text: '> Rendering UI engine...', delay: 2600 },
    { text: '> [OK] All systems nominal', delay: 2900 },
    { text: '', delay: 3100 },
    { text: '>> ACCESS GRANTED — Welcome, Player.', delay: 3200 },
];

const TOTAL_DURATION = 3800; // ms

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [visibleLines, setVisibleLines] = useState<string[]>([]);
    const [progress, setProgress] = useState(0);
    const [done, setDone] = useState(false);
    const [fading, setFading] = useState(false);

    const finish = useCallback(() => {
        setDone(true);
        setTimeout(() => setFading(true), 300);
        setTimeout(() => onComplete(), 1100);
    }, [onComplete]);

    useEffect(() => {
        // Schedule each boot line appearance
        const timeouts: ReturnType<typeof setTimeout>[] = [];
        BOOT_LINES.forEach(({ text, delay }) => {
            timeouts.push(setTimeout(() => {
                setVisibleLines(prev => [...prev, text]);
            }, delay));
        });

        // Progress bar
        const start = Date.now();
        const interval = setInterval(() => {
            const elapsed = Date.now() - start;
            const pct = Math.min(100, Math.round((elapsed / TOTAL_DURATION) * 100));
            setProgress(pct);
            if (pct >= 100) {
                clearInterval(interval);
                finish();
            }
        }, 40);

        return () => {
            timeouts.forEach(clearTimeout);
            clearInterval(interval);
        };
    }, [finish]);

    return (
        <div
            className={`fixed inset-0 z-[200] flex flex-col bg-[#050a0f] transition-opacity duration-700 ${fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            {/* Scanlines overlay */}
            <div className="absolute inset-0 pointer-events-none z-10"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 4px)',
                }}
            />

            {/* Grid bg */}
            <div className="absolute inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,215,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.04) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-neon-yellow/60 z-20" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-neon-yellow/60 z-20" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-neon-yellow/60 z-20" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-neon-yellow/60 z-20" />

            <div className="flex-1 flex flex-col items-center justify-center px-6 z-20 relative">
                {/* Logo */}
                <div className="mb-10 text-center select-none">
                    <span
                        className="block text-7xl md:text-9xl font-gaming font-black leading-none"
                        style={{
                            color: '#FFD700',
                            textShadow: '0 0 30px rgba(255,215,0,0.8), 0 0 60px rgba(255,215,0,0.4), 0 0 100px rgba(255,165,0,0.3)',
                            letterSpacing: '0.05em',
                        }}
                    >
                        G
                    </span>
                    <span
                        className="block text-sm font-gaming tracking-[0.4em] mt-1"
                        style={{ color: 'rgba(255,215,0,0.6)' }}
                    >
                        GIOGIOXII
                    </span>
                </div>

                {/* Terminal window */}
                <div
                    className="w-full max-w-xl rounded-lg overflow-hidden mb-8"
                    style={{
                        background: 'rgba(0,0,0,0.7)',
                        border: '1px solid rgba(255,215,0,0.25)',
                        boxShadow: '0 0 30px rgba(255,215,0,0.1)',
                    }}
                >
                    {/* Title bar */}
                    <div className="flex items-center gap-2 px-4 py-2 border-b border-neon-yellow/20" style={{ background: 'rgba(255,215,0,0.05)' }}>
                        <div className="w-3 h-3 rounded-full bg-red-500/70" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                        <div className="w-3 h-3 rounded-full bg-green-500/70" />
                        <span className="ml-2 font-gaming text-xs text-neon-yellow/50 tracking-widest">SYSTEM TERMINAL</span>
                    </div>
                    {/* Terminal body */}
                    <div className="p-4 min-h-[180px] font-mono text-xs md:text-sm space-y-1 leading-relaxed">
                        {visibleLines.map((line, i) => (
                            <p
                                key={i}
                                className="text-neon-yellow/90 animate-fade-in"
                                style={{
                                    color: line.startsWith('>>') ? '#FFD700' : line.startsWith('> [OK]') ? '#4ade80' : 'rgba(255,215,0,0.7)',
                                    fontWeight: line.startsWith('>>') ? 700 : 400,
                                    textShadow: line.startsWith('>>') ? '0 0 10px rgba(255,215,0,0.8)' : 'none',
                                }}
                            >
                                {line}
                                {i === visibleLines.length - 1 && !done && (
                                    <span className="ml-1 inline-block w-2 h-4 bg-neon-yellow/80 animate-pulse align-bottom" />
                                )}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Progress bar */}
                <div className="w-full max-w-xl">
                    <div className="flex justify-between mb-2">
                        <span className="font-gaming text-xs text-neon-yellow/60 tracking-widest">LOADING</span>
                        <span className="font-gaming text-xs text-neon-yellow font-bold">{progress}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,215,0,0.1)' }}>
                        <div
                            className="h-full rounded-full transition-all duration-100 ease-linear"
                            style={{
                                width: `${progress}%`,
                                background: 'linear-gradient(90deg, #FFD700, #FFA500)',
                                boxShadow: '0 0 12px rgba(255,215,0,0.7)',
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Bottom status */}
            <div className="z-20 text-center pb-6 space-y-1">
                <p className="font-gaming text-xs tracking-widest" style={{ color: 'rgba(255,215,0,0.35)' }}>
                    GIOGIOXII.COM — GAMING SYSTEM BOOT
                </p>
                <p className="font-mono text-[10px] tracking-[0.2em]" style={{ color: 'rgba(255,215,0,0.18)' }}>
                    dev by{' '}
                    <a href="https://nexivo.works" target="_blank" rel="noopener noreferrer"
                        style={{ color: 'rgba(255,215,0,0.3)' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,215,0,0.6)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,215,0,0.3)')}
                    >
                        nexivo.works
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoadingScreen;
