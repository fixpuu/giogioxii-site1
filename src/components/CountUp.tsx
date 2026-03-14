import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
    target: number;
    suffix?: string;
    duration?: number; // ms
    className?: string;
    style?: React.CSSProperties;
    trigger?: boolean; // start when true
}

const CountUp = ({ target, suffix = '', duration = 1800, className = '', style, trigger = true }: CountUpProps) => {
    const [value, setValue] = useState(0);
    const started = useRef(false);

    useEffect(() => {
        if (!trigger || started.current) return;
        started.current = true;
        const startTime = performance.now();
        const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

        const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setValue(Math.round(easeOut(progress) * target));
            if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [trigger, target, duration]);

    return (
        <span className={className} style={style}>
            {value}{suffix}
        </span>
    );
};

export default CountUp;
