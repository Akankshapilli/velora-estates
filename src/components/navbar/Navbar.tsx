import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <>
      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "border-b border-white/10 bg-black/60 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-16">
          {/* LOGO */}
          <Logo />

          {/* DESKTOP NAV */}
          <div className="hidden lg:block">
            <NavLinks />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            {/* CONTACT BUTTON */}
            <button
              onClick={handleContactClick}
              className="hidden h-12 items-center justify-center rounded-full border border-[#C8A96B]/30 bg-[#C8A96B]/10 px-6 text-sm font-medium tracking-[0.14em] text-[#E7D3A8] transition-all duration-300 hover:scale-[1.03] hover:border-[#C8A96B]/60 hover:bg-[#C8A96B] hover:text-black lg:flex"
            >
              CONTACT
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#C8A96B]/40 hover:bg-[#C8A96B]/10 hover:text-[#E7D3A8] lg:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
