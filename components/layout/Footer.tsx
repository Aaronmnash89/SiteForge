import { FooterData, CompanyData } from "@/types/site";
import Button from "../ui/Button";
import { ThemeConfig } from "@/configs/themes/types";

interface FooterProps {
  footer: FooterData;
  company: CompanyData;
  theme: ThemeConfig;
}

export default function Footer({
  footer,
  company,
  theme,
}: FooterProps) {
  return (
    <footer
      className={`${theme.colors.background} border-t ${theme.colors.border}`}
    >
      <div
        className={`mx-auto grid ${theme.layout.containerWidth} gap-16 px-6 py-20 md:grid-cols-4`}
      >
        {/* Company */}
        <div>
          <h3
            className={`${theme.colors.text} ${theme.typography.heading} text-2xl`}
          >
            {company.logoText}
          </h3>

          <p className={`mt-4 ${theme.colors.textLight}`}>
            {footer.tagline}
          </p>

          <div className={`mt-6 space-y-2 ${theme.colors.textLight}`}>
            <p>{company.phone}</p>
            <p>{company.email}</p>
            <p>{footer.address}</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className={`${theme.colors.text} ${theme.typography.heading}`}
          >
            Quick Links
          </h4>

          <ul className="mt-4 space-y-3">
            {footer.quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`${theme.colors.textLight} transition hover:${theme.colors.accent.replace(
                    "text-",
                    "text-"
                  )}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4
            className={`${theme.colors.text} ${theme.typography.heading}`}
          >
            Services
          </h4>

          <ul className={`mt-4 space-y-3 ${theme.colors.textLight}`}>
            {footer.practiceAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4
            className={`${theme.colors.text} ${theme.typography.heading}`}
          >
            Schedule Today
          </h4>

          <p className={`mt-4 ${theme.colors.textLight}`}>
           
          </p>

          <Button
            theme={theme}
            className="mt-6 w-45 px-6 py-3"
          >
            Contact Us
          </Button>
        </div>
      </div>

      <div
        className={`border-t ${theme.colors.border} py-6 text-center text-sm ${theme.colors.textLight}`}
      >
        {footer.copyright}
      </div>
    </footer>
  );
}