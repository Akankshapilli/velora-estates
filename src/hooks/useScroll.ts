import { useEffect, useState } from "react";

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrollY(currentScrollY);

      setIsAtTop(currentScrollY <= 10);

      if (currentScrollY > lastScrollY + 5) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY - 5) {
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    scrollY,
    scrollDirection,
    isAtTop,
  };
};

export default useScroll;
