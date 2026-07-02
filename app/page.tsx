import Navigation from "@/components/layout/Navigation";
import SectionRenderer from "@/components/renderer/SectionRenderer";

import config from "@/configs/law-firm.json";

export default function Home() {
  return (
    <main className="pt-24">
      <Navigation
        company={config.company}
        navigation={config.navigation}
      />

      {config.page.sections.map((section) => (
        <SectionRenderer
          key={section.type}
          section={section}
          config={config}
        />
      ))}
    </main>
  );
}