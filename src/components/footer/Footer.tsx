import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import { Link } from "react-router-dom";

const quickLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Properties",
    href: "/properties",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-[#050505] px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          {/* LEFT */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-semibold tracking-[0.25em] text-white">
                VELORA
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
                Curating Dubai’s most extraordinary luxury residences with
                timeless elegance, modern architecture, and elevated living
                experiences.
              </p>
            </div>

            {/* SOCIALS */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-[#C8A96B] hover:bg-[#C8A96B]/10 hover:text-[#E7D3A8]"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-[#C8A96B] hover:bg-[#C8A96B]/10 hover:text-[#E7D3A8]"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-[#C8A96B] hover:bg-[#C8A96B]/10 hover:text-[#E7D3A8]"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-[#C8A96B] hover:bg-[#C8A96B]/10 hover:text-[#E7D3A8]"
              >
                <FaXTwitter size={18} />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid gap-12 md:grid-cols-2">
            {/* QUICK LINKS */}
            <div>
              <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-[#C8A96B]">
                Quick Links
              </h3>

              <div className="space-y-4">
                {quickLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-sm text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* NEWSLETTER */}
            <div>
              <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-[#C8A96B]">
                Newsletter
              </h3>

              <p className="mb-5 text-sm leading-7 text-white/60">
                Receive curated luxury property updates, architecture insights,
                and exclusive opportunities.
              </p>

              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 w-full rounded-full border border-white/10 bg-white/5 px-5 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#C8A96B]"
                />

                <button
                  type="submit"
                  className="h-12 w-full rounded-full bg-[#C8A96B] text-sm font-medium text-black transition-all duration-300 hover:bg-[#E7D3A8]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row md:items-center">
          <p>
            © 2026 Velora Estates. All rights reserved. Designed and Developed
            by Akanksha Pilli.
          </p>

          <div className="flex items-center gap-6">
            <button className="transition-colors duration-300 hover:text-[#E7D3A8]">
              Privacy Policy
            </button>

            <button className="transition-colors duration-300 hover:text-[#E7D3A8]">
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
