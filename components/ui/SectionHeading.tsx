interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
        {eyebrow}
      </p>

      <div
        className={`mt-3 h-1 w-24 rounded-full bg-blue-500 ${
          centered ? "mx-auto" : ""
        }`}
      />

      <h2 className="mt-6 text-5xl font-bold text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}