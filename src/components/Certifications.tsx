"use client";

import { CERTIFICATIONS } from "@/constants";
import { Card } from "@/components/ui/Card";
import { Award } from "lucide-react";

export const Certifications = () => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {CERTIFICATIONS.map((cert, idx) => (
                <Card key={idx} className="cyber-3d-card p-4 sm:p-5">
                    <div className="flex items-start justify-between mb-3">
                        <div className="p-2 bg-primary/10 rounded text-primary">
                            <Award size={18} />
                        </div>
                        <span className="text-[10px] font-mono text-text-secondary border border-white/10 px-2 py-1 rounded">
                            {cert.year}
                        </span>
                    </div>

                    <h4 className="font-bold text-white text-base mb-2 group-hover:text-primary transition-colors leading-tight">
                        {cert.name}
                    </h4>

                    <p className="text-[11px] text-text-secondary uppercase tracking-wider font-semibold">
                        {cert.issuer}
                    </p>
                </Card>
            ))}
        </div>
    );
};