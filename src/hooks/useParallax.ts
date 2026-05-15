import { useRef } from "react";
import { MotionValue, useScroll, useTransform } from "framer-motion";

interface UseParallaxOptions {
  offset?: [string, string];
  distance?: number;
}

interface UseParallaxReturn {
  ref: React.RefObject<HTMLDivElement | null>;
  y: MotionValue<number>;
}

const useParallax = ({
  offset = ["start end", "end start"],
  distance = 120,
}: UseParallaxOptions = {}): UseParallaxReturn => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

  return {
    ref,
    y,
  };
};

export default useParallax;
