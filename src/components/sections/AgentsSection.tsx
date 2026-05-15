import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { motion } from "framer-motion";

import FadeIn from "../animations/FadeIn";

const agents = [
  {
    name: "Daniel Carter",
    role: "Senior Real Estate Advisor",
    image: "/images/agents/agent-2.png",
  },
  {
    name: "Sophia Laurent",
    role: "Luxury Property Consultant",
    image: "/images/agents/agent-1.png",
  },
  {
    name: "Jeremiah Hayes",
    role: "Investment Property Specialist",
    image: "/images/agents/agent-3.png",
  },
];

const AgentsSection = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* BACKGROUND GLOW */}
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#C8A96B]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* HEADER */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#C8A96B]">
                Elite Consultants
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-5xl font-semibold leading-tight text-white md:text-6xl">
                Meet Our Luxury Real Estate Experts
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <p className="max-w-md text-sm leading-8 text-white/60">
              Our world-class consultants specialize in delivering exceptional
              property experiences tailored to elite lifestyles and investment
              goals.
            </p>
          </FadeIn>
        </div>

        {/* AGENTS GRID */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
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
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0A0A0A]"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="h-[550px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                {/* SOCIALS */}
                <div className="absolute right-6 top-6 flex flex-col gap-3">
                  <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-xl transition-all duration-300 hover:border-[#C8A96B]/40 hover:bg-[#C8A96B]/10 hover:text-[#E7D3A8]">
                    <FaInstagram size={18} />
                  </button>

                  <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-xl transition-all duration-300 hover:border-[#C8A96B]/40 hover:bg-[#C8A96B]/10 hover:text-[#E7D3A8]">
                    <FaLinkedinIn size={18} />
                  </button>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <p className="text-xs uppercase tracking-[0.22em] text-[#C8A96B]">
                  {agent.role}
                </p>

                <h3 className="mt-4 text-3xl font-semibold text-white transition-colors duration-300 group-hover:text-[#E7D3A8]">
                  {agent.name}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/60">
                  Dedicated to delivering exceptional luxury property
                  experiences through market expertise, global connections, and
                  personalized client relationships.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
