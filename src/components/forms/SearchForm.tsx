import { Search } from "lucide-react";
import { motion } from "framer-motion";

const SearchForm = () => {
  return (
    <motion.form
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative z-20 mx-auto w-full max-w-6xl rounded-[2rem] border border-white/10 bg-black/40 p-4 shadow-[0_0_60px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
    >
      <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr_1fr_1fr_auto]">
        {/* LOCATION */}
        <div>
          <label className="mb-2 block px-2 text-xs uppercase tracking-[0.18em] text-white/40">
            Location
          </label>

          <select className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-sm text-white outline-none transition-all duration-300 focus:border-[#C8A96B]/60">
            <option>Downtown Dubai</option>
            <option>Palm Jumeirah</option>
            <option>Dubai Marina</option>
            <option>Business Bay</option>
            <option>Jumeirah Bay</option>
          </select>
        </div>

        {/* PROPERTY TYPE */}
        <div>
          <label className="mb-2 block px-2 text-xs uppercase tracking-[0.18em] text-white/40">
            Property Type
          </label>

          <select className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-sm text-white outline-none transition-all duration-300 focus:border-[#C8A96B]/60">
            <option>Luxury Villa</option>
            <option>Penthouse</option>
            <option>Apartment</option>
            <option>Waterfront Home</option>
          </select>
        </div>

        {/* PRICE RANGE */}
        <div>
          <label className="mb-2 block px-2 text-xs uppercase tracking-[0.18em] text-white/40">
            Budget
          </label>

          <select className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-sm text-white outline-none transition-all duration-300 focus:border-[#C8A96B]/60">
            <option>$500K - $1M</option>
            <option>$1M - $3M</option>
            <option>$3M - $5M</option>
            <option>$5M+</option>
          </select>
        </div>

        {/* BEDROOMS */}
        <div>
          <label className="mb-2 block px-2 text-xs uppercase tracking-[0.18em] text-white/40">
            Bedrooms
          </label>

          <select className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-sm text-white outline-none transition-all duration-300 focus:border-[#C8A96B]/60">
            <option>1 Bedroom</option>
            <option>2 Bedrooms</option>
            <option>3 Bedrooms</option>
            <option>4+ Bedrooms</option>
          </select>
        </div>

        {/* SEARCH BUTTON */}
        <div className="flex items-end">
          <button
            type="submit"
            className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#C8A96B] px-6 text-sm font-medium tracking-[0.12em] text-black transition-all duration-300 hover:scale-[1.02] hover:bg-[#E7D3A8] lg:w-auto"
          >
            <Search size={18} />
            SEARCH
          </button>
        </div>
      </div>
    </motion.form>
  );
};

export default SearchForm;
