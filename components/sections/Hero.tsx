"use client";

import { HeroData } from "@/types/site";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { ThemeConfig } from "@/configs/themes/types";

interface HeroProps {
  hero: HeroData;
  theme: ThemeConfig;
}

export default function Hero({
  hero,
  theme,
}: HeroProps) {
  return (
    <section
      id="home"
      className={`${theme.colors.primary} py-16 md:py-28`}
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-black/10
          to-transparent
          pointer-events-none
        "
      />

      {/* Hero Container */}
      <Container className="relative z-10 w-full max-w-5xl px-4 sm:px-6">
        <div
          className={`
            relative
            mx-auto
            max-w-5xl
            ${theme.cards.rounded}
            ${theme.cards.shadow}
            ${theme.colors.surface}
            border
            ${theme.colors.border}

            px-6
            py-10

            sm:px-10
            sm:py-14

            lg:px-16
            lg:py-20
          `}
        >
          {/* Eyebrow */}
          <p
            className={`
              text-center
              text-xs
              sm:text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              ${theme.colors.accent}
            `}
          >
            {hero.eyebrow}
          </p>

          {/* Accent Line */}
          <div
            className={`
              mx-auto
              mt-3
              h-1
              w-20
              sm:w-24
              rounded-full
              ${theme.colors.underline}
            `}
          />

          {/* Heading */}
          <h1
            className={`
              mx-auto
              max-w-4xl
              text-center

              text-4xl
              sm:text-5xl
              lg:text-7xl

              leading-tight
              mt-6

              ${theme.typography.heading}
              ${theme.colors.text}
            `}
          >
            {hero.title}
          </h1>

          {/* Subtitle */}
          <p
            className={`
              mx-auto
              mt-6
              max-w-2xl
              text-center

              text-base
              sm:text-lg
              lg:text-xl

              leading-relaxed

              ${theme.colors.textLight}
            `}
          >
            {hero.subtitle}
          </p>

          {/* CTA */}
          <div
            className="
              mt-10
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-4
              sm:gap-6
            "
          >
            <div className="w-full sm:w-auto">
              <Button
                href="/booking"
                theme={theme}
                className="w-full"
              >
                {hero.buttonText}
              </Button>
            </div>

            <div className="w-full sm:w-auto">
              <Button
                theme={theme}
                variant="secondary"
                className="w-full"
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