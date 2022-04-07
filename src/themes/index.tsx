import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "../store/hooks";
import { dark } from "./dark";
import { light } from "./light";
import { ThemeType } from "../store/theme/theme";

export * from "./common";
export * from "./light";
export * from "./dark";

export const StyledThemeProvider: FC = ({ children }) => {
  const currentTheme = useAppSelector((state) => state.theme.theme);
  return (
    <ThemeProvider theme={currentTheme === ThemeType.Dark ? dark : light}>
      {children}
    </ThemeProvider>
  );
};
