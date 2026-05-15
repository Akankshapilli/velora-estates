import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import FadeIn from "../animations/FadeIn";

const faqs = [
  {
    question: "What types of luxury properties does Velora Estates offer?",
    answer:
      "Velora Estates specializes in premium villas, waterfront residences, penthouses, skyline apartments, and ultra-luxury investment properties across Dubai’s most prestigious locations.",
  },
  {
    question: "Can international buyers purchase properties in Dubai?",
    answer:
      "Yes. Dubai offers freehold ownership opportunities for international investors in designated areas, making it one of the world’s most attractive luxury real estate markets.",
  },
  {
    question: "Do you provide private property consultations?",
    answer:
      "Absolutely. Our luxury real estate consultants offer personalized consultations tailored to your lifestyle preferences, investment goals, and property requirements.",
  },
  {
    question: "Are virtual property tours available?",
    answer:
      "Yes. Velora Estates provides immersive virtual tours and curated digital experiences for international clients and remote investors.",
  },
  {
    question: "Do you assist with property investment guidance?",
    answer:
      "Our experts provide detailed market insights, investment analysis, and portfolio recommendations to help clients make informed luxury property investments.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden py-28">
      {/* GLOW */}
      <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-[#C8A96B]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl px-6 md:px-10 lg:px-16">
        {/* HEADER */}
        <div className="text-center">
          <FadeIn>
            <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#C8A96B]">
              Frequently Asked Questions
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-5xl font-semibold leading-tight text-white md:text-6xl">
              Everything You Need To Know
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-white/60 md:text-base">
              Explore answers to common questions about luxury properties,
              investments, and exclusive real estate experiences with Velora
              Estates.
            </p>
          </FadeIn>
        </div>

        {/* FAQ LIST */}
        <div className="mt-20 space-y-5">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
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
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
              >
                {/* BUTTON */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                >
                  <h3 className="text-lg font-medium leading-7 text-white md:text-xl">
                    {faq.question}
                  </h3>

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                      isActive
                        ? "border-[#C8A96B]/40 bg-[#C8A96B]/10 text-[#E7D3A8]"
                        : "border-white/10 bg-white/[0.03] text-white"
                    }`}
                  >
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* CONTENT */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <div className="px-7 pb-7">
                        <div className="mb-6 h-px w-full bg-white/10" />

                        <p className="max-w-3xl text-sm leading-8 text-white/60 md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
