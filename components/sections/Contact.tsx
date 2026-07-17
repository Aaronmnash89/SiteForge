import { ContactCTAData, CompanyData } from "@/types/site";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ThemeConfig } from "@/configs/themes/types";
import Button from "../ui/Button";
import Link from "next/link";

interface ContactCTAProps {
  contactCTA: ContactCTAData;
  company: CompanyData;
  theme: ThemeConfig;
}

export default function ContactCTA({
  contactCTA,
  company,
  theme,
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
          theme={theme}
        />

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <Button
            href="/booking"
            theme={theme}
          >
            {contactCTA.buttonText}
          </Button>

          <Link href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}>
            <Button
              variant="secondary"
              theme={theme}
            >
              {contactCTA.phoneButton}
            </Button>
          </Link>
        </div>

      </Container>
    </section>
  );
}