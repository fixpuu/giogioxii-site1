import { useRef, useCallback, ReactNode } from 'react';

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    maxTilt?: number; // degrees
    glowColor?: string;
}

const TiltCard = ({ children, className = '', style, maxTilt = 12, glowColor = 'rgba(255,215,0,0.2)' }: TiltCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;   // -0.5 to 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        const rotX = -y * maxTilt;
        const rotY = x * maxTilt;

        card.style.transform = `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
        card.style.boxShadow = `0 0 30px ${glowColor}, ${rotY * -2}px ${rotX * 2}px 40px ${glowColor}`;
    }, [maxTilt, glowColor]);

    const handleMouseLeave = useCallback(() => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)';
        card.style.boxShadow = 'none';
    }, []);

    return (
        <div
            ref={cardRef}
            className={className}
            style={{ ...style, transition: 'transform 0.15s ease, box-shadow 0.15s ease', willChange: 'transform' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
};

export default TiltCard;
