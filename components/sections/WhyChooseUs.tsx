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
      className="
    relative
    overflow-hidden

    bg-[#261020]

    lg:bg-transparent
  "
    >
      {/* Desktop Background Only */}

      <div className="absolute inset-0 hidden lg:block">

        <Image
          src="/images/medBowl1.png"
          alt="Traditional Chinese Medicine"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#120A10]/35 via-[#120A10]/15 to-[#120A10]/70" />

      </div>

      {/* Content */}

      <Container
        className="
    relative
    z-10

    min-h-screen
    lg:min-h-[950px]

    flex
    items-center

    py-20
    sm:py-24
    lg:py-0
  "
      >
        <div
          className="
    grid
    lg:grid-cols-2

    w-full

    gap-12
    lg:gap-16
  "
        >

          {/* LEFT SIDE */}

          <div className="relative h-full">


          </div>

          {/* RIGHT SIDE */}

          <div
            className="
    max-w-xl

    mx-auto
    lg:ml-auto

    px-4
    sm:px-2
    lg:px-0

    text-center
    lg:text-left
  "
          >
            <p
              className="
                uppercase
                tracking-[0.35em]
                text-sm
                text-[#E8D8E5]
                mb-6 lg:mb-8
              "
            >
              {whyChooseUs.eyebrow}
            </p>

            <h2
              className={`
                ${theme.typography.heading}

                text-[#F7F3EE]

                text-4xl
sm:text-5xl
lg:text-7xl
leading-tight

                leading-tight
              `}
            >
              {whyChooseUs.title}
            </h2>

            <p
              className={`
                ${theme.typography.body}

                mt-8

                text-base
sm:text-lg

leading-8
sm:leading-9

                text-[#ECE6E0]
              `}
            >
              {whyChooseUs.subtitle}
            </p>
            <div className="flex justify-center lg:justify-start mt-10 mb-12">

              <div className="w-24 h-px bg-white/20" />

            </div>
            {/* Mobile Image */}

            <div className="mt-12 sm:mt-16 space-y-8 sm:space-y-10">

              {whyChooseUs.features.map((feature) => {
                const Icon =
                  icons[feature.icon as keyof typeof icons];

                return (
                  <div
                    key={feature.title}
                    className="
  flex
  items-start

  gap-4
  sm:gap-5

  pb-6
  sm:pb-8

  border-b
  border-white/15

  text-left
"
                  >
                    <div
                      className="
                        h-12
w-12
sm:h-14
sm:w-14
                        shrink-0

                        rounded-full

                        bg-white/10

                        flex
                        items-center
                        justify-center

                        text-[#E8D8E5]
                      "
                    >
                      <Icon
                        size={20}
                        className="sm:h-6 sm:w-6"
                      />
                    </div>

                    <div>

                      <h3
                        className={`
                          ${theme.typography.heading}

                          text-[#F7F3EE]

                          text-xl
sm:text-2xl
                        `}
                      >
                        {feature.title}
                      </h3>

                      <p
                        className={`
                          ${theme.typography.body}

                          mt-3

                          text-sm
sm:text-base

leading-7
sm:leading-8

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