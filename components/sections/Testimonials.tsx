import { Star } from "lucide-react";
import { TestimonialsData } from "@/types/site";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

interface TestimonialsProps {
  testimonials: TestimonialsData;
}

export default function Testimonials({
  testimonials,
}: TestimonialsProps) {
  return (
    <section className="bg-gradient-to-b from-[#0B1120] to-black py-32" id="testimonials">
      <Container className="mx-auto max-w-7xl px-6">

        <Card className="mb-16 text-center">
          <SectionHeading
            eyebrow={testimonials.eyebrow}
            title={testimonials.title}
          />
        </Card>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.reviews.map((review) => (
            <Card
              key={review.name}
              className="rounded-3xl border border-white/10 bg-black p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50"
            >
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-blue-500 text-blue-500"
                  />
                ))}
              </div>

              <p className="mb-8 text-gray-400 leading-8">
                "{review.quote}"
              </p>

              <div>
                <h3 className="text-xl font-bold">
                  {review.name}
                </h3>

                <p className="text-blue-500">
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