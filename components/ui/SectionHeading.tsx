import { ThemeConfig } from "@/configs/themes/types";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  theme: ThemeConfig;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  theme,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <p
        className={`${theme.colors.accent} text-sm font-semibold uppercase tracking-[0.3em]`}
      >
        {eyebrow}
      </p>

      <div
        className={`mt-3 h-1 w-24 rounded-full ${theme.colors.secondary} ${
          centered ? "mx-auto" : ""
        }`}
      />

      <h2
        className={`${theme.colors.text} ${theme.typography.heading} mt-6 text-5xl`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`${theme.colors.textLight} mx-auto mt-6 max-w-3xl text-lg leading-relaxed`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}