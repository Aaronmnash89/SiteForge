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
            <h3 className="text-4xl font-bold text-blue-500">
              {item.value}
            </h3>

            <p className="mt-2 text-gray-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}