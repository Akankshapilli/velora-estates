import type { ReactNode } from "react";
import { motion, type Variants, type Easing } from "framer-motion";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
  once?: boolean;
}

const containerVariants = (staggerDelay: number, initialDelay: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: initialDelay,
    },
  },
});

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as Easing,
    },
  },
};

const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.12,
  initialDelay = 0,
  once = true,
}: StaggerContainerProps) => {
  return (
    <motion.div
      className={className}
      variants={containerVariants(staggerDelay, initialDelay)}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: 0.15,
      }}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={itemVariants}>{children}</motion.div>
      )}
    </motion.div>
  );
};

export default StaggerContainer;
