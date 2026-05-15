import { motion } from "framer-motion";

import FadeIn from "../animations/FadeIn";

const stats = [
  {
    value: "250+",
    label: "Luxury Properties",
  },
  {
    value: "$2.8B",
    label: "Property Value Sold",
  },
  {
    value: "1.2K+",
    label: "Global Clients",
  },
  {
    value: "15+",
    label: "Prime Dubai Locations",
  },
];

const StatsSection = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/images/skyline/dubai-skyline.png"
          alt="Dubai Skyline"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/30" />
      </div>

      {/* GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A96B]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* HEADER */}
        <div className="max-w-4xl">
          <FadeIn>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#C8A96B]">
              Trusted Luxury Real Estate
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-5xl font-semibold leading-tight text-white md:text-6xl">
              Delivering Exceptional Luxury Property Experiences Across Dubai
            </h2>
          </FadeIn>
        </div>

        {/* STATS */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl"
            >
              {/* VALUE */}
              <h3 className="text-6xl font-semibold tracking-tight text-[#E7D3A8]">
                {stat.value}
              </h3>

              {/* LABEL */}
              <p className="mt-5 text-sm uppercase tracking-[0.18em] text-white/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
