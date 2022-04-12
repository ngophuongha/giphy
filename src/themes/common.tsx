import { DefaultTheme } from "styled-components";

const screens = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
};

const commonColors = {
  transparent: "transparent",
  light: "#fff",
  dark: "#1b1c1c",
  toggleBackground: "#444444",
  toggleIcon: "#ffa701",
  primary: "#2b5dab",
  secondary: "a1343e",
  brickRed: "#a1343e",
  coralBlue: "#2b5dab",
};

const common: DefaultTheme = {
  colors: commonColors,
};

export { common, screens, commonColors };
