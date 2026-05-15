import MainLayout from "../layouts/MainLayout";

import FeaturedProperty from "../components/property/FeaturedProperty";
import PropertyCard from "../components/property/PropertyCard";
import CTASection from "../components/sections/CTASection";

import { properties } from "../data/properties";

const Properties = () => {
  const featuredProperty = properties.find((property) => property.featured);

  return (
    <MainLayout>
      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src="/images/properties/properties-hero.png"
            alt="Luxury Properties"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/5" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#050505]" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 md:px-10 lg:px-16">
          <p className="mb-6 text-xs uppercase tracking-[0.32em] text-[#C8A96B]">
            Luxury Collection
          </p>

          <h1 className="max-w-5xl text-6xl font-semibold leading-[0.95] tracking-tight text-white md:text-8xl">
            Explore Dubai’s Most Prestigious Residences
          </h1>

          <p className="mt-8 max-w-2xl text-sm leading-8 text-white/65 md:text-base">
            Discover curated luxury villas, skyline penthouses, waterfront
            residences, and iconic investment opportunities across Dubai’s elite
            destinations.
          </p>
        </div>
      </section>

      {/* FEATURED PROPERTY */}
      {featuredProperty && (
        <div className="px-6 py-28 md:px-10 lg:px-16">
          <FeaturedProperty
            slug={featuredProperty.slug}
            image={featuredProperty.image}
            title={featuredProperty.title}
            location={featuredProperty.location}
            price={featuredProperty.price}
            bedrooms={featuredProperty.bedrooms}
            bathrooms={featuredProperty.bathrooms}
            area={featuredProperty.area}
          />
        </div>
      )}

      {/* PROPERTIES GRID */}
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          {/* SECTION HEADER */}
          <div className="mb-16">
            <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#C8A96B]">
              Exclusive Listings
            </p>

            <h2 className="max-w-4xl text-5xl font-semibold leading-tight text-white md:text-6xl">
              Handpicked Luxury Properties Designed For Elevated Living
            </h2>
          </div>

          {/* GRID */}
          <div className="grid gap-8 lg:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
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
        </div>
      </section>

      <CTASection />
    </MainLayout>
  );
};

export default Properties;
