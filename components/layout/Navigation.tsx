"use client";

import Link from "next/link";
import { CompanyData, NavigationData } from "@/types/site";
import { useEffect, useState } from "react";
import { ThemeConfig } from "@/configs/themes/types";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavigationProps {
  company: CompanyData;
  navigation: NavigationData;
  theme: ThemeConfig;
}

export default function Navigation({
  company,
  navigation,
  theme,
}: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoColor = theme.navigation.logoScrolled;
  const navText = theme.navigation.textScrolled;
  const navHover = theme.navigation.textHoverScrolled;
  const navActive = theme.navigation.activeTextScrolled;

  return (
    <>
      <nav
        className={`
  fixed
  inset-x-0
  top-0
  z-50

  transition-all
  duration-300

  ${theme.navigation.backgroundScrolled}

  ${scrolled ? "shadow-lg" : ""}
`}
      >
        <div
          className={`
    mx-auto
    flex
    max-w-[1700px]
    items-center
    justify-between

    px-6
    md:px-10
    xl:px-20

    transition-all
    duration-300

    ${scrolled ? "h-16" : "h-20"}
  `}
        >
          {/* Logo */}
          <div className="h-16 flex items-center">
            <Link
              href="/"
              className={`
  flex items-center
  -ml-4
  md:-ml-6
  xl:-ml-8

  transition-opacity duration-500

  ${scrolled ? "opacity-100" : "opacity-0 pointer-events-none"}
`}
            >
              <Image
                src="/images/white_text_only.png"
                alt={company.name}
                width={300}
                height={300}
                priority
                draggable={false}
                className="
  h-13
  lg:h-15
  w-auto
  object-contain
  [transform:translateZ(0)]
"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul
            className={`
    hidden
    md:flex
    items-center

    transition-all
    duration-300

    ${scrolled ? "gap-8 text-[15px]" : "gap-10 text-base"}
  `}
          >
            {navigation.links.map((link) => {
              const isActive =
                pathname === link.href ||
                (pathname === "/" && link.href === "/");

              return (
                <li key={link.label} className="relative">
                  <Link
                    href={link.href}
                    className={`
    relative
    py-2

    transition-all
    duration-300

    ${isActive ? navActive : `${navText} ${navHover}`}
  `}
                  >
                    {link.label}
                  </Link>

                  <span
                    className={`
    absolute
    left-0
    -bottom-1

    h-[2px]

    rounded-full

    ${theme.navigation.underline}

    transition-all
    duration-300

    ${isActive ? "w-full" : "w-0"}
  `}
                  />
                </li>
              );
            })}
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`
    md:hidden

    flex
    items-center
    justify-center

    h-10
    w-10

    rounded-full

    transition-all

    ${navText}
  `}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`
    md:hidden

    fixed
    left-0
    right-0
    top-16

    z-40

    overflow-hidden

    transition-all
    duration-300

    ${
      mobileMenuOpen
        ? "max-h-[500px] opacity-100"
        : "max-h-0 opacity-0 pointer-events-none"
    }

    ${theme.navigation.backgroundScrolled}

    shadow-xl
  `}
        >
          <ul className="px-8 py-6">
            {navigation.links.map((link) => (
              <li
                key={link.label}
                className="border-b border-white/10 last:border-none"
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
  block
  py-5
  text-lg
  transition-colors

  ${
    pathname === link.href
      ? theme.navigation.activeTextScrolled
      : `${theme.navigation.textScrolled} ${theme.navigation.textHoverScrolled}`
  }
`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
