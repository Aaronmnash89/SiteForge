import { lawTheme } from "./law";
import { dentalTheme } from "./dental";
import { automotiveTheme } from "./automotive";
import { roofingTheme } from "./roofing";
import { acupunctureTheme } from "./acupuncture";


export const themes = {
  law: lawTheme,
  dental: dentalTheme,
  automotive: automotiveTheme,
  roofing: roofingTheme,
  acupuncture: acupunctureTheme
};

export type ThemeName = keyof typeof themes;