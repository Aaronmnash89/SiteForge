"use client";

import Image from "next/image";
import { HeroData, CompanyData } from "@/types/site";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { ThemeConfig } from "@/configs/themes/types";

interface HeroProps {
  hero: HeroData;
  company: CompanyData;
  theme: ThemeConfig;
}

export default function Hero({ hero, company, theme }: HeroProps) {
  return (
    <section
      className="
    relative
    min-h-screen

    overflow-hidden

   pt-20
    sm:pt-24
    lg:pt-0
  "
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-herbs.jpg"
          alt="Traditional Chinese Medicine Herbs"
          fill
          priority
          className="
  object-cover

  object-[58%_center]
  sm:object-center
"
        />

        {/* Warm Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#261020]/25 via-[#261020]/45 to-[#182526]/65" />
      </div>

      <Container
        className="
    relative
    z-10
    flex
    items-center
    justify-center
    min-h-screen
    px-6
    pt-16
    pb-10
    sm:pt-20
    sm:pb-14
    lg:pt-24
    lg:pb-0"
      >
        <div
          className="
            w-full
            max-w-5xl
            text-center
          "
        >
          {/* Hero Logo */}
          <div className="mb-4 flex justify-center">
            <Image
              src="/images/whiteLogo.png"
              alt="East West Acupuncture & Herbs"
              width={350}
              height={350}
              priority
              className="
      mx-auto
      mt-2
      sm:mt-4
      lg:mt-2

      mb-2
      sm:mb-4
      lg:mb-4

      w-[160px]
      sm:w-[190px]
      lg:w-[230px]
      xl:w-[250px]

      h-auto

      drop-shadow-[0_12px_35px_rgba(0,0,0,.5)]
      drop-shadow-[0_0_22px_rgba(255,255,255,.18)]
    "
            />
          </div>
          {/* Eyebrow */}

          <p
            className="
              uppercase
              tracking-[0.4em]
              text-sm
              text-[#F2F2F2]/85
              mb-8
            "
          >
            {hero.eyebrow}
          </p>

          {/* Heading */}

          <h1
            className={`
              ${theme.typography.heading}

              text-[#F2F2F2]

              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-[7rem]

              leading-[0.92]

              drop-shadow-[0_10px_30px_rgba(0,0,0,.55)]
            `}
          >
            {hero.title}
          </h1>

          {/* Subtitle */}

          <p
            className={`
    ${theme.typography.body}

    mt-8
    sm:mt-10

    mx-auto
    max-w-3xl

    text-lg
    sm:text-xl

    leading-8
    sm:leading-9

    text-[#F2F2F2]/90
  `}
          >
            {hero.subtitle}
          </p>

          {/* Decorative Divider */}

          <div
            className="
    mx-auto

    mt-10
    sm:mt-12

    h-px

    w-24
    sm:w-36

    bg-gradient-to-r
    from-transparent
    via-[#F2F2F2]/70
    to-transparent
  "
          />

          {/* CTA Area */}

          <div className="mt-10 sm:mt-12 pb-12 sm:pb-16">
            <div
              className="
      inline-flex
      w-full
      sm:w-auto
      flex-col
      sm:flex-row
      gap-4
      sm:gap-5
      rounded-[26px]
      bg-[#261020]/45
      backdrop-blur-md
      border
      border-white/10
      px-5
      py-5
      shadow-[0_18px_45px_rgba(0,0,0,.28)]
    "
            >
              <Button href="/booking" theme={theme}>
                {hero.buttonText}
              </Button>

              <Button
                href={company.phoneHref}
                variant="secondary"
                theme={theme}
              >
                {hero.callButton}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
