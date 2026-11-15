import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const Card = ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
        <div
            className={cn(
                "glass-panel relative overflow-hidden group border border-white/10 transition-colors duration-200 hover:border-primary/35",
                className
            )}
            onPointerMove={(event) => {
                const card = event.currentTarget;
                if (event.pointerType !== "mouse" || !card.classList.contains("cyber-3d-card")) return;

                const bounds = card.getBoundingClientRect();
                if (!bounds.width || !bounds.height) return;

                const pointerX = (event.clientX - bounds.left) / bounds.width;
                const pointerY = (event.clientY - bounds.top) / bounds.height;
                const rotateX = (0.5 - pointerY) * 8;
                const rotateY = (pointerX - 0.5) * 8;

                card.style.setProperty("--card-rotate-x", `${rotateX.toFixed(2)}deg`);
                card.style.setProperty("--card-rotate-y", `${rotateY.toFixed(2)}deg`);
            }}
            onPointerLeave={(event) => {
                event.currentTarget.style.setProperty("--card-rotate-x", "0deg");
                event.currentTarget.style.setProperty("--card-rotate-y", "0deg");
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
            <div className="relative z-10">{children}</div>
        </div>
    );
};
