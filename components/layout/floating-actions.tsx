'use client';

import { motion } from 'motion/react';
import { MessageCircle, Send } from 'lucide-react';

export function FloatingActions() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="fixed bottom-28 right-4 z-[110] hidden flex-col gap-3 lg:flex"
        >
            <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                aria-label="Написать в Telegram"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/80 bg-white/78 text-[#c58e7b] shadow-[0_18px_45px_rgba(177,132,115,0.18)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:bg-[#c58e7b] hover:text-white"
            >
                <Send size={21} />
            </a>

            <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                aria-label="Написать в WhatsApp"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/80 bg-white/78 text-[#c58e7b] shadow-[0_18px_45px_rgba(177,132,115,0.18)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:bg-[#c58e7b] hover:text-white"
            >
                <MessageCircle size={21} />
            </a>
        </motion.div>
    );
}