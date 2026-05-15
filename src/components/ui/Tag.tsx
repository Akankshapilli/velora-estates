interface TagProps {
  text: string;
  variant?: "gold" | "dark" | "outline";
  size?: "sm" | "md";
}

const Tag = ({ text, variant = "gold", size = "md" }: TagProps) => {
  const variants = {
    gold: "border-[#C8A96B]/30 bg-[#C8A96B]/10 text-[#E7D3A8]",
    dark: "border-white/10 bg-black/40 text-white/80 backdrop-blur-xl",
    outline: "border-[#C8A96B]/40 bg-transparent text-[#E7D3A8]",
  };

  const sizes = {
    sm: "px-3 py-1 text-[10px]",
    md: "px-5 py-2 text-xs",
  };

  return (
    <div
      className={`
        inline-flex items-center
        rounded-full border
        uppercase tracking-[0.22em]
        font-medium
        transition-all duration-300
        ${variants[variant]}
        ${sizes[size]}
      `}
    >
      {text}
    </div>
  );
};

export default Tag;
