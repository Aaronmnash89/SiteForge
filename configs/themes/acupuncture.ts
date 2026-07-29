import { ThemeConfig } from "./types";

export const acupunctureTheme: ThemeConfig = {
    colors: {
    primary: "bg-[#261020]",
    secondary: "border border-[#591E4A] bg-[#F4F0EA] text-[#261020]",

    accent: "text-[#591E4A]",

    underline: "bg-[#591E4A]",

    background: "bg-[#261020]",

    surface: "bg-[#F4F0EA]",

    text: "text-[#261020]",

    textLight: "text-[#3B2D34]",

    border: "border-[#591E4A]/20",
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
        background: "bg-[#261020]/90 backdrop-blur-md",
        backgroundScrolled: "bg-[#261020]/95 backdrop-blur-lg",

        text: "text-[#F2F2F2]",
        textScrolled: "text-[#F2F2F2]",

        textHover: "hover:text-[#B46AA4]",
        textHoverScrolled: "hover:text-[#B46AA4]",

        activeText: "text-[#B46AA4]",
        activeTextScrolled: "text-[#B46AA4]",

        underline: "bg-[#591E4A]",

        logo: "text-[#F2F2F2]",
        logoScrolled: "text-[#F2F2F2]",
    },

    layout: {
        sectionSpacing: "py-28",
        containerWidth: "max-w-7xl",
        backgroundImage: "",
    },

    typography: {
        display: "font-wildflower",
        heading: "font-wildflower",
        body: "font-serif",
        button: "font-sans",
    },

    button: {
        rounded: "rounded-xl",
        padding: "px-8 py-4",
        shadow: "shadow-md",

         primaryColor:
    "bg-[#591E4A] text-white border border-[#591E4A]",

        primaryHover:
            "hover:bg-[#6B2558] hover:border-[#6B2558]",

        secondaryHover:
            "hover:bg-[#F2F2F2]/10 hover:text-[#F2F2F2] hover:-translate-y-1",

        transition: "transition-all duration-300",
    },

    cards: {
        rounded: "rounded-[28px]",
        shadow: "shadow-2xl",
        hoverBorder: "hover:border-[#591E4A]",
    },

};