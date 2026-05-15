import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import FadeIn from "../animations/FadeIn";
import { useNavigate } from "react-router-dom";

const showcaseProperties = [
  {
    title: "Skyline Penthouse",
    location: "Downtown Dubai",
    image: "/images/properties/showcase-1.png",
    price: "$4.8M",
    link: "/properties/skyline-penthouse",
  },
  {
    title: "Palm Waterfront Villa",
    location: "Palm Jumeirah",
    image: "/images/properties/showcase-2.png",
    price: "$7.2M",
    link: "/properties/palm-waterfront-villa",
  },
  {
    title: "Marina Signature Residence",
    location: "Dubai Marina",
    image: "/images/properties/showcase-3.png",
    price: "$3.5M",
    link: "/properties/marina-signature-residence",
  },
];

const PropertyShowcase = () => {
  const navigate = useNavigate();
  const handleViewCollection = () => {
    navigate("/properties");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="relative overflow-hidden py-28">
      {/* GLOW */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#C8A96B]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* HEADER */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-4xl">
            <FadeIn>
              <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#C8A96B]">
                Signature Collection
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-5xl font-semibold leading-tight text-white md:text-6xl">
                Exceptional Residences Crafted For Elite Living
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <button
              onClick={handleViewCollection}
              className="flex h-14 items-center justify-center rounded-full border border-[#C8A96B]/30 bg-[#C8A96B]/10 px-8 text-sm font-medium tracking-[0.14em] text-[#E7D3A8] transition-all duration-300 hover:scale-[1.03] hover:bg-[#C8A96B] hover:text-black"
            >
              VIEW COLLECTION
            </button>
          </FadeIn>
        </div>

        {/* SHOWCASE GRID */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {showcaseProperties.map((property, index) => (
            <motion.div
              key={property.title}
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
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0A0A0A]"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                {/* PRICE */}
                <div className="absolute left-6 top-6">
                  <div className="rounded-full border border-[#C8A96B]/30 bg-black/40 px-5 py-2 backdrop-blur-xl">
                    <p className="text-sm font-medium text-[#E7D3A8]">
                      {property.price}
                    </p>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <p className="text-xs uppercase tracking-[0.22em] text-[#C8A96B]">
                  {property.location}
                </p>

                <h3 className="mt-4 text-3xl font-semibold text-white transition-colors duration-300 group-hover:text-[#E7D3A8]">
                  {property.title}
                </h3>

                <p className="mt-5 text-sm leading-8 text-white/60">
                  Experience architectural excellence, panoramic skyline views,
                  and refined luxury living in Dubai’s most iconic destinations.
                </p>

                {/* BUTTON */}
                <button
                  onClick={() => navigate(property.link)}
                  className="group/button mt-8 flex items-center gap-3 text-sm font-medium tracking-[0.12em] text-[#C8A96B] transition-all duration-300 hover:text-[#E7D3A8]"
                >
                  VIEW PROPERTY
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover/button:translate-x-1"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;
