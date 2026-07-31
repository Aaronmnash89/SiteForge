"use client";

import {
  Bone,
  Brain,
  Flower2,
  HeartPulse,
  ShieldPlus,
  HeartHandshake,
} from "lucide-react";
import { PracticeAreasData } from "@/types/site";
import Container from "@/components/ui/Container";
import { ThemeConfig } from "@/configs/themes/types";

interface PracticeAreasProps {
  practiceAreas: PracticeAreasData;
  theme: ThemeConfig;
}

const featureIcons = [
  Bone,
  Brain,
  Flower2,
  HeartPulse,
  ShieldPlus,
  HeartHandshake,
];

export default function PracticeAreas({
  practiceAreas,
  theme,
}: PracticeAreasProps) {
  return (
    <section
      id="practiceAreas"
      className="bg-[#F7F3EE] py-36 overflow-hidden relative"
    >
      <Container className="max-w-[1700px]">
        <div className="max-w-5xl mx-auto text-center">
          {/* LEFT CONTENT */}

          <div className="relative z-10">
            <p
              className="
        uppercase
        tracking-[0.35em]
        text-sm
        text-[#7A4B67]
        mb-6
      "
            >
              {practiceAreas.eyebrow}
            </p>

            <h2
              className={`
        ${theme.typography.heading}

        text-[#261020]

        text-5xl
        lg:text-7xl
        xl:text-8xl

        leading-[0.98]

        max-w-4xl
mx-auto
      `}
            >
              {practiceAreas.title}
            </h2>

            <p
              className={`
        ${theme.typography.body}

        mt-10

        text-xl
        leading-10

        max-w-4xl
mx-auto

        text-[#5E5A56]
      `}
            >
              {practiceAreas.subtitle}
            </p>

            <div className="mt-14">
              <div
                className="
      flex
      items-center
      justify-center

      gap-3
      sm:gap-5

      max-w-xs
      sm:max-w-md
      lg:max-w-xl

      mx-auto
    "
              >
                <div className="h-px w-10 sm:w-20 lg:flex-1 bg-[#A87897]" />

                <span
                  className="
        uppercase

        tracking-[0.35em]

        text-[10px]
        sm:text-xs

        whitespace-nowrap

        text-[#A87897]
      "
                >
                  Conditions We Treat
                </span>

                <div className="h-px w-10 sm:w-20 lg:flex-1 bg-[#A87897]" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          {/* PRACTICE AREAS GRID */}

          <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-x-24 gap-y-14">
            {practiceAreas.items.map((item, index) => {
              const Icon = featureIcons[index % featureIcons.length];

              return (
                <div
                  key={`${item.title}-${index}`}
                  className="
        group
        flex
        items-start
        gap-6

        border-b
        border-[#D6CBC2]

        pb-8

        transition-all
        duration-300
      "
                >
                  <div
                    className="
          h-14
          w-14
          shrink-0

          rounded-full

          bg-[#591E4A]/8

          flex
          items-center
          justify-center

          transition-all
          duration-300

          group-hover:bg-[#591E4A]
        "
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.7}
                      className="
            text-[#591E4A]
            transition-all
            duration-300

            group-hover:text-white
            group-hover:scale-110
          "
                    />
                  </div>

                  <div className="flex-1">
                    <h3
                      className={`
            ${theme.typography.heading}

            text-[#261020]

            text-3xl

            transition-all
            duration-300

            group-hover:translate-x-1
          `}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`
            ${theme.typography.body}

            mt-3

            text-lg
            leading-8

            text-[#5E5A56]
          `}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
