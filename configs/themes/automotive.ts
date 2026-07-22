import { ThemeConfig } from "./types";

export const automotiveTheme: ThemeConfig = {
    colors: {
        primary: "bg-slate-50",        // whole page
        secondary: "bg-cyan-600",      // accent color
        accent: "text-cyan-600",
        underline: "bg-red-600",
        background: "bg-white",
        surface: "bg-white",
        text: "text-zinc-900",
        textLight: "text-slate-600",
        border: "border-gray-100",
    },

    about: {},

    navigation: {
        background: "bg-amber-50/80 backdrop-blur-md",
        backgroundScrolled: "bg-amber-50/95 backdrop-blur-md",

        text: "text-stone-800",
        textScrolled: "text-stone-800",

        textHover: "hover:text-amber-700",
        textHoverScrolled: "hover:text-amber-700",

        activeText: "text-amber-700",
        activeTextScrolled: "text-amber-700",

        underline: "bg-amber-700",

        logo: "text-stone-900",
        logoScrolled: "text-stone-900",
    },

    typography: {
        heading: "font-sans font-bold",
        body: "font-sans",
    },

    button: {
        rounded: "rounded-xl",
        padding: "px-8 py-4",
        shadow: "shadow-md",
        primaryColor: "bg-cyan-600 text-white",
        primaryHover:
            "hover:bg-cyan-700 hover:shadow-lg hover:-translate-y-1",
        secondaryHover:
            "hover:bg-cyan-50 hover:text-cyan-700 hover:-translate-y-1",
        transition: "transition-all duration-300",
    },

    cards: {
        rounded: "rounded-2xl",
        shadow: "shadow-md",
        hoverBorder: "hover:border-amber-700",
    },

    layout: {
        sectionSpacing: "py-28",
        containerWidth: "max-w-7xl",
    },
};