import { ShieldCheck, Gem, Building2, Globe2 } from "lucide-react";

import FadeIn from "../animations/FadeIn";

const experiences = [
  {
    icon: Gem,
    title: "Curated Luxury",
    description:
      "Handpicked residences crafted for elevated lifestyles, timeless elegance, and extraordinary living experiences.",
  },
  {
    icon: Building2,
    title: "Iconic Architecture",
    description:
      "Experience breathtaking modern architecture and world-renowned developments across Dubai’s skyline.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Expertise",
    description:
      "Our elite consultants deliver seamless property experiences with discretion, professionalism, and insight.",
  },
  {
    icon: Globe2,
    title: "Global Investment",
    description:
      "Connect with premium investment opportunities in one of the world’s fastest-growing luxury property markets.",
  },
];

const LuxuryExperience = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* GLOW */}
      <div className="absolute left-0 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#C8A96B]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* HEADER */}
        <div className="max-w-4xl">
          <FadeIn>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#C8A96B]">
              The Velora Experience
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-5xl font-semibold leading-tight text-white md:text-6xl">
              A Luxury Real Estate Experience Designed Around Excellence
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-2xl text-sm leading-8 text-white/60 md:text-base">
              Velora Estates delivers an elevated approach to luxury real estate
              through premium service, iconic properties, and exceptional
              investment opportunities tailored for modern global lifestyles.
            </p>
          </FadeIn>
        </div>

        {/* EXPERIENCE GRID */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn key={item.title} delay={index * 0.08}>
                <div className="group h-full rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#C8A96B]/30 hover:bg-[#C8A96B]/[0.04]">
                  {/* ICON */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#C8A96B]/20 bg-[#C8A96B]/10 text-[#E7D3A8] transition-all duration-500 group-hover:scale-105 group-hover:bg-[#C8A96B]/20">
                    <Icon size={30} strokeWidth={1.8} />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-8 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-5 text-sm leading-8 text-white/60">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LuxuryExperience;
