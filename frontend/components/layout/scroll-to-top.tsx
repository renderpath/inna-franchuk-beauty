'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 600);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    type="button"
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0.8, y: 18 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 18 }}
                    transition={{ duration: 0.28 }}
                    className="fixed bottom-24 right-4 z-[120] flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-[#2d211d] text-white shadow-[0_18px_55px_rgba(45,33,29,0.18)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:bg-[#cf8f78] md:bottom-8 md:right-8 md:h-15 md:w-15"
                    aria-label="Вернуться наверх"
                >
                    <ArrowUp size={20} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}