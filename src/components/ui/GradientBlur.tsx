interface GradientBlurProps {
  className?: string;
  color?: "gold" | "white";
}

const GradientBlur = ({
  className = "",
  color = "gold",
}: GradientBlurProps) => {
  const colors = {
    gold: "bg-[#C8A96B]/12",
    white: "bg-white/10",
  };

  return (
    <div
      className={`
        pointer-events-none
        absolute
        rounded-full
        blur-[140px]
        ${colors[color]}
        ${className}
      `}
    />
  );
};

export default GradientBlur;
