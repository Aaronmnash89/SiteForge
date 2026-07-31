"use client";

import { Star } from "lucide-react";
import { TestimonialsData } from "@/types/site";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { ThemeConfig } from "@/configs/themes/types";
import TestimonialText from "@/components/ui/TestimonialText";

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

        {/* Header */}
        <Card
          theme={theme}
          className="mb-16 py-8 lg:py-10 text-center"
        >
          <SectionHeading
            eyebrow={testimonials.eyebrow}
            title={testimonials.title}
            theme={theme}
          />
        </Card>

        {/* Reviews */}
        <div className="grid gap-8 md:grid-cols-3 items-start">

          {testimonials.reviews.map((review, index) => (

            <Card
              key={`${review.name}-${index}`}
              theme={theme}
              className="
    self-start
    min-h-[420px]
    flex
    flex-col
  "
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

              <div className="mb-8">
                <TestimonialText text={review.quote} />
              </div>
                <div className="mt-auto">
              <h3
                className={`
                  ${theme.typography.heading}
                  ${theme.colors.text}
                  text-xl
                `}
              >
                {review.name}
              </h3>

              {review.case && (
                <p className={theme.colors.accent}>
                  {review.case}
                </p>
              )}
              </div>
            </Card>

          ))}

        </div>

      </Container>
    </section>
  );
}