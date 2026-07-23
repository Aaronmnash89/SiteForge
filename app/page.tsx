import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Footer from "@/components/layout/Footer";

import { themes } from "@/configs/themes";
import configData from "@/configs/content/acupuncture.json";
import { SiteConfig } from "@/types/site";

const config: SiteConfig = configData as SiteConfig;

export default function Home() {
  const theme = themes[config.theme];

  return (
    <main className="relative overflow-hidden">

      {theme.layout.backgroundImage && (
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url(${theme.layout.backgroundImage})`,
          }}
        />
      )}

      <div className="relative z-10">
        <Navigation
          company={config.company}
          navigation={config.navigation}
          theme={theme}
        />

        <Hero
          hero={config.hero}
          company={config.company}
          theme={theme}
        />


        <WhyChooseUs
          whyChooseUs={config.whyChooseUs}
          theme={theme}
        />

        <Footer
          footer={config.footer}
          company={config.company}
          theme={theme}
        />
      </div>

    </main>
  );
}