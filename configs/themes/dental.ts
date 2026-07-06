import { ThemeConfig } from "./types";

export const dentalTheme: ThemeConfig = {
    colors: {
        primary: "bg-slate-50",        // whole page
        secondary: "bg-cyan-600",      // accent color
        accent: "text-cyan-600",

        background: "bg-white",
        surface: "bg-white",

        text: "text-slate-900",
        textLight: "text-slate-600",

        border: "border-gray-100",
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
    },

    layout: {
        sectionSpacing: "py-28",
        containerWidth: "max-w-7xl",
    },
};