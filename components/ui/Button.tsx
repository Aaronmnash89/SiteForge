"use client";
import { ThemeConfig } from "@/configs/themes/types";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  theme: ThemeConfig;
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  theme,
  href
}: ButtonProps) {

  const styles = {
  primary: theme.button.primaryColor,

  secondary: theme.colors.secondary,

};

const hoverStyles = {
  primary: theme.button.primaryHover,
  secondary: theme.button.secondaryHover,
};


  const classes = `
  ${styles[variant]}
  ${theme.button.padding}
  ${theme.button.rounded}
  ${theme.button.shadow}
  ${hoverStyles[variant]}
  ${theme.button.transition}
  inline-flex items-center justify-center
  ${className}
`;

if (href) {
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

return (
  <button className={classes}>
    {children}
  </button>
);
}