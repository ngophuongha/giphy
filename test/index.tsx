import { ReactElement } from "react";
import "@testing-library/jest-dom";
import {
  render as baseRender,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";
import "jest-styled-components";
import { Provider } from "react-redux";

import { store } from "../src/store/store";
import { StyledThemeProvider } from "../src/themes";

export const AllProviders = ({ children }: any) => {
  return (
    <Provider store={store}>
      <StyledThemeProvider>{children}</StyledThemeProvider>
    </Provider>
  );
};

const render = (ui: ReactElement, options?: Omit<RenderOptions, "queries">) =>
  baseRender(ui, { wrapper: AllProviders, ...options }) as RenderResult;

export * from "@testing-library/react";

export { render };
