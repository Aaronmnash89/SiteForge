import { ThemeConfig } from "./types";

export const acupunctureTheme: ThemeConfig = {
    colors: {
        primary: "bg-amber-50",          // warm cream page background
        secondary: "border border-emerald-800 bg-transparent text-emerald-800",       // light earthy accent backgrounds
        accent: "text-amber-700",        // eyebrow text / small accents
        underline: "bg-amber-700",
        background: "bg-white",
        surface: "bg-emerald-50/40",
        text: "text-stone-900",
        textLight: "text-stone-600",
        border: "border-stone-200",
    },

    about: {
        imageDecoration: {
            enabled: true,
            image: "/images/lotusFrame1.png",
            fit: "cover",
            opacity: 1,
        }
    },

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

    layout: {
        sectionSpacing: "py-28",
        containerWidth: "max-w-7xl",
        backgroundImage: "",
    },

    typography: {
        heading: "font-sans font-bold",
        body: "font-sans",
    },

    button: {
        rounded: "rounded-xl",
        padding: "px-8 py-4",
        shadow: "shadow-md",

        // Sage Green
        primaryColor: "bg-violet-900 text-white",

        primaryHover:
            "hover:bg-violet-600 hover:shadow-lg hover:-translate-y-1",

        secondaryHover:
            "hover:bg-emerald-900 hover:text-white hover:shadow-lg hover:-translate-y-1",

        transition: "transition-all duration-300",
    },

    cards: {
        rounded: "rounded-2xl",
        shadow: "shadow-md",
        hoverBorder: "hover:border-amber-700",
    },

};