import { BedDouble, Bath, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface FeaturedPropertyProps {
  slug: string;
  image: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
}

const FeaturedProperty = ({
  slug,
  image,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
}: FeaturedPropertyProps) => {
  const navigate = useNavigate();

  const handleViewProperty = () => {
    navigate(`/properties/${slug}`);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0A0A0A]"
    >
      {/* IMAGE */}
      <div className="relative h-[650px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* TOP BADGE */}
        <div className="absolute left-6 top-6">
          <div className="rounded-full border border-[#C8A96B]/30 bg-black/40 px-5 py-2 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#E7D3A8]">
              Featured Property
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
          <div className="max-w-3xl">
            {/* LOCATION */}
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#C8A96B]">
              {location}
            </p>

            {/* TITLE */}
            <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              {title}
            </h2>

            {/* INFO */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <BedDouble size={18} />
                <span>{bedrooms} Bedrooms</span>
              </div>

              <div className="flex items-center gap-2">
                <Bath size={18} />
                <span>{bathrooms} Bathrooms</span>
              </div>

              <div>
                <span>{area}</span>
              </div>
            </div>

            {/* BOTTOM */}
            <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              {/* PRICE */}
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                  Starting From
                </p>
                <h3 className="mt-2 text-3xl font-semibold text-[#E7D3A8] md:text-4xl">
                  {price}
                </h3>
              </div>

              {/* LINK BUTTON */}
              <button
                onClick={handleViewProperty}
                className="group/button flex h-14 items-center justify-center gap-3 rounded-full bg-[#C8A96B] px-8 text-sm font-medium tracking-[0.14em] text-black transition-all duration-300 hover:scale-[1.03] hover:bg-[#E7D3A8]"
              >
                VIEW PROPERTY
                <MoveRight
                  size={18}
                  className="transition-transform duration-300 group-hover/button:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProperty;
