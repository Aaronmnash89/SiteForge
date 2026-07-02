import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/trustBar";
import WhyChooseUs from "@/components/sections/whyChooseUs";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import PracticeAreas from "@/components/sections/PracticeAreas";
import ContactCTA from "@/components/sections/contact";
import Footer from "@/components/layout/Footer";

import { SiteConfig, PageSection } from "@/types/site";

interface Props {
    section: PageSection;
    config: SiteConfig;
}

export default function SectionRenderer({
    section,
    config,
}: Props) {

    const sectionMap = {
        hero: <Hero hero={config.hero} />,
        trust: <TrustBar trust={config.trust} />,
        whyChooseUs: (
            <WhyChooseUs whyChooseUs={config.whyChooseUs} />
        ),

        about: <About about={config.about} />,

        testimonials: (
            <Testimonials testimonials={config.testimonials} />
        ),

        practiceAreas: (
            <PracticeAreas practiceAreas={config.practiceAreas} />
        ),

        contact: (
            <ContactCTA contactCTA={config.contact} />
        ),
        footer: (
            <Footer
                footer={config.footer}
                company={config.company}
            />
        ),
    };

    return (
        sectionMap[
        section.type as keyof typeof sectionMap
        ] ?? null
    );
}