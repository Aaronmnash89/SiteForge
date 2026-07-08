import { lawTheme } from "@/configs/themes/law";
import { TrustData } from "@/types/site";
import { ThemeConfig } from "@/configs/themes/types";

interface TrustBarProps {
  trust: TrustData;
  theme: ThemeConfig;
}

export default function TrustBar({ trust, theme }: TrustBarProps) {
  return (
    <section
      id="trust"
      className={`${theme.colors.primary} ${theme.layout.sectionSpacing}`} >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 text-center md:grid-cols-4">
        {trust.items.map((item) => (
          <div key={item.label}>
            <h3
              className={`${theme.colors.accent} ${theme.typography.heading} text-5xl`}
            >
              {item.value}
            </h3>

            <p className={`${theme.colors.textLight} mt-2`}>
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}