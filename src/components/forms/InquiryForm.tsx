import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const InquiryForm = () => {
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
      className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8"
    >
      {/* HEADER */}
      <div className="mb-8">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#C8A96B]">
          Private Consultation
        </p>

        <h3 className="text-3xl font-semibold text-white">
          Request Property Details
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/60">
          Connect with our luxury property specialists for exclusive listings,
          pricing, and private viewings tailored to your lifestyle.
        </p>
      </div>

      {/* FORM */}
      <form className="space-y-5">
        {/* NAME */}
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[#C8A96B]/60"
          />
        </div>

        {/* EMAIL */}
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[#C8A96B]/60"
          />
        </div>

        {/* PHONE */}
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[#C8A96B]/60"
          />
        </div>

        {/* BUDGET */}
        <div>
          <select className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-sm text-white outline-none transition-all duration-300 focus:border-[#C8A96B]/60">
            <option value="">Select Budget Range</option>
            <option>$500K - $1M</option>
            <option>$1M - $3M</option>
            <option>$3M - $5M</option>
            <option>$5M+</option>
          </select>
        </div>

        {/* MESSAGE */}
        <div>
          <textarea
            rows={5}
            placeholder="Tell us what kind of property you're looking for..."
            className="w-full rounded-[1.5rem] border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[#C8A96B]/60"
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="group flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#C8A96B] text-sm font-medium tracking-[0.15em] text-black transition-all duration-300 hover:scale-[1.02] hover:bg-[#E7D3A8]"
        >
          REQUEST CONSULTATION
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </form>
    </motion.div>
  );
};

export default InquiryForm;
