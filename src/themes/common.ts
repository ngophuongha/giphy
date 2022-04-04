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
  dark: "#171717",
  toggleBackground: "#444444",
  toggleIcon: "#ffa701",
  primary: "#444444",
};

const common: DefaultTheme = {
  colors: commonColors,
};

export { common, screens, commonColors };
