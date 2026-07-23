"use client";

import Link from "next/link";
import { CompanyData, NavigationData } from "@/types/site";
import { useEffect, useState } from "react";
import { ThemeConfig } from "@/configs/themes/types";
import Image from "next/image";
import { Menu, X } from "lucide-react";

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
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const logoColor = scrolled
    ? theme.navigation.logoScrolled
    : theme.navigation.logo;

  const navText = scrolled
    ? theme.navigation.textScrolled
    : theme.navigation.text;

  const navHover = scrolled
    ? theme.navigation.textHoverScrolled
    : theme.navigation.textHover;

  const navActive = scrolled
    ? theme.navigation.activeTextScrolled
    : theme.navigation.activeText;

  return (
    <>
      <nav
        className={`
    fixed
    top-0
    left-0
    right-0
    z-50

    pt-[env(safe-area-inset-top)]
    h-[calc(6rem+env(safe-area-inset-top))]

    transition-all
    duration-300

    ${scrolled
            ? `${theme.navigation.backgroundScrolled} shadow-lg`
            : theme.navigation.background
          }
  `}
      >
        <div className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between px-5 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {company.logoDark ? (
              <div
                className={`
        relative
        origin-left
        transition-all duration-300
        overflow-hidden
        ${scrolled
                    ? "w-[220px] sm:w-[250px] md:w-[280px] h-20 opacity-100"
                    : "w-[220px] sm:w-[250px] md:w-[280px] h-20 opacity-0 pointer-events-none"
                  }
      `}
              >
                <Image
                  src={company.logoDark}
                  alt={company.name}
                  fill
                  priority
                  sizes="(max-width:768px) 220px, 280px"
                  className="object-contain object-left"
                />
              </div>
            ) : (
              <h1
                className={`
        ${logoColor}
        font-bold
        transition-all duration-300
        ${scrolled ? "opacity-100" : "opacity-0"}
      `}
              >
                {company.name}
              </h1>
            )}
          </Link>

          {/* Desktop Navigation */}
          <ul
            className={`
            hidden md:flex
            transition-all duration-300
            ${scrolled ? "gap-6 text-sm" : "gap-8 text-base"}
          `}
          >
            {navigation.links.map((link) => {
              const isActive =
                activeSection === link.href.replace("#", "") ||
                (link.href === "/" && activeSection === "home");

              return (
                <li
                  key={link.label}
                  className="relative"
                >
                  <Link
                    href={link.href}
                    className={`
                    transition-colors duration-300
                    ${isActive ? navActive : `${navText} ${navHover}`}
                  `}
                  >
                    {link.label}
                  </Link>

                  <span
                    className={`
                    absolute
                    -bottom-2
                    left-0
                    h-0.5
                    ${theme.navigation.underline}
                    transition-all duration-300
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
            h-11
            w-11
            items-center
            justify-center
            ${navText}
            `}
          >
            {mobileMenuOpen ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`
            md:hidden
            fixed
            top-24
            left-0
            right-0
            z-40
            ${theme.navigation.backgroundScrolled}
            shadow-xl
          `}
        >
          <ul className="flex flex-col gap-6 p-6">
            {navigation.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    block
                    text-lg
                    ${theme.navigation.textScrolled}
                    ${theme.navigation.textHoverScrolled}
                    transition-colors
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