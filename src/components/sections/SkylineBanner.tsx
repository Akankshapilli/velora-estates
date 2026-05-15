import { motion } from "framer-motion";

import FadeIn from "../animations/FadeIn";
import { useNavigate } from "react-router-dom";

const SkylineBanner = () => {
  const navigate = useNavigate();
  const handleSkylineProperty = () => {
    navigate("/properties/skyline-penthouse");

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
          src="/images/skyline/dubai-skyline.png"
          alt="Dubai Skyline"
          className="h-full w-full object-cover"
        />

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/30" />
      </div>

      {/* GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A96B]/10 blur-[150px]" />

      {/* CONTENT */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl">
          <FadeIn>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#C8A96B]">
              Dubai Luxury Living
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-5xl font-semibold leading-tight text-white md:text-7xl">
              Experience The World’s Most Iconic Skyline
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-2xl text-sm leading-8 text-white/60 md:text-base">
              From breathtaking waterfront residences to ultra-luxury penthouses
              overlooking Dubai’s skyline, Velora Estates redefines modern
              luxury living through extraordinary spaces and timeless
              sophistication.
            </p>
          </FadeIn>

          {/* STATS */}
          <FadeIn delay={0.3}>
            <div className="mt-16 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-3">
              <div>
                <h3 className="text-5xl font-semibold text-[#E7D3A8]">15+</h3>

                <p className="mt-3 text-sm uppercase tracking-[0.14em] text-white/50">
                  Prime Communities
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-semibold text-[#E7D3A8]">250+</h3>

                <p className="mt-3 text-sm uppercase tracking-[0.14em] text-white/50">
                  Elite Residences
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-semibold text-[#E7D3A8]">$2.8B</h3>

                <p className="mt-3 text-sm uppercase tracking-[0.14em] text-white/50">
                  Luxury Investments
                </p>
              </div>
            </div>
          </FadeIn>

          {/* BUTTON */}
          <FadeIn delay={0.4}>
            <motion.button
              onClick={handleSkylineProperty}
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="mt-14 flex h-14 items-center justify-center rounded-full bg-[#C8A96B] px-8 text-sm font-medium tracking-[0.14em] text-black transition-all duration-300 hover:bg-[#E7D3A8]"
            >
              DISCOVER DUBAI
            </motion.button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default SkylineBanner;
