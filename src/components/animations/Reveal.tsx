import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

const Reveal = ({
  children,
  className = "",
  delay = 0,
  duration = 0.9,
  once = true,
}: RevealProps) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{
          y: "100%",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once,
          amount: 0.2,
        }}
        transition={{
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
