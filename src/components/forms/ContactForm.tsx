import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <motion.form
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
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-2xl md:p-10"
    >
      {/* TOP */}
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.28em] text-[#C8A96B]">
          Private Consultation
        </p>

        <h3 className="mt-4 text-3xl font-semibold text-white">
          Request Luxury Property Access
        </h3>

        <p className="mt-4 max-w-lg text-sm leading-7 text-white/50">
          Share your preferences and our advisors will curate exclusive luxury
          residences tailored to your lifestyle.
        </p>
      </div>

      {/* FORM GRID */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* NAME */}
        <div>
          <label className="mb-3 block text-xs uppercase tracking-[0.18em] text-white/45">
            Full Name
          </label>

          <input
            type="text"
            placeholder="John Carter"
            className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 focus:border-[#C8A96B]/60"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="mb-3 block text-xs uppercase tracking-[0.18em] text-white/45">
            Email Address
          </label>

          <input
            type="email"
            placeholder="john@example.com"
            className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 focus:border-[#C8A96B]/60"
          />
        </div>

        {/* PHONE */}
        <div>
          <label className="mb-3 block text-xs uppercase tracking-[0.18em] text-white/45">
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="+971 50 123 4567"
            className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 focus:border-[#C8A96B]/60"
          />
        </div>

        {/* PROPERTY TYPE */}
        <div>
          <label className="mb-3 block text-xs uppercase tracking-[0.18em] text-white/45">
            Property Type
          </label>

          <div className="relative">
            <select
              defaultValue=""
              className="h-14 w-full appearance-none rounded-2xl border border-white/10 bg-black/30 px-5 pr-14 text-sm text-white outline-none transition-all duration-300 focus:border-[#C8A96B]/60"
            >
              <option value="" disabled className="bg-[#111111] text-white/40">
                Select property type
              </option>

              <option className="bg-[#111111] text-white">Luxury Villa</option>

              <option className="bg-[#111111] text-white">Penthouse</option>

              <option className="bg-[#111111] text-white">
                Waterfront Apartment
              </option>

              <option className="bg-[#111111] text-white">
                Skyline Residence
              </option>
            </select>

            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/40"
            />
          </div>
        </div>
      </div>

      {/* MESSAGE */}
      <div className="mt-6">
        <label className="mb-3 block text-xs uppercase tracking-[0.18em] text-white/45">
          Message
        </label>

        <textarea
          rows={6}
          placeholder="Tell us about your dream property..."
          className="w-full resize-none rounded-[1.7rem] border border-white/10 bg-black/30 px-5 py-4 text-sm leading-7 text-white outline-none transition-all duration-300 placeholder:text-white/25 focus:border-[#C8A96B]/60"
        />
      </div>

      {/* BUTTON */}
      <div className="mt-8">
        <button
          type="submit"
          className="group flex h-14 items-center gap-3 rounded-full bg-[#C8A96B] px-8 text-sm font-medium tracking-[0.14em] text-black transition-all duration-300 hover:scale-[1.02] hover:bg-[#E7D3A8]"
        >
          SEND INQUIRY
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
