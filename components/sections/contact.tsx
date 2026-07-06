import { ContactCTAData } from "@/types/site";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ThemeConfig } from "@/configs/themes/types";
import Button from "../ui/Button";
import { theme } from "@/configs/lib/theme";

interface ContactCTAProps {
  contactCTA: ContactCTAData;
  theme: ThemeConfig;
}

export default function ContactCTA({
  contactCTA,
  theme
}: ContactCTAProps) {
  return (
    <section
      id="contact"
      className={`${theme.colors.primary} ${theme.layout.sectionSpacing}`}
    >
      <Container className="mx-auto max-w-5xl px-6 text-center">

        <SectionHeading
          eyebrow={contactCTA.eyebrow}
          title={contactCTA.title}
          subtitle={contactCTA.subtitle}
        />

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <Button theme={theme}>
            {contactCTA.buttonText}
          </Button>

          <Button
            variant="secondary"
            theme={theme}
            className="w-60"
          >
            {contactCTA.phoneButton}
          </Button>
        </div>

      </Container>
    </section>
  );
}