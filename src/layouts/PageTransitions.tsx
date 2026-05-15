import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface PageTransitionsProps {
  children: ReactNode;
}

const PageTransitions = ({ children }: PageTransitionsProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -30,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitions;
