"use client";

import { SKILLS } from "@/constants";
import { Card } from "@/components/ui/Card";

export const Skills = () => {
    return (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {SKILLS.map((skill, idx) => (
                <Card key={idx} className="cyber-3d-card p-5 sm:p-6">
                    <h3 className="text-primary font-bold uppercase tracking-widest text-xs mb-4 border-b border-white/10 pb-3">
                        {skill.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {skill.items.map((item) => (
                            <span
                                key={item}
                                className="px-2.5 py-1.5 bg-white/5 text-[11px] font-semibold text-text-main border border-white/5 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </Card>
            ))}
        </div>
    );
};