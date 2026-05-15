import type { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

interface LuxurySelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: string[];
}

const LuxurySelect = ({
  label,
  options,
  className = "",
  ...props
}: LuxurySelectProps) => {
  return (
    <div>
      {/* LABEL */}
      {label && (
        <label className="mb-3 block text-xs uppercase tracking-[0.18em] text-white/50">
          {label}
        </label>
      )}

      {/* SELECT WRAPPER */}
      <div className="relative">
        <select
          className={`
            h-14 w-full appearance-none rounded-2xl
            border border-white/10
            bg-black/30
            px-5 pr-14
            text-sm text-white
            outline-none
            backdrop-blur-xl
            transition-all duration-300
            focus:border-[#C8A96B]/60
            ${className}
          `}
          {...props}
        >
          {options.map((option, index) => (
            <option key={index} value={option} className="bg-[#050505]">
              {option}
            </option>
          ))}
        </select>

        {/* ICON */}
        <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/50">
          <ChevronDown size={18} />
        </div>
      </div>
    </div>
  );
};

export default LuxurySelect;
