import { FooterData, CompanyData } from "@/types/site";
import Button from "../ui/Button";
import { ThemeConfig } from "@/configs/themes/types";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  footer: FooterData;
  company: CompanyData;
  theme: ThemeConfig;
}

export default function Footer({ footer, company, theme }: FooterProps) {
  return (
    <footer className="bg-[#182526] text-[#F7F3EE]">
  <div className="mx-auto max-w-7xl px-6 py-24">

    <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr]">

      {/* COMPANY */}
    
      <div>
        <h4
          className={`
            ${theme.typography.heading}
            text-2xl
            text-[#F7F3EE]
          `}
        >
          Contact Info
        </h4>
        <div className="mt-8 space-y-3 text-[#C9BEC4]">
          <p>{company.phone}</p>

          {company.email && <p>{company.email}</p>}

          <p className="whitespace-pre-line">
            {footer.address}
          </p>
        </div>
      </div>

      {/* QUICK LINKS */}

<div>
  <h4
    className={`
      ${theme.typography.heading}
      text-2xl
      text-[#F7F3EE]
    `}
  >
    Quick Links
  </h4>

  <ul className="mt-8 space-y-4">
    {footer.quickLinks.map((link) => {
      const isExternal =
        link.href.startsWith("http://") ||
        link.href.startsWith("https://");

      return (
        <li key={link.label}>
          {isExternal ? (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-[#D7DED9]
                transition-all
                duration-300
                hover:text-[#D6A8C9]
                hover:pl-2
              "
            >
              {link.label}
            </a>
          ) : (
            <Link
              href={link.href}
              className="
                text-[#D7DED9]
                transition-all
                duration-300
                hover:text-[#D6A8C9]
                hover:pl-2
              "
            >
              {link.label}
            </Link>
          )}
        </li>
      );
    })}
  </ul>
</div>

      {/* CTA */}

      <div>
        <h4
          className={`
            ${theme.typography.heading}
            text-2xl
            text-[#F7F3EE]
          `}
        >
          Ready to Feel Better?
        </h4>

        <p className="mt-6 max-w-sm leading-8 text-[#D7DED9]">
          Schedule your consultation today and begin your path toward improved
          health.
        </p>

        <div className="mt-10">
          <Button href="/booking" theme={theme}>
            Schedule Appointment
          </Button>
        </div>
      </div>

    </div>

    {/* FOOTER LOGO */}

    <div className="mt-20 flex justify-center">
      <Image
        src="/images/white_logo_text.png"
        alt={company.name}
        width={180}
        height={180}
        className="
          h-auto

          w-[130px]
          sm:w-[145px]
          lg:w-[165px]

          opacity-95

          drop-shadow-[0_10px_25px_rgba(0,0,0,.35)]
        "
      />
    </div>

  </div>

  {/* BOTTOM BAR */}

  <div className="border-t border-[#3B4C4A]">
    <div className="mx-auto max-w-7xl px-6 py-8">
      <p className="text-center text-sm tracking-wide text-[#AEBDB6]">
        {footer.copyright}
      </p>
    </div>
  </div>
</footer>
  );
}
