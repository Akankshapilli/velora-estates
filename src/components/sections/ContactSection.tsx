import { Mail, Phone, MapPin, Clock3 } from "lucide-react";

import FadeIn from "../animations/FadeIn";
import ContactForm from "../forms/ContactForm";

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    value: "+971 50 123 4567",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@veloraestates.com",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Downtown Dubai, UAE",
  },
  {
    icon: Clock3,
    title: "Working Hours",
    value: "Mon - Sat / 9AM - 8PM",
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] py-28"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#C8A96B]/10 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-16 px-6 md:px-10 lg:grid-cols-2 lg:px-16">
        {/* LEFT */}
        <div className="flex flex-col justify-center">
          <FadeIn>
            <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#C8A96B]">
              Contact Us
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="max-w-xl text-5xl font-semibold leading-tight text-white md:text-6xl">
              Let’s Find Your Perfect Luxury Residence
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-lg text-sm leading-8 text-white/60 md:text-base">
              Connect with Velora Estates for exclusive access to Dubai’s most
              prestigious luxury properties, personalized consultations, and
              world-class real estate experiences.
            </p>
          </FadeIn>

          {/* CONTACT CARDS */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeIn key={item.title} delay={0.3 + index * 0.08}>
                  <div className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:border-[#C8A96B]/30 hover:bg-[#C8A96B]/[0.04]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C8A96B]/10 text-[#E7D3A8]">
                      <Icon size={24} />
                    </div>

                    <p className="mt-6 text-xs uppercase tracking-[0.22em] text-[#C8A96B]">
                      {item.title}
                    </p>

                    <h3 className="mt-3 text-lg font-medium leading-relaxed text-white">
                      {item.value}
                    </h3>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
        <FadeIn delay={0.4}>
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactSection;
