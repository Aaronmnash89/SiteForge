"use client";

import { Leaf, HeartHandshake, Sparkles, Flower2 } from "lucide-react";

import { TreatmentsData } from "@/types/site";
import Container from "@/components/ui/Container";
import { ThemeConfig } from "@/configs/themes/types";

interface TreatmentsProps {
  treatments: TreatmentsData;
  theme: ThemeConfig;
}

const featureIcons = [Leaf, HeartHandshake, Sparkles, Flower2];

export default function Treatments({ treatments, theme }: TreatmentsProps) {
  return (
    <section id="treatments" className="relative overflow-hidden min-h-screen">
      {/* Background */}

      <div className="absolute inset-0">
        <img
          src="/images/cupping.JPG"
          alt="Traditional Cupping Therapy"
          className="h-full w-full object-cover object-[55%_center]"
        />

        <div className="absolute inset-0 bg-[#261020]/35" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(92,44,65,.12),transparent_65%)]" />
      </div>

      {/* Content */}

      <Container
        className="
    relative
    z-10

    py-24
    lg:py-32
  "
      >
        {/* Header */}

        <div
          className="
    w-full
    max-w-5xl
    mx-auto

    flex
    flex-col
    items-center
    text-center

    mb-20
  "
        >
          <p
            className="
        uppercase
        tracking-[0.35em]
        text-sm
        text-[#D6A8C9]
        mb-8
      "
          >
            {treatments.eyebrow}
          </p>

          <h2
            className={`
        ${theme.typography.heading}

        text-[#F2F2F2]

        text-5xl
        lg:text-7xl

        leading-[1.05]
      `}
          >
            {treatments.title}
          </h2>

          <p
            className={`
        ${theme.typography.body}

        mt-8

        max-w-2xl
        mx-auto

        text-xl
        leading-9

        text-[#DDD5D8]
      `}
          >
            {treatments.subtitle}
          </p>

          <div className="mt-14 w-full max-w-xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-[#A87897]" />

              <span
                className="
            uppercase
            tracking-[0.35em]
            text-xs
            text-[#A87897]
            whitespace-nowrap
          "
              >
                Supportive Care
              </span>

              <div className="h-px flex-1 bg-[#A87897]" />
            </div>
          </div>
        </div>

        {/* Treatments */}

        <div
          className="
      mt-20

      grid
      gap-10

      lg:grid-cols-2
    "
        >
          {treatments.items.map((item, index) => {
            const Icon = featureIcons[index % featureIcons.length];

            return (
              <div
                key={`${item.title}-${index}`}
                className="
                border-b
                border-[#6A4558]
                pb-6"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}

                  <div
                    className="
                          mt-1
                          h-10
                          w-10
                          sm:h-12
                          sm:w-12
                          shrink-0
                          rounded-full
                          border
                          border-[#A87897]/40
                          bg-[#591E4A]/25
                          flex
                          items-center
                          justify-center">
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      style={{
                        color: "#FFFFFF",
                        stroke: "#FFFFFF",
                        flexShrink: 0,
                      }}
                      className="h-5 w-5 sm:h-6 sm:w-6"
                    />
                  </div>

                  {/* Content */}

                  <div>
                    <h3
                      className={`
                            ${theme.typography.heading}

                            text-[#F2F2F2]

                            text-2xl
sm:text-3xl
                          `}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`
                            ${theme.typography.body}

                          
                            max-w-xl

                           text-base
sm:text-lg

leading-7
sm:leading-8

                            text-[#CFC7CB]
                          `}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
