import Image from "next/image";
import { AboutData } from "@/types/site";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { lawTheme } from "@/configs/themes/law";


interface AboutProps {
  about: AboutData;
}

export default function About({ about }: AboutProps) {
  return (
    <section
      id="about"
      className={`${lawTheme.colors.primary} ${lawTheme.layout.sectionSpacing}`}
    >
      <Container className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Content */}
        <div>
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.title}
            centered={false}
          />

          <div className="mt-10 space-y-4">
            {about.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-3"
              >
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700">
            {about.buttonText}
          </button>
        </div>

        {/* Right Image */}
        <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          <Image
            src={about.image}
            alt={about.title}
            width={600}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>

      </Container>
    </section>
  );
}