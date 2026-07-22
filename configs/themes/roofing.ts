import { ThemeConfig } from "./types";

export const roofingTheme: ThemeConfig = {
    colors: {
        primary: "bg-blue-900",
        secondary: "bg-amber-500",
        accent: "text-amber-500",
        underline: "bg-amber-500",

        background: "bg-white",
        surface: "bg-gray-100",

        text: "text-gray-900",
        textLight: "text-gray-600",

        border: "border-gray-300",
    },

    about: {},

    navigation: {
        background: "bg-blue-900/80 backdrop-blur-md",
        backgroundScrolled: "bg-blue-900/95 backdrop-blur-md",

        text: "text-white",
        textScrolled: "text-white",

        textHover: "hover:text-amber-500",
        textHoverScrolled: "hover:text-amber-500",

        activeText: "text-amber-500",
        activeTextScrolled: "text-amber-500",

        underline: "bg-amber-500",

        logo: "text-white",
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

        primaryColor: "bg-amber-500 text-white",

        primaryHover:
            "hover:bg-amber-600 hover:shadow-lg hover:-translate-y-1",

        secondaryHover:
            "hover:bg-white hover:text-blue-900 hover:shadow-lg hover:-translate-y-1",

        transition: "transition-all duration-300",
    },

    cards: {
        rounded: "rounded-2xl",
        shadow: "shadow-lg",
        hoverBorder: "hover:border-amber-500",
    },

    layout: {
        sectionSpacing: "py-28",
        containerWidth: "max-w-7xl",
    },
};