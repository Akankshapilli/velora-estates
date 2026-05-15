import { type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";

interface LuxuryInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  textarea?: boolean;
  rows?: number;
  textareaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
}

const LuxuryInput = ({
  label,
  textarea = false,
  rows = 5,
  className = "",
  textareaProps,
  ...props
}: LuxuryInputProps) => {
  return (
    <div>
      {label && (
        <label className="mb-3 block text-xs uppercase tracking-[0.18em] text-white/50">
          {label}
        </label>
      )}

      {textarea ? (
        <textarea
          rows={rows}
          className={`
            w-full rounded-[1.5rem]
            border border-white/10
            bg-black/30
            px-5 py-4
            text-sm text-white
            outline-none
            backdrop-blur-xl
            transition-all duration-300
            placeholder:text-white/30
            focus:border-[#C8A96B]/60
            ${className}
          `}
          {...textareaProps}
        />
      ) : (
        <input
          className={`
            h-14 w-full rounded-2xl
            border border-white/10
            bg-black/30
            px-5
            text-sm text-white
            outline-none
            backdrop-blur-xl
            transition-all duration-300
            placeholder:text-white/30
            focus:border-[#C8A96B]/60
            ${className}
          `}
          {...props}
        />
      )}
    </div>
  );
};

export default LuxuryInput;
