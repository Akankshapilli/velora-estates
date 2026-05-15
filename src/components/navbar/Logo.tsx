import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link to="/" className="relative flex items-center gap-3">
        {/* ICON */}
        <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-[#C8A96B]/40 bg-gradient-to-br from-[#C8A96B]/20 to-[#E7D3A8]/5 backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_70%)]" />

          <span className="relative text-lg font-semibold tracking-[0.2em] text-[#E7D3A8]">
            VE
          </span>
        </div>

        {/* TEXT */}
        <div className="flex flex-col leading-none">
          <span className="text-lg font-semibold tracking-[0.35em] text-white">
            VELORA
          </span>

          <span className="mt-1 text-[10px] uppercase tracking-[0.35em] text-[#C8A96B]/70">
            Estates
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default Logo;
