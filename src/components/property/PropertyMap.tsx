import { MapPin, Navigation } from "lucide-react";
import { motion } from "framer-motion";

interface PropertyMapProps {
  location: string;
  address: string;
  image: string;
}

const PropertyMap = ({ location, address, image }: PropertyMapProps) => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* HEADER */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#C8A96B]">
              Prime Location
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Positioned In Dubai’s Most Prestigious Destinations
            </h2>
          </div>

          <div className="max-w-md">
            <div className="flex items-start gap-3 text-white/60">
              <MapPin size={18} className="mt-1 text-[#C8A96B]" />

              <p className="text-sm leading-7">{address}</p>
            </div>
          </div>
        </div>

        {/* MAP CARD */}
        <motion.div
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative overflow-hidden rounded-[2.5rem] border border-white/10"
        >
          {/* MAP IMAGE */}
          <div className="relative h-[650px] overflow-hidden">
            <img
              src={image}
              alt={location}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />

            {/* LOCATION CARD */}
            <div className="absolute bottom-8 left-8 max-w-md rounded-[2rem] border border-white/10 bg-black/50 p-6 backdrop-blur-2xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8A96B]/10 text-[#E7D3A8]">
                  <Navigation size={22} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#C8A96B]">
                    Location
                  </p>

                  <h3 className="mt-1 text-2xl font-semibold text-white">
                    {location}
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-white/60">
                Located moments away from Dubai’s iconic skyline, luxury
                shopping destinations, and world-class lifestyle experiences.
              </p>

              {/* BUTTON */}
              <button className="mt-7 flex h-12 items-center justify-center rounded-full border border-[#C8A96B]/30 bg-[#C8A96B]/10 px-6 text-sm font-medium tracking-[0.12em] text-[#E7D3A8] transition-all duration-300 hover:scale-[1.03] hover:bg-[#C8A96B] hover:text-black">
                GET DIRECTIONS
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyMap;
