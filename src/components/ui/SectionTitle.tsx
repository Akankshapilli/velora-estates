import type { ReactNode } from "react";

import FadeIn from "../animations/FadeIn";

interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

const SectionTitle = ({
  label,
  title,
  description,
  align = "left",
  children,
}: SectionTitleProps) => {
  const alignment =
    align === "center"
      ? "text-center items-center mx-auto"
      : "text-left items-start";

  return (
    <div className={`flex max-w-4xl flex-col ${alignment}`}>
      {/* LABEL */}
      {label && (
        <FadeIn>
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#C8A96B]">
            {label}
          </p>
        </FadeIn>
      )}

      {/* TITLE */}
      <FadeIn delay={0.1}>
        <h2 className="text-5xl font-semibold leading-tight text-white md:text-6xl">
          {title}
        </h2>
      </FadeIn>

      {/* DESCRIPTION */}
      {description && (
        <FadeIn delay={0.2}>
          <p className="mt-8 max-w-2xl text-sm leading-8 text-white/60 md:text-base">
            {description}
          </p>
        </FadeIn>
      )}

      {/* EXTRA CONTENT */}
      {children && (
        <FadeIn delay={0.3}>
          <div className="mt-10">{children}</div>
        </FadeIn>
      )}
    </div>
  );
};

export default SectionTitle;
