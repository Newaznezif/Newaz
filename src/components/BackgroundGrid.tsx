export const BackgroundGrid = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0 bg-background" />
            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage: "linear-gradient(to right, #3B82F6 1px, transparent 1px), linear-gradient(to bottom, #3B82F6 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />
            <div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(circle 1000px at 50% -200px, rgba(59, 130, 246, 0.045), transparent)",
                }}
            />
        </div>
    );
};
