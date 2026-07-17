import Navigation from "@/components/layout/Navigation";
import Treatments from "@/components/sections/Treatments";
import PracticeAreas from "@/components/sections/PracticeAreas";
import Footer from "@/components/layout/Footer";

import configData from "@/configs/content/acupuncture.json";
import { themes } from "@/configs/themes";
import { SiteConfig } from "@/types/site";

const config = configData as SiteConfig;
const theme = themes[config.theme];

export default function TreatmentsPage() {
  return (
    <>
      <Navigation
        company={config.company}
        navigation={config.navigation}
        theme={theme}
      />

      <PracticeAreas
        practiceAreas={config.practiceAreas}
        theme={theme}
      />

      <Treatments
        treatments={config.treatments}
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