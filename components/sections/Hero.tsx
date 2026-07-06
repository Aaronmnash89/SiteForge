"use client";
import { HeroData, ThemeName } from "@/types/site";
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
      className={`${theme.colors.primary} ${theme.layout.sectionSpacing}`} >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" />

      {/* Hero Container */}
      <Container className="relative z-10 w-full max-w-5xl px-6">
        <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-b from-blue-950/20 to-black px-16 py-20 shadow-2xl">

          {/* Eyebrow */}
          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            {hero.eyebrow}
          </p>

          {/* Accent Line */}
          <div className="mx-auto mt-3 mb-8 h-1 w-24 rounded-full bg-blue-500" />

          {/* Heading */}
          <h1 className="mx-auto max-w-4xl text-center text-6xl font-extrabold leading-none text-white md:text-7xl">
            {hero.title}
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-8 max-w-2xl text-center text-xl leading-relaxed text-gray-400">
            {hero.subtitle}
          </p>

          {/* Call To Action Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Button
              theme={theme}
              className="w-60"
            >
              {hero.buttonText}
            </Button>

            <Button
              theme={theme}
              variant="secondary"
              className="w-60"
            >
              {hero.callButton}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}