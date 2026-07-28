"use client";

import Image from "next/image";
import {
  Scale,
  ShieldCheck,
  Award,
  Leaf,
} from "lucide-react";

import { WhyChooseUsData } from "@/types/site";
import Container from "@/components/ui/Container";
import { ThemeConfig } from "@/configs/themes/types";

interface WhyChooseUsProps {
  whyChooseUs: WhyChooseUsData;
  theme: ThemeConfig;
}

const icons = {
  Scale,
  ShieldCheck,
  Leaf,
  Award,
};

export default function WhyChooseUs({
  whyChooseUs,
  theme,
}: WhyChooseUsProps) {
  return (
    <section
      id="whyChooseUs"
      className="relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/medBowl1.png"
          alt="Traditional Chinese Medicine"
          fill
          className="object-cover"
          priority
        />

        {/* Darken left side slightly */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#120A10]/35 via-[#120A10]/15 to-[#120A10]/70" />
      </div>

      {/* Content */}

      <Container
        className="
          relative
          z-10

          min-h-[950px]

          flex
          items-center
        "
      >
        <div className="grid lg:grid-cols-2 w-full gap-16">

          {/* LEFT SIDE */}

          <div className="relative h-full">


          </div>

          {/* RIGHT SIDE */}

          <div className="max-w-xl ml-auto">

            <p
              className="
                uppercase
                tracking-[0.35em]
                text-sm
                text-[#E8D8E5]
                mb-8
              "
            >
              {whyChooseUs.eyebrow}
            </p>

            <h2
              className={`
                ${theme.typography.heading}

                text-[#F7F3EE]

                text-5xl
                lg:text-7xl

                leading-tight
              `}
            >
              {whyChooseUs.title}
            </h2>

            <p
              className={`
                ${theme.typography.body}

                mt-8

                text-lg
                leading-9

                text-[#ECE6E0]
              `}
            >
              {whyChooseUs.subtitle}
            </p>

            <div className="mt-16 space-y-10">

              {whyChooseUs.features.map((feature) => {
                const Icon =
                  icons[feature.icon as keyof typeof icons];

                return (
                  <div
                    key={feature.title}
                    className="
                      flex
                      gap-5

                      border-b
                      border-white/15

                      pb-8
                    "
                  >
                    <div
                      className="
                        h-14
                        w-14
                        shrink-0

                        rounded-full

                        bg-white/10

                        flex
                        items-center
                        justify-center

                        text-[#E8D8E5]
                      "
                    >
                      <Icon size={24} />
                    </div>

                    <div>

                      <h3
                        className={`
                          ${theme.typography.heading}

                          text-[#F7F3EE]

                          text-2xl
                        `}
                      >
                        {feature.title}
                      </h3>

                      <p
                        className={`
                          ${theme.typography.body}

                          mt-3

                          text-base
                          leading-8

                          text-[#DDD6D0]
                        `}
                      >
                        {feature.description}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}