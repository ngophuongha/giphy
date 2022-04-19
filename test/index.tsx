import { ReactElement } from "react";
import "@testing-library/jest-dom";
import {
  render as baseRender,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";
import "jest-styled-components";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";

import i18n from "./i18n.setup";
import { store } from "../src/store/store";
import { StyledThemeProvider } from "../src/themes";

export const AllProviders = ({ children }: any) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <StyledThemeProvider>{children}</StyledThemeProvider>
      </Provider>
    </I18nextProvider>
  );
};

const render = (ui: ReactElement, options?: Omit<RenderOptions, "queries">) =>
  baseRender(ui, { wrapper: AllProviders, ...options }) as RenderResult;

export * from "@testing-library/react";

export { render };
