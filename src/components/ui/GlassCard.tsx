import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({
  children,
  className = "",
  hover = true,
}: GlassCardProps) => {
  return (
    <div
      className={`
        relative overflow-hidden
        rounded-[2rem]
        border border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
        transition-all duration-500
        ${
          hover
            ? "hover:-translate-y-2 hover:border-[#C8A96B]/30 hover:bg-[#C8A96B]/[0.04]"
            : ""
        }
        ${className}
      `}
    >
      {/* TOP LIGHT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />

      {/* CONTENT */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassCard;
