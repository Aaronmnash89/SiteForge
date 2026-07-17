import Navigation from "@/components/layout/Navigation";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/layout/Footer";

import { themes } from "@/configs/themes";
import configData from "@/configs/content/acupuncture.json";
import { SiteConfig } from "@/types/site";

const config: SiteConfig = configData as SiteConfig;

export default function AboutPage() {
  const theme = themes[config.theme];

  return (
    <>
      <Navigation
        company={config.company}
        navigation={config.navigation}
        theme={theme}
      />

      <About
        about={config.about}
        theme={theme}
      />

      <Testimonials
        testimonials={config.testimonials}
        theme={theme}
      />

      <Footer
        footer={config.footer}
        company={config.company}
        theme={theme}
      />
    </>
  );
}