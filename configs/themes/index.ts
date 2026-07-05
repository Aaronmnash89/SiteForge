import { lawTheme } from "./law";
import { dentalTheme } from "./dental";
import { automotiveTheme } from "./automotive";
import { roofingTheme } from "./roofing";

export const themes = {
  law: lawTheme,
  dental: dentalTheme,
  automotive: automotiveTheme,
  roofing: roofingTheme,
};

export type ThemeName = keyof typeof themes;