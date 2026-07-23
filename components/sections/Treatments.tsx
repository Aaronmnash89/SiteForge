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

import { TreatmentsData } from "@/types/site";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { ThemeConfig } from "@/configs/themes/types";

interface TreatmentsProps {
  treatments: TreatmentsData;
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

export default function Treatments({
  treatments,
  theme,
}: TreatmentsProps) {
  return (
    <section
      id="treatments"
      className={`${theme.colors.primary} ${theme.layout.sectionSpacing} relative overflow-hidden`}
    >
      <Container className="mx-auto max-w-7xl px-6">
        <div className="relative z-20">
          <SectionHeading
            eyebrow={treatments.eyebrow}
            title={treatments.title}
            subtitle={treatments.subtitle}
            theme={theme}
          />
        </div>
        {/* Cards + Background Image */}
        <div className="relative mt-20">

          {/* Background Image */}
          <div
            className="
              absolute
              left-[-220px]
              top-1/2
              -translate-y-1/2
              w-[900px]
              h-[900px]
              opacity-50
              pointer-events-none
              z-0
            "
          >
            <img
              src="/images/IMG_0466.JPG"
              alt=""
              className="h-full w-full object-cover rounded-full"
            />
          </div>

          {/* Cards */}
          <div className="relative z-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {treatments.items.map((item, index) => {
              const Icon =
                icons[item.icon as keyof typeof icons];

              return (
                <Card
                  key={`${item.title}-${index}`}
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

        </div>

      </Container>
    </section>
  );
}