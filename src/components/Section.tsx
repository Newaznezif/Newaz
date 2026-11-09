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
        <motion.section
            id={id}
            className={cn("py-24 border-t border-white/5", className)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.12 }}
        >
            <div className="container-mega">
                {(title || subtitle) && (
                    <div className="mb-12">
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
                    </div>
                )}
                {children}
            </div>
        </motion.section>
    );
};
