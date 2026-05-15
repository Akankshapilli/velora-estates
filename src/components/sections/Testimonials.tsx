import { Star } from "lucide-react";
import { motion } from "framer-motion";

import FadeIn from "../animations/FadeIn";

const testimonials = [
  {
    name: "Alexander Reed",
    role: "Property Investor",
    image: "/images/agents/client-3.png",
    review:
      "Velora Estates delivered an exceptional luxury property experience from start to finish. Their professionalism, market expertise, and attention to detail were truly world-class.",
  },
  {
    name: "Sophia Bennett",
    role: "Entrepreneur",
    image: "/images/agents/client-1.png",
    review:
      "From private consultations to exclusive property access, every interaction felt premium, seamless, and thoughtfully curated around our lifestyle needs.",
  },
  {
    name: "Daniel Foster",
    role: "Global Investor",
    image: "/images/agents/client-4.png",
    review:
      "Velora helped us secure one of the most breathtaking waterfront residences in Dubai. Their team understands luxury real estate at an elite level.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* GLOW */}
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#C8A96B]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* HEADER */}
        <div className="max-w-4xl">
          <FadeIn>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#C8A96B]">
              Client Experiences
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-5xl font-semibold leading-tight text-white md:text-6xl">
              Trusted By Luxury Homeowners & Investors Worldwide
            </h2>
          </FadeIn>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{
                opacity: 0,
                y: 50,
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
              className="group rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#C8A96B]/30 hover:bg-[#C8A96B]/[0.04]"
            >
              {/* STARS */}
              <div className="flex items-center gap-2 text-[#E7D3A8]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              {/* REVIEW */}
              <p className="mt-8 text-sm leading-8 text-white/65 md:text-base">
                “{testimonial.review}”
              </p>

              {/* CLIENT */}
              <div className="mt-10 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-sm text-[#C8A96B]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
