"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
    children: ReactNode;
    id: string;
    title?: string;
    subtitle?: string;
    className?: string;
}

export const Section = ({ children, id, title, subtitle, className }: SectionProps) => {
    return (
        <section id={id} className={cn("py-24 border-t border-white/5", className)}>
            <div className="container-mega">
                {(title || subtitle) && (
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        {title && (
                            <h2 className="text-[var(--color-text-main)] relative inline-block">
                                {title}
                                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary" />
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-text-secondary text-lg max-w-3xl mt-4">
                                {subtitle}
                            </p>
                        )}
                    </motion.div>
                )}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};
