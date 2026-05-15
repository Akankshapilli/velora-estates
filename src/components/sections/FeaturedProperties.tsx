import { useNavigate } from "react-router-dom";
import FadeIn from "../animations/FadeIn";
import PropertyCard from "../property/PropertyCard";

const properties = [
  {
    slug: "skyline-penthouse",
    image: "/images/properties/property-1.png",
    title: "Skyline Penthouse",
    location: "Downtown Dubai",
    price: "$4.8M",
    bedrooms: 4,
    bathrooms: 5,
    area: "6,500 Sq Ft",
    featured: true,
  },
  {
    slug: "palm-waterfront-villa",
    image: "/images/properties/property-2.png",
    title: "Palm Waterfront Villa",
    location: "Palm Jumeirah",
    price: "$7.2M",
    bedrooms: 6,
    bathrooms: 7,
    area: "11,200 Sq Ft",
  },
  {
    slug: "marina-signature-residence",
    image: "/images/properties/property-3.png",
    title: "Marina Signature Residence",
    location: "Dubai Marina",
    price: "$3.5M",
    bedrooms: 3,
    bathrooms: 4,
    area: "4,200 Sq Ft",
  },
];

const FeaturedProperties = () => {
  const navigate = useNavigate();
  const handleExploreProperties = () => {
    navigate("/properties");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section id="properties" className="relative overflow-hidden py-28">
      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#C8A96B]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* HEADER */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#C8A96B]">
                Featured Listings
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-5xl font-semibold leading-tight text-white md:text-6xl">
                Discover Dubai’s Most Prestigious Properties
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <p className="max-w-md text-sm leading-8 text-white/60">
              Explore an exclusive collection of luxury residences curated for
              elevated lifestyles, premium investments, and world-class living
              experiences.
            </p>
          </FadeIn>
        </div>

        {/* PROPERTIES GRID */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard
              key={property.slug}
              slug={property.slug}
              image={property.image}
              title={property.title}
              location={property.location}
              price={property.price}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              area={property.area}
              featured={property.featured}
            />
          ))}
        </div>

        {/* BUTTON */}
        <FadeIn delay={0.3}>
          <div className="mt-16 flex justify-center">
            <button
              onClick={handleExploreProperties}
              className="flex h-14 items-center justify-center rounded-full border border-[#C8A96B]/30 bg-[#C8A96B]/10 px-8 text-sm font-medium tracking-[0.14em] text-[#E7D3A8] transition-all duration-300 hover:scale-[1.03] hover:bg-[#C8A96B] hover:text-black"
            >
              VIEW ALL PROPERTIES
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FeaturedProperties;
