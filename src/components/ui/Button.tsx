import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  to?: string;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  type = "button",
  onClick,
  disabled = false,
  to,
}: ButtonProps) => {
  const variants = {
    primary: "bg-[#C8A96B] text-black hover:bg-[#E7D3A8]",

    secondary:
      "border border-white/10 bg-white/[0.04] text-white hover:border-[#C8A96B]/40 hover:bg-[#C8A96B]/10 hover:text-[#E7D3A8]",

    outline:
      "border border-[#C8A96B]/30 bg-transparent text-[#E7D3A8] hover:bg-[#C8A96B] hover:text-black",
  };

  const sizes = {
    sm: "h-11 px-5 text-xs tracking-[0.12em]",

    md: "h-14 px-8 text-sm tracking-[0.14em]",

    lg: "h-16 px-10 text-sm tracking-[0.16em]",
  };

  const baseClasses = `
    inline-flex items-center justify-center
    rounded-full
    font-medium
    uppercase
    transition-all duration-300
    disabled:cursor-not-allowed
    disabled:opacity-50
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `;

  if (to) {
    return (
      <motion.div
        whileHover={{
          scale: disabled ? 1 : 1.03,
        }}
        whileTap={{
          scale: disabled ? 1 : 0.98,
        }}
      >
        <Link to={to} className={baseClasses}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{
        scale: disabled ? 1 : 1.03,
      }}
      whileTap={{
        scale: disabled ? 1 : 0.98,
      }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </motion.button>
  );
};

export default Button;
