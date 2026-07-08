export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    underline: string;
    background: string;
    surface: string;
    text: string;
    textLight: string;
    border: string;
  };

  about?: {
  imageDecoration?: {
    enabled: boolean;
    image: string;
    fit: "cover" | "contain";
    opacity: number;
  };
};

  layout: {
    sectionSpacing: string;
    containerWidth: string;
    backgroundImage?: string;
  }

  typography: {
    heading: string;
    body: string;
  };

  navigation: {
    background: string;
    backgroundScrolled: string;

    text: string;
    textScrolled: string;

    textHover: string;
    textHoverScrolled: string;

    activeText: string;
    activeTextScrolled: string;

    underline: string;

    logo: string;
    logoScrolled: string;
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
    hoverBorder: string;
  };


}