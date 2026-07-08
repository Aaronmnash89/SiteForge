import { ThemeConfig } from "./types";

export const lawTheme: ThemeConfig = {
    colors: {
        primary: "bg-neutral-950",      // almost black
        secondary: "bg-amber-600",      // gold
        accent: "text-amber-500",
        underline: "bg-blue-600",
        background: "bg-white",
        surface: "bg-zinc-100",

        text: "text-zinc-900",
        textLight: "text-zinc-600",

        border: "border-zinc-300",
    },

    about: {},

    navigation: {
        background: "bg-amber-50/80 backdrop-blur-md",
        backgroundScrolled: "bg-[#381f28] backdrop-blur-md",

        text: "text-stone-800",
        textScrolled: "text-white",

        textHover: "hover:text-amber-700",
        textHoverScrolled: "hover:text-amber-300",

        activeText: "text-amber-700",
        activeTextScrolled: "text-amber-300",

        underline: "bg-amber-700",

        logo: "text-stone-900",
        logoScrolled: "text-white",
    },

    typography: {
        heading: "font-serif",
        body: "font-sans",
    },

    button: {
        rounded: "rounded-xl",
        padding: "px-8 py-4",
        shadow: "shadow-xl",
        primaryColor: "bg-blue-600 text-white",
        primaryHover:
            "hover:bg-white hover:text-black hover:-translate-y-1",

        secondaryHover:
            "hover:bg-white hover:text-black hover:-translate-y-1",
        transition: "transition-all duration-300",
    },

    cards: {
        rounded: "rounded-2xl",
        shadow: "shadow-lg",
        hoverBorder: "hover:border-blue-500",
    },

    layout: {
        sectionSpacing: "py-28",
        containerWidth: "max-w-7xl",
    },
};