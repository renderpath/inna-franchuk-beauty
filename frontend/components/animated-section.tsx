'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type AnimatedSectionProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
};

export function AnimatedSection({
                                    children,
                                    className = '',
                                    delay = 0,
                                }: AnimatedSectionProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}