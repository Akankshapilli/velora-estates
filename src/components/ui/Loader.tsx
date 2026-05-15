import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]">
      {/* GLOW */}
      <div className="absolute h-[300px] w-[300px] rounded-full bg-[#C8A96B]/10 blur-[120px]" />

      <div className="relative flex flex-col items-center">
        {/* SPINNER */}
        <div className="relative flex h-24 w-24 items-center justify-center">
          {/* OUTER RING */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-24 w-24 rounded-full border border-[#C8A96B]/20 border-t-[#E7D3A8]"
          />

          {/* INNER RING */}
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-16 w-16 rounded-full border border-white/10 border-b-[#C8A96B]"
          />

          {/* CENTER */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C8A96B]/10 text-[#E7D3A8]">
            <span className="text-sm font-semibold tracking-[0.2em]">V</span>
          </div>
        </div>

        {/* TEXT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-8 text-center"
        >
          <h2 className="text-lg font-semibold tracking-[0.35em] text-white">
            VELORA
          </h2>

          <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[#C8A96B]/70">
            Luxury Estates
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
