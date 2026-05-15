interface PropertyBadgeProps {
  label: string;
  variant?: "gold" | "dark" | "outline";
}

const PropertyBadge = ({ label, variant = "gold" }: PropertyBadgeProps) => {
  const variants = {
    gold: "bg-[#C8A96B] text-black border-[#C8A96B]",
    dark: "bg-black/50 text-white border-white/10 backdrop-blur-xl",
    outline: "bg-transparent text-[#E7D3A8] border-[#C8A96B]/40",
  };

  return (
    <div
      className={`inline-flex items-center rounded-full border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] transition-all duration-300 ${variants[variant]}`}
    >
      {label}
    </div>
  );
};

export default PropertyBadge;
