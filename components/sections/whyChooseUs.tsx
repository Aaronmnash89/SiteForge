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
import { ThemeConfig } from "@/configs/themes/types";

interface WhyChooseUsProps {
  whyChooseUs: WhyChooseUsData;
  theme: ThemeConfig;
}

const icons = {
  Scale,
  ShieldCheck,
  Phone,
  Award,
};

export default function WhyChooseUs({
  whyChooseUs,
  theme,
}: WhyChooseUsProps) {
  return (
    <section
      id="whyChooseUs"
      className={`${theme.colors.primary} ${theme.layout.sectionSpacing}`}
    >
      <Container className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow={whyChooseUs.eyebrow}
          title={whyChooseUs.title}
          subtitle={whyChooseUs.subtitle}
          theme={theme}
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.features.map((feature) => {
            const Icon =
              icons[feature.icon as keyof typeof icons];

            return (
              <Card
                key={feature.title}
                className={`
                  group
                  ${theme.cards.rounded}
                  ${theme.cards.shadow}
                  ${theme.colors.surface}
                  border
                  ${theme.colors.border}
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                `}
              >
                <div
                  className={`
                    mb-6
                    inline-flex
                    rounded-xl
                    p-4
                    transition-all
                    duration-300
                    group-hover:scale-110
                    ${theme.colors.primary}
                    ${theme.colors.accent}
                  `}
                >
                  <Icon size={34} />
                </div>

                <h3
                  className={`${theme.typography.heading} ${theme.colors.text} text-2xl`}
                >
                  {feature.title}
                </h3>

                <p
                  className={`${theme.colors.textLight} mt-4 leading-7`}
                >
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