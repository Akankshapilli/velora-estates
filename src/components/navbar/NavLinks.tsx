import { motion } from "framer-motion";

import { navigationLinks } from "../../constants/navigation";
import scrollToSection from "../../utils/scrollToSection";

const NavLinks = () => {
  const handleNavigation = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <nav className="flex items-center gap-10">
      {navigationLinks.map((link, index) => (
        <motion.button
          key={link.name}
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
          }}
          onClick={() => handleNavigation(link.href)}
          className="group relative text-sm font-medium tracking-[0.14em] text-white/70 transition-colors duration-300 hover:text-white"
        >
          {link.name}

          {/* UNDERLINE */}
          <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#C8A96B] transition-all duration-300 group-hover:w-full" />

          {/* GLOW */}
          <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#E7D3A8]/60 blur-sm transition-all duration-300 group-hover:w-full" />
        </motion.button>
      ))}
    </nav>
  );
};

export default NavLinks;
