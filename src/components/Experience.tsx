"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/constants";
import { Card } from "@/components/ui/Card";
import { MapPin } from "lucide-react";

export const Experience = () => {
    return (
        <div className="space-y-8">
            {EXPERIENCE.map((exp, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                >
                    <Card className="p-8 cursor-default hover:-translate-y-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1 shadow-primary">
                                    {exp.role}
                                </h3>
                                <div className="flex flex-wrap items-center gap-4 text-sm">
                                    <span className="text-primary font-bold uppercase tracking-wider">
                                        {exp.company}
                                    </span>
                                    <span className="flex items-center gap-1 text-text-secondary">
                                        <MapPin size={14} /> {exp.location}
                                    </span>
                                </div>
                            </div>
                            <div className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-primary/80 whitespace-nowrap">
                                {exp.period}
                            </div>
                        </div>

                        <ul className="space-y-3">
                            {exp.description.map((item, i) => (
                                <li key={i} className="flex gap-3 text-text-secondary text-[15px] leading-relaxed group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 group-hover:bg-primary transition-colors" />
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
