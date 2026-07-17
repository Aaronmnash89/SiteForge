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
      <Container className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Content */}
        <div>
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.title}
            subtitle={about.description}
            centered={false}
            theme={theme}
          />

          <div className="mt-10 space-y-4">
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

          <div className="mt-6">
            <Button
              href="/booking"
              theme={theme}
            >
              {about.buttonText}
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={about.image}
            alt={about.title}
            width={600}
            height={700}
            className="
      h-full
      w-full
      object-cover
      rounded-2xl
    "
          />


        </div>

      </Container>
    </section>
  );
}

