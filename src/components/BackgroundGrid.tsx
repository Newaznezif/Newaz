"use client";

import { motion } from "framer-motion";

export const BackgroundGrid = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-background" />
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(to right, #3B82F6 1px, transparent 1px), linear-gradient(to bottom, #3B82F6 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                }}
            />
            {/* Very slow, subtle gradient movement */}
            <motion.div
                animate={{
                    opacity: [0.05, 0.08, 0.05],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0"
                style={{
                    background: `radial-gradient(circle 1000px at 50% -200px, rgba(59, 130, 246, 0.05), transparent)`,
                }}
            />
        </div>
    );
};
