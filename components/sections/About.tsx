"use client";

import Image from "next/image";
import { HeartHandshake, Leaf, Sparkles, ShieldPlus } from "lucide-react";
import { AboutData } from "@/types/site";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ThemeConfig } from "@/configs/themes/types";

interface AboutProps {
  about: AboutData;
  theme: ThemeConfig;
}
const featureIcons = [
  HeartHandshake,
  Leaf,
  Sparkles,
  ShieldPlus,
];

export default function About({
  about,
  theme,
}: AboutProps) {
  return (
    <section
      id="about"
      className="bg-[#F7F3EE] py-36 overflow-hidden"
    >
      <Container className="max-w-7xl">

        <div className="max-w-4xl mx-auto">

          

          {/* ======================================
        CONTENT
    ====================================== */}

          <div className="max-w-4xl mx-auto">

            <p
              className="
          uppercase
          tracking-[0.35em]
          text-sm
          text-[#7A4B67]
          mb-6
        "
            >
              {about.eyebrow}
            </p>

            <h2
              className={`
          ${theme.typography.heading}

          text-[#2A1B25]

          text-5xl
          lg:text-7xl

          leading-[1.02]
        `}
            >
              {about.title}
            </h2>

            <p
              className={`
    ${theme.typography.body}

    mt-8

    max-w-xl

    whitespace-pre-line

    text-[#4C4542]

    text-lg
    leading-9
  `}
            >
              {about.description}
            </p>
{/* ======================================
        IMAGE
    ====================================== */}

          <div
  className="
    relative

    mt-12
    lg:mt-14

    lg:-ml-20
    xl:-ml-28
  "
>

            <div
              className="
    overflow-hidden

    rounded-[34px]
    lg:rounded-[52px]

    shadow-[0_30px_60px_rgba(0,0,0,.15)]
    lg:shadow-[0_45px_90px_rgba(0,0,0,.18)]

   h-[320px]
sm:h-[420px]
md:h-[500px]
lg:h-[620px]
xl:h-[700px]
  "
            >

              <Image
                src={about.image}
                alt={about.title}
                width={900}
                height={1200}
                className="
  h-full
  w-full

  object-cover

  object-center
  lg:object-center

  transition
  duration-700

  hover:scale-105
"
              />

            </div>

          </div>
            <div
  className="
    flex
    items-center
    justify-center

    gap-4
    sm:gap-6

    mt-14
    mb-4
  "
>

  <div className="h-px w-16 sm:w-24 lg:w-32 bg-[#B37B9C]" />

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
    Compassion • Experience • Balance
  </span>

  <div className="h-px w-16 sm:w-24 lg:w-32 bg-[#B37B9C]" />

</div>

            <div
              className="
    mt-10
    lg:mt-14

    space-y-2
    sm:space-y-3
    lg:space-y-4
  "
            >

              {about.highlights.map((highlight, index) => {

                const Icon = featureIcons[index % featureIcons.length];

                return (

                  <div
                    key={highlight}
                    className="
  flex
  items-center

  gap-3
  lg:gap-4

  py-2
  lg:py-3
"
                  >

                    <div
                      className="
  h-9
  w-9

  sm:h-10
  sm:w-10

  lg:h-11
  lg:w-11

  shrink-0

  rounded-full

  bg-[#591E4A]/12

  flex
  items-center
  justify-center
"
                    >

                      <Icon
                        className="
    h-4
    w-4

    sm:h-[18px]
    sm:w-[18px]

    lg:h-5
    lg:w-5

    text-[#591E4A]
  "
                        strokeWidth={1.8}
                      />

                    </div>

                    <p
                      className={`
  ${theme.typography.body}

  text-[#3F3733]

  text-base
  sm:text-lg

  font-medium

  leading-7
`}
                    >
                      {highlight}
                    </p>

                  </div>

                );

              })}

            </div>

            {/* CTA */}

            <div className="mt-14">

              <p
                className={`
    ${theme.typography.body}

    text-[#5B5652]

    text-lg
    leading-9

    max-w-lg
  `}
              >
                Every treatment begins with a personalized consultation where we
                discuss your goals, evaluate your concerns, and build a treatment
                plan designed specifically for your body and lifestyle.
              </p>

              <div className="mt-10">

                <Button
                  href="/booking"
                  theme={theme}
                >
                  {about.buttonText}
                </Button>

              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}