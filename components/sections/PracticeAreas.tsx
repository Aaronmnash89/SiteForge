"use client";
import Link from "next/link";
import {
  ArrowRight,
  Car,
  Truck,
  PersonStanding,
  HeartPulse,
  Scale,
  Sparkles,
  ShieldPlus,
  Smile,
  BadgePlus,
} from "lucide-react";

import { PracticeAreasData } from "@/types/site";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { ThemeConfig } from "@/configs/themes/types";

interface PracticeAreasProps {
  practiceAreas: PracticeAreasData;
  theme: ThemeConfig;
}

const icons = {
  ArrowRight,
  Car,
  Truck,
  PersonStanding,
  HeartPulse,
  Scale,
  Sparkles,
  ShieldPlus,
  Smile,
  BadgePlus,
};

export default function PracticeAreas({
  practiceAreas,
  theme,
}: PracticeAreasProps) {
  return (
    <section
      id="practiceAreas"
      className={`${theme.colors.primary} ${theme.layout.sectionSpacing}`} >
      <Container className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow={practiceAreas.eyebrow}
          title={practiceAreas.title}
          subtitle={practiceAreas.subtitle}
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {practiceAreas.items.map((item) => {
            const Icon =
              icons[item.icon as keyof typeof icons];

            return (
              <Card
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-black p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >
                <div className="mb-8 inline-flex rounded-2xl bg-blue-600/10 p-4 text-blue-500 transition group-hover:scale-110 group-hover:bg-blue-600/20">
                  <Icon size={34} />
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-500 transition group-hover:gap-4"
                >
                  Learn More

                  <ArrowRight size={18} />
                </Link>
              </Card>
            );
          })}

        </div>

      </Container>
    </section>
  );
}

