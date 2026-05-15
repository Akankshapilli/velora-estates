import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  once?: boolean;
}

const FadeIn = ({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  y = 40,
  x = 0,
  once = true,
}: FadeInProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
        x,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{
        once,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
