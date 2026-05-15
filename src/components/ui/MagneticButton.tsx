import { useRef } from "react";
import type { ReactNode } from "react";

import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const MagneticButton = ({
  children,
  className = "",
  onClick,
  type = "button",
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 150,
    damping: 15,
  });

  const springY = useSpring(y, {
    stiffness: 150,
    damping: 15,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = ref.current?.getBoundingClientRect();

    if (!rect) return;

    const offsetX = e.clientX - (rect.left + rect.width / 2);

    const offsetY = e.clientY - (rect.top + rect.height / 2);

    x.set(offsetX * 0.25);
    y.set(offsetY * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{
        scale: 0.96,
      }}
      className={`
        inline-flex items-center justify-center
        rounded-full
        bg-[#C8A96B]
        px-8 py-4
        text-sm font-medium
        uppercase tracking-[0.14em]
        text-black
        transition-colors duration-300
        hover:bg-[#E7D3A8]
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;
