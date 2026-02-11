"use client";

import { SKILLS } from "@/constants";
import { Card } from "@/components/ui/Card";

export const Skills = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS.map((skill, idx) => (
                <Card key={idx} className="p-8">
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-6 border-b border-white/10 pb-4">
                        {skill.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {skill.items.map((item) => (
                            <span
                                key={item}
                                className="px-3 py-1.5 bg-white/5 text-xs font-semibold text-text-main border border-white/5 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
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
