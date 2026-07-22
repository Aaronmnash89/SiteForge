"use client";

import Image from "next/image";
import { AboutData } from "@/types/site";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { ThemeConfig } from "@/configs/themes/types";

interface AboutProps {
  about: AboutData;
  theme: ThemeConfig;
}

export default function About({
  about,
  theme,
}: AboutProps) {
  return (
    <section
      id="about"
      className={`${theme.colors.primary} ${theme.layout.sectionSpacing}`}
    >
      <Container className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Column */}
          <div className="flex flex-col">

            {/* Heading */}
            <SectionHeading
              eyebrow={about.eyebrow}
              title={about.title}
              subtitle={about.description}
              centered={false}
              theme={theme}
            />

            {/* Image (Mobile Only) */}
            <div className="relative mb-10 overflow-hidden rounded-2xl lg:hidden">
              <Image
                src={about.image}
                alt={about.title}
                width={600}
                height={700}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {about.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-3"
                >
                  <div
                    className={`h-2 w-2 rounded-full ${theme.colors.secondary}`}
                  />

                  <span className={theme.colors.text}>
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="mt-6">
              <Button
                href="/booking"
                theme={theme}
              >
                {about.buttonText}
              </Button>
            </div>
          </div>

          {/* Image (Desktop Only) */}
          <div className="relative hidden overflow-hidden rounded-2xl lg:block">
            <Image
              src={about.image}
              alt={about.title}
              width={600}
              height={700}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}