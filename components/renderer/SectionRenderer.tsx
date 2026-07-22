import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import PracticeAreas from "@/components/sections/PracticeAreas";
import ContactCTA from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { SiteConfig, PageSection } from "@/types/site";
import { themes } from "@/configs/themes";

interface Props {
  section: PageSection;
  config: SiteConfig;
}

export default function SectionRenderer({
  section,
  config,
}: Props) {

  const theme = themes[config.theme];

  const sectionMap = {
    hero: (
      <Hero
        hero={config.hero}
        company={config.company}
        theme={theme}
      />
    ),

    trust: (
      <TrustBar
        trust={config.trust}
        theme={theme}
      />
    ),

    whyChooseUs: (
      <WhyChooseUs
        whyChooseUs={config.whyChooseUs}
        theme={theme}
      />
    ),

    about: (
      <About
        about={config.about}
        theme={theme}
      />
    ),

    testimonials: (
      <Testimonials
        testimonials={config.testimonials}
        theme={theme}
      />
    ),

    practiceAreas: (
      <PracticeAreas
        practiceAreas={config.practiceAreas}
        theme={theme}
      />
    ),

    contact: (
      <ContactCTA
        contactCTA={config.contact}
        company={config.company}
        theme={theme}
      />
    ),

    footer: (
      <Footer
        footer={config.footer}
        company={config.company}
        theme={theme}
      />
    ),
  };

  return (
    sectionMap[
    section.type as keyof typeof sectionMap
    ] ?? null
  );
}


