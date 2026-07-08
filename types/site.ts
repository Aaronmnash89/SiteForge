export interface CompanyData {
  name: string;
  logoText: string;
  phone: string;
  email: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface NavigationData {
  links: NavigationLink[];
}

export interface HeroData {
  eyebrow: string;
  title: string;
  subtitle: string;
  buttonText: string;
  callButton: string;
}

export interface TrustItem {
  value: string;
  label: string;
}

export interface TrustData {
  items: TrustItem[];
}

export interface WhyChooseUsFeature {
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  eyebrow: string;
  title: string;
  subtitle: string;
  features: WhyChooseUsFeature[];
}

export interface AboutData {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  highlights: string[];
}

export interface Testimonial {
  name: string;
  case: string;
  quote: string;
}

export interface TestimonialsData {
  eyebrow: string;
  title: string;
  reviews: Testimonial[];
}

export interface PracticeArea {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface PracticeAreasData {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: PracticeArea[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQData {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: FAQItem[];
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface ServicesData {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: Service[];
}

export interface ContactCTAData {
  eyebrow: string;
  title: string;
  subtitle: string;
  buttonText: string;
  phoneButton: string;
}

export interface FooterData {
  tagline: string;
  address: string;
  copyright: string;
  quickLinks: NavigationLink[];
  practiceAreas: string[];
}

export interface PageSection {
  type: string;
  enabled: boolean;
}

export interface SitePage {
  sections: PageSection[];
}

export type ThemeName =
  | "law"
  | "dental"
  | "automotive"
  | "roofing"
  | "acupuncture";

export interface SiteConfig {
  page: SitePage;

  company: CompanyData;
  navigation: NavigationData;

  hero: HeroData;
  trust: TrustData;
  whyChooseUs: WhyChooseUsData;
  about: AboutData;
  testimonials: TestimonialsData;
  practiceAreas: PracticeAreasData;

  services?: ServicesData;
  faq?: FAQData;

  contact: ContactCTAData;
  footer: FooterData;

   theme:ThemeName;
}

export interface LawThemeConfig {
  colors: {};
  typography: {};
}
