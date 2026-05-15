import { BedDouble, Bath, Square, MapPin, CalendarDays } from "lucide-react";

interface PropertyInfoProps {
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  yearBuilt: string;
  description: string;
}

const PropertyInfo = ({
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  yearBuilt,
  description,
}: PropertyInfoProps) => {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:px-10 lg:grid-cols-[1.3fr_0.7fr] lg:px-16">
        {/* LEFT */}
        <div>
          {/* LOCATION */}
          <div className="flex items-center gap-2 text-sm text-[#C8A96B]">
            <MapPin size={16} />
            <span>{location}</span>
          </div>

          {/* TITLE */}
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight text-white md:text-6xl">
            {title}
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-3xl text-sm leading-8 text-white/60 md:text-base">
            {description}
          </p>

          {/* STATS */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {/* BEDROOMS */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8A96B]/10 text-[#E7D3A8]">
                <BedDouble size={22} />
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-white">
                {bedrooms}
              </h3>

              <p className="mt-2 text-sm text-white/50">Bedrooms</p>
            </div>

            {/* BATHROOMS */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8A96B]/10 text-[#E7D3A8]">
                <Bath size={22} />
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-white">
                {bathrooms}
              </h3>

              <p className="mt-2 text-sm text-white/50">Bathrooms</p>
            </div>

            {/* AREA */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8A96B]/10 text-[#E7D3A8]">
                <Square size={22} />
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-white">{area}</h3>

              <p className="mt-2 text-sm text-white/50">Square Feet</p>
            </div>

            {/* YEAR BUILT */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8A96B]/10 text-[#E7D3A8]">
                <CalendarDays size={22} />
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-white">
                {yearBuilt}
              </h3>

              <p className="mt-2 text-sm text-white/50">Year Built</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="sticky top-32 rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-8 backdrop-blur-2xl">
            <p className="text-xs uppercase tracking-[0.24em] text-[#C8A96B]">
              Starting Price
            </p>

            <h2 className="mt-4 text-5xl font-semibold text-[#E7D3A8]">
              {price}
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/60">
              Experience elevated luxury living with premium architecture,
              world-class amenities, and breathtaking skyline views in Dubai’s
              most prestigious destinations.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 space-y-4">
              <button className="flex h-14 w-full items-center justify-center rounded-full bg-[#C8A96B] text-sm font-medium tracking-[0.14em] text-black transition-all duration-300 hover:scale-[1.02] hover:bg-[#E7D3A8]">
                SCHEDULE VIEWING
              </button>

              <button className="flex h-14 w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-sm font-medium tracking-[0.14em] text-white transition-all duration-300 hover:border-[#C8A96B]/40 hover:bg-[#C8A96B]/10 hover:text-[#E7D3A8]">
                DOWNLOAD BROCHURE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyInfo;
