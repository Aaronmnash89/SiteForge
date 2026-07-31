import { ContactCTAData, CompanyData } from "@/types/site";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ThemeConfig } from "@/configs/themes/types";

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
    <section id="contact" className="bg-[#261020] py-32">
      <Container className="max-w-5xl text-center">
        {/* Eyebrow */}

        <p
          className="
            uppercase
            tracking-[0.35em]
            text-sm

            text-[#D6A8C9]

            mb-6
          "
        >
          {contactCTA.eyebrow}
        </p>

        {/* Heading */}

        <h2
          className={`
            ${theme.typography.heading}

            text-[#F7F3EE]

            text-5xl
            lg:text-7xl

            leading-tight
          `}
        >
          {contactCTA.title}
        </h2>

        {/* Subtitle */}

        <p
          className={`
            ${theme.typography.body}

            mt-8

            max-w-3xl
            mx-auto

            text-lg
            leading-9

            text-[#DDD5D8]
          `}
        >
          {contactCTA.subtitle}
        </p>

        {/* Divider */}

        <div className="flex items-center justify-center gap-6 mt-12">
          <div className="w-20 h-px bg-[#A87897]" />

          <span
            className="
              uppercase
              tracking-[0.35em]
              text-xs

              text-[#A87897]
            "
          >
            Begin Your Healing Journey
          </span>

          <div className="w-20 h-px bg-[#A87897]" />
        </div>

        {/* Buttons */}

        <div className="mt-14 flex flex-col sm:flex-row justify-center gap-5">
          <Button
            href="https://eastwestacupuncture.acubliss.app"
            target="_blank"
            rel="noopener noreferrer"
            theme={theme}
          >
            {contactCTA.buttonText}
          </Button>

          <Link href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}>
            <Button variant="secondary" theme={theme}>
              {contactCTA.phoneButton}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
