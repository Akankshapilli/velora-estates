interface PropertyPriceProps {
  price: string;
  label?: string;
  size?: "sm" | "md" | "lg";
}

const PropertyPrice = ({
  price,
  label = "Starting From",
  size = "md",
}: PropertyPriceProps) => {
  const sizes = {
    sm: {
      label: "text-[10px]",
      price: "text-2xl",
      container: "gap-2",
    },
    md: {
      label: "text-xs",
      price: "text-4xl",
      container: "gap-3",
    },
    lg: {
      label: "text-sm",
      price: "text-6xl",
      container: "gap-4",
    },
  };

  return (
    <div className={`flex flex-col ${sizes[size].container}`}>
      {/* LABEL */}
      <p
        className={`${sizes[size].label} uppercase tracking-[0.22em] text-white/40`}
      >
        {label}
      </p>

      {/* PRICE */}
      <div className="flex items-end gap-2">
        <h2
          className={`${sizes[size].price} font-semibold leading-none text-[#E7D3A8]`}
        >
          {price}
        </h2>
      </div>
    </div>
  );
};

export default PropertyPrice;
