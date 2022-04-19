import { render, fireEvent, screen, act, waitFor } from "../../../test";
import { LanguageSelector } from "./LanguageSelector";

import * as hooks from "../../store/hooks";
import * as languageSlice from "../../store/language/language";

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: jest.fn().mockReturnValue(jest.fn()),
  useAppSelector: jest.fn(),
}));
describe("Styled Language Selector", () => {
  it("should match snapshot", async () => {
    const { container } = render(<LanguageSelector />);

    await act(async () => {
      await screen.findByRole("button");
      fireEvent.click(screen.getByRole("button"));
    });
    expect(container).toMatchSnapshot();
  });

  it("should change language", async () => {
    jest.mock("../../store/language/language", () => ({
      ...jest.requireActual("../../store/language/language"),
      languageChange: jest.fn(),
    }));
    render(<LanguageSelector />);

    await act(async () => {
      await screen.findByRole("button");
      fireEvent.click(screen.getByRole("button"));
    });
    fireEvent.click(screen.getByText("Français"));
    await waitFor(() => {
      expect(hooks.useAppDispatch).toHaveBeenCalled();
    });
  });
});
