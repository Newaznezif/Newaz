"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/constants";
import { Card } from "@/components/ui/Card";
import { MapPin } from "lucide-react";

export const Experience = () => {
    return (
        <div className="grid md:grid-cols-2 gap-4">
            {EXPERIENCE.map((exp, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 18, rotateX: -4 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.45, delay: idx * 0.06 }}
                    viewport={{ once: true }}
                    className="h-full"
                >
                    <Card className="cyber-3d-card h-full p-5 sm:p-6 cursor-default">
                        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-3 mb-4">
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1 shadow-primary">
                                    {exp.role}
                                </h3>
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                                    <span className="text-primary font-bold uppercase tracking-wider">
                                        {exp.company}
                                    </span>
                                    <span className="flex items-center gap-1 text-text-secondary">
                                        <MapPin size={12} /> {exp.location}
                                    </span>
                                </div>
                            </div>
                            <div className="self-start px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-primary/80 whitespace-nowrap">
                                {exp.period}
                            </div>
                        </div>

                        <ul className="space-y-2">
                            {exp.description.map((item, i) => (
                                <li key={i} className="flex gap-2.5 text-text-secondary text-sm leading-relaxed group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 shrink-0 group-hover:bg-primary transition-colors" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
};