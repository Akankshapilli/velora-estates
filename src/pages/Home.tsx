import MainLayout from "../layouts/MainLayout";

import HeroSection from "../components/sections/HeroSection";
import FeaturedProperties from "../components/sections/FeaturedProperties";
import LuxuryExperience from "../components/sections/LuxuryExperience";
import AboutSection from "../components/sections/AboutSection";
import SkylineBanner from "../components/sections/SkylineBanner";
import PropertyShowcase from "../components/sections/PropertyShowcase";
import StatsSection from "../components/sections/StatsSection";
import Testimonials from "../components/sections/Testimonials";
import AgentsSection from "../components/sections/AgentsSection";
import FAQSection from "../components/sections/FAQSection";
import ContactSection from "../components/sections/ContactSection";
import CTASection from "../components/sections/CTASection";

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />

      <FeaturedProperties />

      <LuxuryExperience />

      <AboutSection />

      <SkylineBanner />

      <PropertyShowcase />

      <StatsSection />

      <Testimonials />

      <AgentsSection />

      <FAQSection />

      <ContactSection />

      <CTASection />
    </MainLayout>
  );
};

export default Home;
