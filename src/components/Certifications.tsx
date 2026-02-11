"use client";

import { CERTIFICATIONS } from "@/constants";
import { Card } from "@/components/ui/Card";
import { Award } from "lucide-react";

export const Certifications = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
                <Card key={idx} className="p-6 group hover:border-primary/30">
                    <div className="flex items-start justify-between mb-4">
                        <div className="p-2 bg-primary/10 rounded text-primary">
                            <Award size={20} />
                        </div>
                        <span className="text-xs font-mono text-text-secondary border border-white/10 px-2 py-1 rounded">
                            {cert.year}
                        </span>
                    </div>

                    <h4 className="font-bold text-white text-lg mb-2 group-hover:text-primary transition-colors leading-tight">
                        {cert.name}
                    </h4>

                    <p className="text-sm text-text-secondary uppercase tracking-wider font-semibold">
                        {cert.issuer}
                    </p>
                </Card>
            ))}
        </div>
    );
};
