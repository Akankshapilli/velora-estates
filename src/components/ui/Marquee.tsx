import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
  children: ReactNode;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

const Marquee = ({
  children,
  direction = "left",
  speed = 25,
  className = "",
}: MarqueeProps) => {
  return (
    <div className={`relative overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max items-center gap-10"
      >
        {/* FIRST SET */}
        <div className="flex items-center gap-10">{children}</div>

        {/* DUPLICATE SET */}
        <div className="flex items-center gap-10" aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
