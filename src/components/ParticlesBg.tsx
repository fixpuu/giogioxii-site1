import { useEffect, useRef } from 'react';

interface ParticlesBgProps {
    /** Number of small glowing dots */
    count?: number;
    /** Show mini rockets flying across (2 rockets) */
    rockets?: boolean;
    /** Show a subtle grid overlay */
    grid?: boolean;
    /** Opacity multiplier 0–1 */
    intensity?: number;
}

// Precompute stable random values per instance using a seeded approach
function seededRandom(seed: number) {
    let s = seed;
    return () => {
        s = (s * 16807 + 0) % 2147483647;
        return (s - 1) / 2147483646;
    };
}

const MiniRocket = ({ color = '#FFD700', size = 14 }: { color?: string; size?: number }) => (
    <svg width={size} height={size * 1.7} viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="10" cy="14" rx="5" ry="10" fill={color} opacity="0.8" />
        <path d="M10 2 C7 7,5 11,5 14 L15 14 C15 11,13 7,10 2Z" fill={color} />
        <path d="M5 19 L1 28 L5 24" fill={color} opacity="0.6" />
        <path d="M15 19 L19 28 L15 24" fill={color} opacity="0.6" />
        <ellipse cx="10" cy="27" rx="2.5" ry="4.5" fill="#FF6B00" opacity="0.8" />
        <ellipse cx="10" cy="27" rx="1.5" ry="3" fill="#FFD700" opacity="0.9" />
    </svg>
);

const ParticlesBg = ({ count = 20, rockets = false, grid = false, intensity = 1 }: ParticlesBgProps) => {
    const rng = seededRandom(count * 37 + (rockets ? 7 : 0));

    const particles = Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${rng() * 100}%`,
        top: `${rng() * 100}%`,
        delay: `${rng() * 8}s`,
        duration: `${4 + rng() * 6}s`,
        size: rng() > 0.6 ? 2 : 1.5,
        opacity: 0.2 + rng() * 0.35,
    }));

    const rocketData = rockets
        ? [
            { top: `${15 + rng() * 20}%`, delay: `${rng() * 4}s`, duration: `${14 + rng() * 8}s`, animClass: 'animate-ship-2', color: '#FFD700', size: 14 },
            { top: `${50 + rng() * 25}%`, delay: `${6 + rng() * 4}s`, duration: `${20 + rng() * 6}s`, animClass: 'animate-ship-3', color: '#FFA500', size: 11 },
        ]
        : [];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity: intensity }}>
            {/* Optional grid */}
            {grid && (
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,215,0,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,215,0,0.018) 1px,transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />
            )}

            {/* Particles */}
            {particles.map(p => (
                <div
                    key={p.id}
                    className="absolute animate-float"
                    style={{ left: p.left, top: p.top, animationDelay: p.delay, animationDuration: p.duration }}
                >
                    <div
                        style={{
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            borderRadius: '50%',
                            background: `rgba(255,215,0,${p.opacity * intensity})`,
                            boxShadow: `0 0 4px rgba(255,215,0,${p.opacity * 0.8 * intensity})`,
                        }}
                    />
                </div>
            ))}

            {/* Mini rockets */}
            {rocketData.map((r, i) => (
                <div key={i} className={`absolute ${r.animClass}`} style={{ top: r.top, animationDelay: r.delay, animationDuration: r.duration }}>
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        {/* Trail */}
                        <div style={{
                            position: 'absolute', right: '100%', top: '50%',
                            transform: 'translateY(-50%)',
                            width: '25px', height: '1.5px',
                            background: `linear-gradient(90deg, transparent, ${r.color}55)`,
                            borderRadius: '2px',
                        }} />
                        <MiniRocket color={r.color} size={r.size} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ParticlesBg;
