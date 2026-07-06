"use client";
import { ThemeConfig } from "@/configs/themes/types";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  theme: ThemeConfig;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  theme,
}: ButtonProps) {

  const styles = {
    primary: `
    ${theme.button.primaryColor}
    text-white
  `,

    secondary: `
    ${theme.colors.secondary}
    text-black
  `,
  };

  const hoverStyles = {
  primary: theme.button.primaryHover,
  secondary: theme.button.secondaryHover,
};


  return (
    <button
      className={`
    ${styles[variant]}
    ${theme.button.padding}
    ${theme.button.rounded}
    ${theme.button.shadow}
    ${hoverStyles[variant]}
    ${theme.button.transition}
    ${className}
  `}
    >
      {children}
    </button>
  );
}