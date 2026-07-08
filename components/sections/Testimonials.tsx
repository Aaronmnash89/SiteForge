"use client";

import { Star } from "lucide-react";
import { TestimonialsData } from "@/types/site";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { ThemeConfig } from "@/configs/themes/types";

interface TestimonialsProps {
  testimonials: TestimonialsData;
  theme: ThemeConfig;
}

export default function Testimonials({
  testimonials,
  theme,
}: TestimonialsProps) {
  return (
    <section
      id="testimonials"
      className={`${theme.colors.primary} ${theme.layout.sectionSpacing}`}
    >
      <Container className="mx-auto max-w-7xl px-6">

        <Card
          theme={theme}
          className="mb-16 text-center"
        >
          <SectionHeading
            eyebrow={testimonials.eyebrow}
            title={testimonials.title}
            theme={theme}
          />
        </Card>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.reviews.map((review, index) => (
            <Card
              key={`${review.name}-${index}`}
              theme={theme}
            >
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`fill-current ${theme.colors.accent}`}
                  />
                ))}
              </div>

              <p
                className={`mb-8 leading-8 ${theme.colors.textLight}`}
              >
                "{review.quote}"
              </p>

              <div>
                <h3
                  className={`${theme.typography.heading} ${theme.colors.text} text-xl`}
                >
                  {review.name}
                </h3>

                <p className={theme.colors.accent}>
                  {review.case}
                </p>
              </div>
            </Card>
          ))}
        </div>

      </Container>
    </section>
  );
}