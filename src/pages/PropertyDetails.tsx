import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import PropertyInfo from "../components/property/PropertyInfo";
import PropertyGallery from "../components/property/PropertyGallery";
import PropertyAmenities from "../components/property/PropertyAmenities";
import PropertyMap from "../components/property/PropertyMap";
import CTASection from "../components/sections/CTASection";

import { properties } from "../data/properties";

const PropertyDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const property = properties.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!property) {
    return (
      <MainLayout>
        <section className="flex min-h-screen items-center justify-center bg-[#050505] px-6">
          <div className="text-center">
            <h1 className="text-5xl font-semibold text-white">
              Property Not Found
            </h1>

            <p className="mt-6 text-sm leading-8 text-white/60">
              The property you’re looking for does not exist or may have been
              removed.
            </p>

            <button
              onClick={() => navigate("/properties")}
              className="mt-10 rounded-full bg-[#C8A96B] px-8 py-4 text-sm font-medium tracking-[0.14em] text-black transition-all duration-300 hover:bg-[#E7D3A8]"
            >
              BACK TO PROPERTIES
            </button>
          </div>
        </section>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        {/* IMAGE */}
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#050505]" />

        {/* CONTENT */}
        <div className="absolute bottom-16 left-0 w-full">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#C8A96B]">
              {property.location}
            </p>

            <h1 className="max-w-5xl text-6xl font-semibold leading-[0.95] tracking-tight text-white md:text-8xl">
              {property.title}
            </h1>

            <p className="mt-8 text-5xl font-semibold text-[#E7D3A8]">
              {property.price}
            </p>
          </div>
        </div>
      </section>

      {/* PROPERTY INFO */}
      <PropertyInfo
        title={property.title}
        location={property.location}
        price={property.price}
        bedrooms={property.bedrooms}
        bathrooms={property.bathrooms}
        area={property.area}
        yearBuilt={property.yearBuilt}
        description={property.description}
      />

      {/* GALLERY */}
      <PropertyGallery images={property.gallery} />

      {/* AMENITIES */}
      <PropertyAmenities amenities={property.amenities} />

      {/* MAP */}
      <PropertyMap
        location={property.location}
        address={`${property.location}, Dubai, United Arab Emirates`}
        image="/images/map/map.png"
      />

      {/* CTA */}
      <CTASection />
    </MainLayout>
  );
};

export default PropertyDetails;
