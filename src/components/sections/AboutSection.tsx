import { motion } from "framer-motion";

import FadeIn from "../animations/FadeIn";

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden py-28">
      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C8A96B]/10 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl gap-20 px-6 md:px-10 lg:grid-cols-2 lg:px-16">
        {/* LEFT IMAGE */}
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10">
            <img
              src="/images/interiors/luxury-interior-1.png"
              alt="Luxury Interior"
              className="h-[700px] w-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* FLOATING CARD */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-8 left-8 rounded-[2rem] border border-white/10 bg-black/50 p-6 backdrop-blur-2xl"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-[#C8A96B]">
                Since 2014
              </p>

              <h3 className="mt-3 text-3xl font-semibold text-white">
                Redefining Luxury Living
              </h3>
            </motion.div>
          </div>
        </FadeIn>

        {/* RIGHT CONTENT */}
        <div className="flex items-center">
          <div>
            {/* LABEL */}
            <FadeIn delay={0.1}>
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#C8A96B]">
                About Velora
              </p>
            </FadeIn>

            {/* TITLE */}
            <FadeIn delay={0.2}>
              <h2 className="max-w-2xl text-5xl font-semibold leading-tight text-white md:text-6xl">
                Curating Extraordinary Luxury Real Estate Experiences
              </h2>
            </FadeIn>

            {/* DESCRIPTION */}
            <FadeIn delay={0.3}>
              <p className="mt-8 max-w-xl text-sm leading-8 text-white/60 md:text-base">
                Velora Estates represents a new standard of luxury real estate
                in Dubai — blending timeless architecture, elevated living, and
                premium experiences for discerning homeowners and investors
                worldwide.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="mt-6 max-w-xl text-sm leading-8 text-white/60 md:text-base">
                From iconic waterfront residences to breathtaking skyline
                penthouses, every property is thoughtfully selected to embody
                sophistication, exclusivity, and world-class design.
              </p>
            </FadeIn>

            {/* STATS */}
            <FadeIn delay={0.5}>
              <div className="mt-14 grid gap-8 sm:grid-cols-3">
                <div>
                  <h3 className="text-5xl font-semibold text-[#E7D3A8]">
                    250+
                  </h3>

                  <p className="mt-3 text-sm uppercase tracking-[0.14em] text-white/50">
                    Luxury Listings
                  </p>
                </div>

                <div>
                  <h3 className="text-5xl font-semibold text-[#E7D3A8]">
                    1.2K+
                  </h3>

                  <p className="mt-3 text-sm uppercase tracking-[0.14em] text-white/50">
                    Global Clients
                  </p>
                </div>

                <div>
                  <h3 className="text-5xl font-semibold text-[#E7D3A8]">15+</h3>

                  <p className="mt-3 text-sm uppercase tracking-[0.14em] text-white/50">
                    Prime Locations
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
