import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface PropertyAmenitiesProps {
  amenities: string[];
}

const PropertyAmenities = ({ amenities }: PropertyAmenitiesProps) => {
  return (
    <section className="bg-[#050505] px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C8A96B]">
            Luxury Amenities
          </p>

          <h2 className="mt-5 text-5xl font-semibold leading-tight text-white md:text-6xl">
            Exceptional Lifestyle Experiences
          </h2>

          <p className="mt-6 text-sm leading-8 text-white/60 md:text-base">
            Designed to elevate modern luxury living with curated amenities,
            premium wellness experiences, and world-class comforts.
          </p>
        </div>

        {/* AMENITIES GRID */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity}
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
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-[#0A0A0A] p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C8A96B]/10 text-[#E7D3A8]">
                <Check size={18} />
              </div>

              <p className="text-sm tracking-[0.08em] text-white/80">
                {amenity}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyAmenities;
