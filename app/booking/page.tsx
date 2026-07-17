import Navigation from "@/components/layout/Navigation";
import ContactCTA from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

import configData from "@/configs/content/acupuncture.json";
import { themes } from "@/configs/themes";
import { SiteConfig } from "@/types/site";

const config = configData as SiteConfig;
const theme = themes[config.theme];

export default function BookingPage() {
  return (
    <>
      <Navigation
        company={config.company}
        navigation={config.navigation}
        theme={theme}
      />

      <ContactCTA
        contactCTA={config.contact}
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