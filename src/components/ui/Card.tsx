import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const Card = ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
        <div className={cn(
            "glass-panel relative overflow-hidden group border border-white/10 transition-colors duration-200 hover:border-primary/35",
            className
        )}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
            <div className="relative z-10">{children}</div>
        </div>
    );
};
