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

    ${scrolled
              ? "h-16"
              : "h-20"
            }
  `}
        >
          {/* Logo */}
          <Link
            href="/"
            className="
    flex
    items-center
    shrink-0
  "
          >
            {company.logoDark ? (
              <div
                className={`
        relative
        overflow-hidden
        origin-left
        transition-all
        duration-500

        ${scrolled
                    ? "w-[180px] sm:w-[210px] md:w-[235px] h-14 opacity-100"
                    : "w-[200px] sm:w-[230px] md:w-[260px] h-16 opacity-100"
                  }
      `}
              >
                <Image
                  src={company.logoDark}
                  alt={company.name}
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            ) : (
              <h1
                className={`
        ${logoColor}
        font-bold
        transition-all
        duration-300
      `}
              >
                {company.name}
              </h1>
            )}
          </Link>

          {/* Desktop Navigation */}
          <ul
            className={`
    hidden
    md:flex
    items-center

    transition-all
    duration-300

    ${scrolled
                ? "gap-8 text-[15px]"
                : "gap-10 text-base"
              }
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
    relative
    py-2

    transition-all
    duration-300

    ${isActive
                        ? navActive
                        : `${navText} ${navHover}`
                      }
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

    ${isActive
                        ? "w-full"
                        : "w-0"
                      }
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
            {mobileMenuOpen ? (
              <X size={26} />
            ) : (
              <Menu size={26} />
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
    left-0
    right-0
    top-16

    z-40

    overflow-hidden

    transition-all
    duration-300

    ${mobileMenuOpen
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

            ${theme.navigation.textScrolled}

            transition-colors

            ${theme.navigation.textHoverScrolled}
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