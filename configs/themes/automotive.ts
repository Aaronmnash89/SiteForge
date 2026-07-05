import { ThemeConfig } from "./types";

export const automotiveTheme: ThemeConfig = {
    colors: {
        primary: "bg-black",
        secondary: "bg-red-500",
        accent: "text-yellow-400",

        background: "bg-white",
        surface: "bg-gray-100",

        text: "text-gray-900",
        textLight: "text-gray-600",

        border: "border-gray-300",
    },

    typography: {
        heading: "font-serif",
        body: "font-sans",
    },

    button: {
        rounded: "rounded-xl",
        padding: "px-8 py-4",
        shadow: "shadow-xl",
    },

    cards: {
        rounded: "rounded-2xl",
        shadow: "shadow-lg",
    },

    layout: {
        sectionSpacing: "py-28",
        containerWidth: "max-w-7xl",
    },
};