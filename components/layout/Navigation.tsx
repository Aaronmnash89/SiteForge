"use client";
import Link from "next/link";
import { CompanyData, NavigationData } from "@/types/site";
import { useEffect, useState } from "react";
import { ThemeConfig } from "@/configs/themes/types";
import Image from "next/image";

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

  // Navigation colors based on scroll state
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
    <nav
      className={`
    fixed top-0 left-0 right-0 z-50
    h-20
    flex items-center justify-between
    px-8
    transition-all duration-300
    ${scrolled
          ? `${theme.navigation.backgroundScrolled} shadow-lg`
          : theme.navigation.background
        }
  `}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        {company.logo ? (
          <Image
            src={company.logo}
            alt={company.name}
            width={220}
            height={80}
            priority
            className={`
    w-auto
    transition-all duration-300
    ${scrolled ? "h-12" : "h-14"}
  `}
          />
        ) : (
          <h1
            className={`
        ${logoColor}
        font-bold
        transition-all duration-300
        ${scrolled ? "text-xl" : "text-2xl"}
      `}
          >
            {company.name}
          </h1>
        )}
      </Link>

      {/* Navigation */}
      <ul
        className={`
          flex
          transition-all duration-300
          ${scrolled ? "gap-6 text-sm" : "gap-8 text-base"}
        `}
      >
        {navigation.links.map((link) => {
          const isActive =
            activeSection === link.href.replace("#", "");

          return (
            <li key={link.label} className="relative">
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
                  absolute -bottom-2 left-0
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
    </nav>
  );
}