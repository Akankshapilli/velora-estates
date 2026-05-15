import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-6">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/images/skyline/dubai-night.jpg"
          alt="Dubai Skyline"
          className="h-full w-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A96B]/10 blur-[140px]" />

      {/* CONTENT */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 text-center"
      >
        {/* ERROR */}
        <h1 className="text-[120px] font-semibold leading-none tracking-tight text-[#E7D3A8] md:text-[180px]">
          404
        </h1>

        {/* TITLE */}
        <h2 className="mt-6 text-4xl font-semibold text-white md:text-5xl">
          Page Not Found
        </h2>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/60 md:text-base">
          The luxury property experience you’re looking for doesn’t exist or may
          have been moved to a different location.
        </p>

        {/* BUTTON */}
        <Link to="/" className="mt-12 inline-flex">
          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="group flex h-14 items-center justify-center gap-3 rounded-full bg-[#C8A96B] px-8 text-sm font-medium tracking-[0.14em] text-black transition-all duration-300 hover:bg-[#E7D3A8]"
          >
            <ArrowLeft
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            BACK TO HOME
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;
