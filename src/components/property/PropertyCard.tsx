import { BedDouble, Bath, MoveRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface PropertyCardProps {
  image: string;
  title: string;
  slug: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  featured?: boolean;
}

const PropertyCard = ({
  image,
  title,
  slug,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  featured = false,
}: PropertyCardProps) => {
  const navigate = useNavigate();

  const handleViewProperty = () => {
    navigate(`/properties/${slug}`);
  };

  return (
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
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0A0A]"
    >
      {/* IMAGE */}
      <div className="relative h-[340px] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* FEATURED BADGE */}
        {featured && (
          <div className="absolute left-5 top-5">
            <div className="rounded-full border border-[#C8A96B]/30 bg-black/40 px-4 py-2 backdrop-blur-xl">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#E7D3A8]">
                Featured
              </p>
            </div>
          </div>
        )}

        {/* PRICE */}
        <div className="absolute bottom-5 left-5">
          <div className="rounded-full border border-white/10 bg-black/50 px-5 py-3 backdrop-blur-xl">
            <p className="text-lg font-semibold text-[#E7D3A8]">{price}</p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        {/* LOCATION */}
        <div className="flex items-center gap-2 text-sm text-white/50">
          <MapPin size={16} />
          <span>{location}</span>
        </div>

        {/* TITLE */}
        <h3 className="mt-4 text-2xl font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-[#E7D3A8]">
          {title}
        </h3>

        {/* DETAILS */}
        <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-white/10 pt-5 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <BedDouble size={17} />
            <span>{bedrooms} Beds</span>
          </div>

          <div className="flex items-center gap-2">
            <Bath size={17} />
            <span>{bathrooms} Baths</span>
          </div>

          <div>
            <span>{area}</span>
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={handleViewProperty}
          className="group/button mt-7 flex items-center gap-3 text-sm font-medium tracking-[0.12em] text-[#C8A96B] transition-all duration-300 hover:text-[#E7D3A8]"
        >
          VIEW PROPERTY
          <MoveRight
            size={18}
            className="transition-transform duration-300 group-hover/button:translate-x-1"
          />
        </button>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
