import Navigation from "@/components/layout/Navigation";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/layout/Footer";

import { themes } from "@/configs/themes";
import configData from "@/configs/content/acupuncture.json";
import { SiteConfig } from "@/types/site";

const config: SiteConfig = configData as SiteConfig;

export default function FAQPage() {
  const theme = themes[config.theme];

  return (
    <>
      <Navigation
        company={config.company}
        navigation={config.navigation}
        theme={theme}
      />

      <FAQ
        faq={config.faq!}
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