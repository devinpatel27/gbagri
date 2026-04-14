'use client';

import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    className?: string;
    duration?: number;
}

export function FadeIn({
    children,
    delay = 0,
    direction = 'up',
    className = '',
    duration = 0.65,
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    const directionOffset = {
        up: { y: 50 },
        down: { y: -50 },
        left: { x: -50 },
        right: { x: 50 },
        none: {},
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, ...directionOffset[direction] }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface StaggerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
}

export function StaggerContainer({ children, className = '', staggerDelay = 0.1 }: StaggerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: 0.05,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export const staggerItem = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
};
