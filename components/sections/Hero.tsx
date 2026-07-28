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

export default function Hero({
  hero,
  company,
  theme,
}: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-herbs.jpg"
          alt="Traditional Chinese Medicine Herbs"
          fill
          priority
          className="object-cover"
        />

        {/* Warm Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#261020]/25 via-[#261020]/45 to-[#182526]/65" />
      </div>

      <Container
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          justify-center
          px-6
        "
      >
        <div
          className="
            w-full
            max-w-5xl
            text-center
          "
        >
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

              mt-10
              mx-auto
              max-w-3xl

              text-xl
              leading-9

              text-[#F2F2F2]/90
            `}
          >
            {hero.subtitle}
          </p>

          {/* Decorative Divider */}

          <div
            className="
              mx-auto
              mt-12
              h-px
              w-36

              bg-gradient-to-r
              from-transparent
              via-[#F2F2F2]/70
              to-transparent
            "
          />

          {/* CTA Area */}

          <div
            className="
              mt-12

              inline-flex

              flex-col
              sm:flex-row

              gap-5

              rounded-full

              bg-[#261020]/45

              backdrop-blur-sm

              border
              border-white/10

              px-8
              py-6

              shadow-[0_15px_45px_rgba(0,0,0,.25)]
            "
          >
            <Button
              href="/booking"
              theme={theme}
            >
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
      </Container>
    </section>
  );
}