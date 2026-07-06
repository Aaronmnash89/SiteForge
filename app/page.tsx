import Navigation from "@/components/layout/Navigation";
import SectionRenderer from "@/components/renderer/SectionRenderer";
import { themes } from "@/configs/themes";

import configData from "@/configs/content/law-firm.json";
import { SiteConfig } from "@/types/site";

const config: SiteConfig = configData;


export default function Home() {
  const theme = themes[config.theme];
  return (
    <body>
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
    </body>
  );
}


