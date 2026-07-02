interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500
        ${className}
      `}
    >
      {children}
    </div>
  );
}