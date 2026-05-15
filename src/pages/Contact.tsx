import MainLayout from "../layouts/MainLayout";

import ContactSection from "../components/sections/ContactSection";
import FAQSection from "../components/sections/FAQSection";
import CTASection from "../components/sections/CTASection";

const Contact = () => {
  return (
    <MainLayout>
      {/* HERO */}
      <section className="relative flex min-h-[65vh] items-center overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src="/images/contact/contact-hero.png"
            alt="Contact Velora Estates"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/5" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#050505]" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 md:px-10 lg:px-16">
          <p className="mb-6 text-xs uppercase tracking-[0.32em] text-[#C8A96B]">
            Contact Velora Estates
          </p>

          <h1 className="max-w-5xl text-6xl font-semibold leading-[0.95] tracking-tight text-white md:text-8xl">
            Let’s Create Your Luxury Living Experience
          </h1>

          <p className="mt-8 max-w-2xl text-sm leading-8 text-white/65 md:text-base">
            Connect with our luxury real estate consultants for exclusive
            property access, private consultations, and premium investment
            opportunities in Dubai.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <ContactSection />

      <FAQSection />

      <CTASection />
    </MainLayout>
  );
};

export default Contact;
