interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl",

    secondary:
      "border border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center
        rounded-xl
        px-8 py-4
        font-semibold
        transition-all duration-300
        hover:-translate-y-1
        ${styles[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}