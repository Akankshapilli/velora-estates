import { useNavigate, useLocation } from "react-router-dom";

import scrollToSection from "../../utils/scrollToSection";

const companyLinks = [
  {
    name: "Home",
    section: "home",
  },
  {
    name: "About",
    section: "about",
  },
  {
    name: "Properties",
    section: "properties",
  },
  {
    name: "Contact",
    section: "contact",
  },
];

const propertyLinks = [
  {
    name: "Luxury Villas",
    section: "properties",
  },
  {
    name: "Penthouses",
    section: "properties",
  },
  {
    name: "Waterfront Homes",
    section: "properties",
  },
  {
    name: "Modern Apartments",
    section: "properties",
  },
  {
    name: "Skyline Residences",
    section: "properties",
  },
];

const FooterLinks = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-10">
      {/* COMPANY */}
      <div>
        <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#C8A96B]">
          Company
        </h3>

        <ul className="space-y-4">
          {companyLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleNavigation(link.section)}
                className="inline-block text-left text-sm text-white/60 transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* PROPERTIES */}
      <div>
        <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#C8A96B]">
          Properties
        </h3>

        <ul className="space-y-4">
          {propertyLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleNavigation(link.section)}
                className="inline-block text-left text-sm text-white/60 transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
