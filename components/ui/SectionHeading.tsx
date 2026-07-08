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
        className={`${theme.colors.accent}
      text-sm
      font-semibold
      uppercase
      tracking-[0.3em]`}
      >
        {eyebrow}
      </p>

      <div
        className={`
      mt-3
      mb-8
      h-1
      w-24
      rounded-full
      ${theme.colors.underline}
      ${centered ? "mx-auto" : ""}
    `}
      />

      <h2
        className={`
      ${theme.colors.text}
      ${theme.typography.heading}
      text-5xl
    `}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`
        ${theme.colors.textLight}
        mt-6
        ${centered ? "mx-auto max-w-3xl" : "max-w-3xl"}
        text-lg
        leading-relaxed
      `}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}