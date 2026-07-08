import { ThemeConfig } from "@/configs/themes/types";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  theme: ThemeConfig;
}

export default function Card({
  children,
  className = "",
  theme,
}: CardProps) {
  return (
    <div
      className={`
        ${theme.cards.rounded}
        border
        ${theme.colors.border}
        ${theme.colors.surface}
        p-8
        ${theme.cards.shadow}
        transition-all
        duration-300
        hover:-translate-y-2
        ${theme.cards.hoverBorder}
        ${className}
      `}
    >
      {children}
    </div>
  );
}