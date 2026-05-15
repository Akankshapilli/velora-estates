import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import FadeIn from "../animations/FadeIn";

const HeroSection = () => {
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
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,107,0.12),transparent_45%)]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-36 md:px-10 lg:px-16">
        <div className="max-w-5xl">
          {/* LABEL */}
          <FadeIn>
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#C8A96B]">
              Dubai Luxury Real Estate
            </p>
          </FadeIn>

          {/* TITLE */}
          <FadeIn delay={0.1}>
            <h1 className="max-w-5xl text-6xl font-semibold leading-[0.95] tracking-tight text-white md:text-8xl">
              Elevating Luxury Living Beyond Expectations
            </h1>
          </FadeIn>

          {/* DESCRIPTION */}
          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-2xl text-sm leading-8 text-white/65 md:text-base">
              Discover extraordinary residences, iconic skyline penthouses, and
              elite waterfront villas curated for sophisticated lifestyles in
              Dubai’s most prestigious destinations.
            </p>
          </FadeIn>

          {/* BUTTONS */}
          <FadeIn delay={0.3}>
            <div className="mt-12 flex flex-col gap-5 sm:flex-row">
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

          {/* STATS */}
          <FadeIn delay={0.4}>
            <div className="mt-20 grid max-w-3xl gap-10 border-t border-white/10 pt-10 sm:grid-cols-3">
              <div>
                <h2 className="text-5xl font-semibold text-[#E7D3A8]">250+</h2>

                <p className="mt-3 text-sm uppercase tracking-[0.15em] text-white/50">
                  Luxury Listings
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-semibold text-[#E7D3A8]">$2.8B</h2>

                <p className="mt-3 text-sm uppercase tracking-[0.15em] text-white/50">
                  Property Value
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-semibold text-[#E7D3A8]">15+</h2>

                <p className="mt-3 text-sm uppercase tracking-[0.15em] text-white/50">
                  Prime Locations
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
