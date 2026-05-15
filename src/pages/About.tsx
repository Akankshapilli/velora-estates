import MainLayout from "../layouts/MainLayout";

import AboutSection from "../components/sections/AboutSection";
import StatsSection from "../components/sections/StatsSection";
import LuxuryExperience from "../components/sections/LuxuryExperience";
import AgentsSection from "../components/sections/AgentsSection";
import Testimonials from "../components/sections/Testimonials";
import CTASection from "../components/sections/CTASection";

const About = () => {
  return (
    <MainLayout>
      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src="/images/about/about-hero.jpg"
            alt="About Velora Estates"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#050505]" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 md:px-10 lg:px-16">
          <p className="mb-6 text-xs uppercase tracking-[0.32em] text-[#C8A96B]">
            About Velora Estates
          </p>

          <h1 className="max-w-5xl text-6xl font-semibold leading-[0.95] tracking-tight text-white md:text-8xl">
            Defining The Future Of Luxury Real Estate
          </h1>

          <p className="mt-8 max-w-2xl text-sm leading-8 text-white/65 md:text-base">
            Velora Estates curates extraordinary luxury living experiences
            through iconic properties, elevated design, and world-class real
            estate expertise across Dubai’s most prestigious destinations.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <AboutSection />

      <StatsSection />

      <LuxuryExperience />

      <AgentsSection />

      <Testimonials />

      <CTASection />
    </MainLayout>
  );
};

export default About;
