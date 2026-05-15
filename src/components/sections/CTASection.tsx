import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import FadeIn from "../animations/FadeIn";

const CTASection = () => {
  const navigate = useNavigate();

  const handleExploreProperties = () => {
    navigate("/properties");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleConsultation = () => {
    navigate("/contact");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden py-28">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/images/skyline/dubai-night.png"
          alt="Dubai Skyline"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/30" />
      </div>

      {/* GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A96B]/10 blur-[140px]" />

      <div className="relative mx-auto flex max-w-7xl justify-center px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl text-center">
          <FadeIn>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#C8A96B]">
              Begin Your Luxury Journey
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-5xl font-semibold leading-tight text-white md:text-7xl">
              Discover Dubai’s Most Exclusive Luxury Properties
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-white/60 md:text-base">
              Experience elevated living through curated residences, iconic
              architecture, and world-class investment opportunities with Velora
              Estates.
            </p>
          </FadeIn>

          {/* BUTTONS */}
          <FadeIn delay={0.3}>
            <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
              {/* PRIMARY */}
              <motion.button
                onClick={handleExploreProperties}
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group flex h-14 items-center justify-center gap-3 rounded-full bg-[#C8A96B] px-8 text-sm font-medium tracking-[0.14em] text-black transition-all duration-300 hover:bg-[#E7D3A8]"
              >
                EXPLORE PROPERTIES
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>

              {/* SECONDARY */}
              <motion.button
                onClick={handleConsultation}
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-8 text-sm font-medium tracking-[0.14em] text-white backdrop-blur-xl transition-all duration-300 hover:border-[#C8A96B]/40 hover:bg-[#C8A96B]/10 hover:text-[#E7D3A8]"
              >
                BOOK PRIVATE CONSULTATION
              </motion.button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
