import { ContactCTAData } from "@/types/site";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { lawTheme } from "@/configs/themes/law";

interface ContactCTAProps {
  contactCTA: ContactCTAData;
}

export default function ContactCTA({
  contactCTA,
}: ContactCTAProps) {
  return (
    <section
      id="contact"
      className={`${lawTheme.colors.primary} ${lawTheme.layout.sectionSpacing}`}
    >
      <Container className="mx-auto max-w-5xl px-6 text-center">

        <SectionHeading
          eyebrow={contactCTA.eyebrow}
          title={contactCTA.title}
          subtitle={contactCTA.subtitle}
        />

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <button className="w-64 rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:-translate-y-1 hover:shadow-xl">
            {contactCTA.buttonText}
          </button>

          <button className="w-64 rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-white hover:text-black">
            {contactCTA.phoneButton}
          </button>
        </div>

      </Container>
    </section>
  );
}