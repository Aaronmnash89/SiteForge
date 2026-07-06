export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;

    background: string;
    surface: string;

    text: string;
    textLight: string;

    border: string;
  };

  typography: {
    heading: string;
    body: string;
  };

  button: {
    rounded: string;
    padding: string;
    shadow: string;
    primaryColor: string;
    primaryHover: string;
    secondaryHover: string;
    transition: string;
  };

  cards: {
    rounded: string;
    shadow: string;
  };

  layout: {
    sectionSpacing: string;
    containerWidth: string;
  };
}