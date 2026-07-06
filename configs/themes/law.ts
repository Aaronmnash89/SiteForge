import { ThemeConfig } from "./types";

export const lawTheme: ThemeConfig = {
    colors: {
        primary: "bg-neutral-950",      // almost black
        secondary: "bg-amber-600",      // gold
        accent: "text-amber-500",

        background: "bg-white",
        surface: "bg-zinc-100",

        text: "text-zinc-900",
        textLight: "text-zinc-600",

        border: "border-zinc-300",
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
    },

    layout: {
        sectionSpacing: "py-28",
        containerWidth: "max-w-7xl",
    },
};