import { useEffect, useRef } from 'react';

const CHARS = 'ギョウXII01アイウエオカキクケコサシスセソタチツテトナニヌネノABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';

interface MatrixRainProps {
    opacity?: number;
    color?: string;
}

const MatrixRain = ({ opacity = 0.15, color = '#FFD700' }: MatrixRainProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const fontSize = 13;
        let cols = Math.floor(canvas.width / fontSize);
        const drops: number[] = Array.from({ length: cols }, () => Math.random() * -canvas.height);

        const draw = () => {
            ctx.fillStyle = 'rgba(8,9,13,0.055)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = color;
            ctx.font = `${fontSize}px monospace`;

            // Update cols on resize
            cols = Math.floor(canvas.width / fontSize);
            while (drops.length < cols) drops.push(Math.random() * -canvas.height);

            for (let i = 0; i < cols; i++) {
                const char = CHARS[Math.floor(Math.random() * CHARS.length)];
                const alpha = 0.3 + Math.random() * 0.5;
                ctx.globalAlpha = alpha * opacity;
                ctx.fillText(char, i * fontSize, drops[i] * fontSize);

                // Bright head
                if (Math.random() < 0.05) {
                    ctx.globalAlpha = opacity;
                    ctx.fillStyle = '#ffffff';
                    ctx.fillText(char, i * fontSize, drops[i] * fontSize);
                    ctx.fillStyle = color;
                }

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i] += 0.5;
            }
            ctx.globalAlpha = 1;
        };

        const interval = setInterval(draw, 50);
        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resize);
        };
    }, [opacity, color]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity }}
        />
    );
};

export default MatrixRain;
