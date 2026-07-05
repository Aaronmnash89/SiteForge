import {
  Scale,
  ShieldCheck,
  Phone,
  Award,
} from "lucide-react";

import { WhyChooseUsData } from "@/types/site";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { lawTheme } from "@/configs/themes/law";

interface WhyChooseUsProps {
  whyChooseUs: WhyChooseUsData;
}

const icons = {
  Scale,
  ShieldCheck,
  Phone,
  Award,
};

export default function WhyChooseUs({
  whyChooseUs,
}: WhyChooseUsProps) {
  return (
    <section
      id="whyChooseUs"
      className={`${lawTheme.colors.primary} ${lawTheme.layout.sectionSpacing}`} >
      <Container className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow={whyChooseUs.eyebrow}
          title={whyChooseUs.title}
          subtitle={whyChooseUs.subtitle}
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.features.map((feature) => {
            const Icon =
              icons[feature.icon as keyof typeof icons];

            return (

              <Card
                key={feature.title}
                className="group bg-white/5 hover:bg-white/10"
              >
                <div className="mb-6 inline-flex rounded-xl bg-blue-600/10 p-4 text-blue-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600/20">
                  <Icon size={34} />
                </div>

                <h3 className="text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

      </Container>
    </section>
  );
}