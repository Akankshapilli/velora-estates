import { Building2, Users, Landmark, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "250+",
    label: "Luxury Properties",
  },
  {
    icon: Users,
    value: "1.2K+",
    label: "Elite Clients",
  },
  {
    icon: Landmark,
    value: "15+",
    label: "Prime Locations",
  },
  {
    icon: TrendingUp,
    value: "$2.8B",
    label: "Property Value Sold",
  },
];

const PropertyStats = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="group rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#C8A96B]/30 hover:bg-[#C8A96B]/[0.03]"
              >
                {/* ICON */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#C8A96B]/20 bg-[#C8A96B]/10 text-[#E7D3A8] transition-all duration-500 group-hover:scale-105 group-hover:bg-[#C8A96B]/20">
                  <Icon size={30} strokeWidth={1.8} />
                </div>

                {/* VALUE */}
                <h2 className="mt-8 text-5xl font-semibold tracking-tight text-white">
                  {stat.value}
                </h2>

                {/* LABEL */}
                <p className="mt-4 text-sm uppercase tracking-[0.16em] text-white/50">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertyStats;
