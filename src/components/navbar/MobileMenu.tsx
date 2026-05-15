import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { X } from "lucide-react";

import { navigationLinks } from "../../constants/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md"
          />

          {/* MENU */}
          <motion.div
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed right-0 top-0 z-50 flex h-screen w-[85%] max-w-sm flex-col border-l border-white/10 bg-[#050505]/95 px-8 py-8 backdrop-blur-2xl"
          >
            {/* TOP */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-[0.3em] text-white">
                  VELORA
                </h2>

                <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-[#C8A96B]/70">
                  Luxury Estates
                </p>
              </div>

              <button
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#C8A96B]/40 hover:bg-[#C8A96B]/10 hover:text-[#E7D3A8]"
              >
                <X size={20} />
              </button>
            </div>

            {/* NAVIGATION */}
            <div className="mt-16 flex flex-col gap-6">
              {navigationLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{
                    opacity: 0,
                    x: 40,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                >
                  <NavLink
                    to={link.href}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `group flex items-center justify-between border-b border-white/5 pb-5 text-lg tracking-[0.08em] transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{link.name}</span>

                        <span
                          className={`text-[#C8A96B] transition-all duration-300 ${
                            isActive
                              ? "translate-x-1 opacity-100"
                              : "translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                          }`}
                        >
                          →
                        </span>
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* BOTTOM CTA */}
            <div className="mt-auto">
              <div className="rounded-[2rem] border border-[#C8A96B]/20 bg-gradient-to-br from-[#C8A96B]/10 to-transparent p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-[#C8A96B]">
                  Private Consultation
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Discover Luxury Living
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  Connect with our elite real estate advisors for exclusive
                  property access.
                </p>

                <button
                  onClick={handleContactClick}
                  className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-[#C8A96B] px-6 text-sm font-medium tracking-[0.12em] text-black transition-all duration-300 hover:scale-[1.03] hover:bg-[#E7D3A8]"
                >
                  CONTACT US
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
