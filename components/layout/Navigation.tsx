"use client";

import { CompanyData, NavigationData } from "@/types/site";
import { useEffect, useState } from "react";

interface NavigationProps {
    company: CompanyData;
    navigation: NavigationData;
}

export default function Navigation({
    company,
    navigation,
}: NavigationProps) {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        console.log("Sections found:", sections);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.6,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/10 transition-all duration-300 ${scrolled
                ? "bg-black/95 backdrop-blur-md py-4 px-8 shadow-lg"
                : "bg-black/80 backdrop-blur-md py-6 px-8"
                }`}
        >
            <h1
                className={`font-bold transition-all duration-300 ${scrolled ? "text-xl" : "text-2xl"
                    }`}
            >
                {company.logoText}
            </h1>

            <ul
                className={`flex transition-all duration-300 ${scrolled ? "gap-6 text-sm" : "gap-8 text-base"
                    }`}
            >
                {navigation.links.map((link) => (
                    <li key={link.label} className="relative">
                        <a
                            href={link.href}
                            className={`transition-colors duration-300 ${activeSection === link.href.replace("#", "")
                                ? "text-blue-500"
                                : "text-white hover:text-blue-500"
                                }`}
                        >
                            {link.label}
                        </a>

                        <span
                            className={`absolute -bottom-2 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${activeSection === link.href.replace("#", "")
                                ? "w-full"
                                : "w-0"
                                }`}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
}