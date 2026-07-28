import localFont from "next/font/local";

export const wildflower = localFont({
  src: [
    {
      path: "./WildflowerApothecary-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./WildflowerApothecary-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-wildflower",
  display: "swap",
});