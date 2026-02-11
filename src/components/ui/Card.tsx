import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const Card = ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
        <div className={cn(
            "glass-panel relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,242,234,0.1)]",
            className
        )}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            {children}
        </div>
    );
};
