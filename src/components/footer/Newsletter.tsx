import { ArrowRight } from "lucide-react";

const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#C8A96B]">
        Newsletter
      </h3>

      <p className="mb-6 max-w-sm text-sm leading-7 text-white/60">
        Receive exclusive luxury property updates, investment opportunities, and
        curated Dubai real estate insights.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email Address"
            className="h-14 w-full rounded-full border border-white/10 bg-white/5 px-6 pr-16 text-sm text-white outline-none backdrop-blur-md transition-all duration-300 placeholder:text-white/30 focus:border-[#C8A96B]/60"
          />

          <button
            type="submit"
            aria-label="Subscribe to Newsletter"
            className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#C8A96B] text-black transition-all duration-300 hover:scale-105 hover:bg-[#E7D3A8]"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
