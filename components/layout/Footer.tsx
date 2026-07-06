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
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-4">

        {/* Company */}
        <div>
          <h3 className="text-2xl font-bold">
            {company.logoText}
          </h3>

          <p className="mt-4 text-gray-400">
            {footer.tagline}
          </p>

          <div className="mt-6 space-y-2 text-gray-300">
            <p>{company.phone}</p>
            <p>{company.email}</p>
            <p>{footer.address}</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white">
            Quick Links
          </h4>

          <ul className="mt-4 space-y-3">
            {footer.quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-400 transition hover:text-blue-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Practice Areas */}
        <div>
          <h4 className="font-semibold text-white">
            Practice Areas
          </h4>

          <ul className="mt-4 space-y-3 text-gray-400">
            {footer.practiceAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4 className="font-semibold text-white">
            Free Consultation
          </h4>

          <p className="mt-4 text-gray-400">
            Available 24/7 to discuss your case.
          </p>

          <Button
            theme={theme}
            className="mt-6 w-45 px-6 py-3"
          >
            Contact Us
          </Button>
        </div>

      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        {footer.copyright}
      </div>
    </footer>
  );
}