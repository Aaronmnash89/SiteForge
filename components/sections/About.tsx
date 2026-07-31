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
      className="bg-[#F7F3EE] pt-36 pb-20 lg:pb-32 overflow-hidden"
    >
      <Container className="max-w-7xl">

        <div className="max-w-4xl mx-auto">



          {/* CONTENT */}

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

    text-center
    lg:text-left
  `}
            >
              {about.title}
            </h2>

            {/* Biography */}

            <div className="mt-10">

              {/* Desktop */}
              <div className="hidden lg:grid lg:grid-cols-2 lg:gap-20 xl:gap-24">

                <div
                  className={`
  ${theme.typography.body}

  mt-8

  max-w-xl
  mx-auto
  lg:mx-0

  whitespace-pre-line

  text-[#4C4542]

  text-lg
  leading-9

  text-center
  lg:text-left
`}
                >
                  {about.description
                    .split("\n\n")
                    .slice(0, 3)
                    .join("\n\n")}
                </div>

                <div
  className={`
    ${theme.typography.body}

    mt-8

    text-[#4C4542]
    text-lg
    leading-9
    whitespace-pre-line
  `}
>
                  {about.description
                    .split("\n\n")
                    .slice(3)
                    .join("\n\n")}
                </div>

              </div>

              {/* Mobile + Tablet */}
              <div
                className={`
      lg:hidden
      ${theme.typography.body}
      text-[#4C4542]
      text-lg
      leading-9
      whitespace-pre-line
      max-w-xl
    `}
              >
                {about.description}
              </div>

            </div>
            {/* 
        IMAGE
     */}

            <div
              className="
    relative

    mt-12
    lg:mt-14

    w-full
    mx-auto
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

          </div>

        </div>

      </Container>
    </section>
  );
}