import { motion } from "framer-motion";

interface PropertyGalleryProps {
  images: string[];
}

const PropertyGallery = ({ images }: PropertyGalleryProps) => {
  return (
    <section className="bg-[#050505] py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* HEADER */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#C8A96B]">
              Luxury Interiors
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Crafted Spaces With Timeless Elegance
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/60">
            Explore meticulously designed interiors, panoramic skyline views,
            and elevated living experiences curated for modern luxury.
          </p>
        </div>

        {/* GALLERY */}
        <div className="grid gap-6 md:grid-cols-12">
          {/* LARGE IMAGE */}
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
            className="group relative overflow-hidden rounded-[2.5rem] md:col-span-7"
          >
            <img
              src={images[0]}
              alt="Luxury Property"
              loading="lazy"
              className="h-full min-h-[600px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>

          {/* RIGHT GRID */}
          <div className="grid gap-6 md:col-span-5">
            {images.slice(1, 5).map((image, index) => (
              <motion.div
                key={image}
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
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden rounded-[2rem]"
              >
                <img
                  src={image}
                  alt={`Property Gallery ${index + 1}`}
                  loading="lazy"
                  className="h-[287px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyGallery;
