"use client";

import {
  ArrowRight,
  Car,
  Truck,
  PersonStanding,
  HeartPulse,
  Scale,
  Sparkles,
  ShieldPlus,
  Smile,
  BadgePlus,
} from "lucide-react";

import { PracticeAreasData } from "@/types/site";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { ThemeConfig } from "@/configs/themes/types";

interface PracticeAreasProps {
  practiceAreas: PracticeAreasData;
  theme: ThemeConfig;
}

const icons = {
  ArrowRight,
  Car,
  Truck,
  PersonStanding,
  HeartPulse,
  Scale,
  Sparkles,
  ShieldPlus,
  Smile,
  BadgePlus,
};

export default function PracticeAreas({
  practiceAreas,
  theme,
}: PracticeAreasProps) {
  return (
    <section
      id="practiceAreas"
      className={`${theme.colors.primary} ${theme.layout.sectionSpacing} relative isolate overflow-hidden`}
    >
      {/* Background Image */}
      <div
        className="
    absolute
    top-[45%]
    -translate-y-1/2

    right-[-160px]
    xl:right-[-240px]
    2xl:right-[-420px]

    w-[700px]
    h-[700px]

    xl:w-[850px]
    xl:h-[850px]

    2xl:w-[1000px]
    2xl:h-[1000px]

    opacity-50
    pointer-events-none
    -z-10
  "
      >
        <img
          src="/images/IMG_0144.JPG"
          alt=""
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <Container className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={practiceAreas.eyebrow}
          title={practiceAreas.title}
          subtitle={practiceAreas.subtitle}
          theme={theme}
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.items.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];

            return (
              <Card
                key={item.title}
                theme={theme}
              >
                <div
                  className={`
                    mb-8
                    inline-flex
                    rounded-2xl
                    p-4
                    transition
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
                  {item.title}
                </h3>

                <p
                  className={`${theme.colors.textLight} mt-4 leading-8`}
                >
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}