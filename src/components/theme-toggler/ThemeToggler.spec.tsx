import { render, screen, fireEvent, waitFor } from "../../../test";
import { ThemeToggler } from "./ThemeToggler";
import * as hooks from "../../store/hooks";

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: jest.fn().mockReturnValue(jest.fn()),
  useAppSelector: jest.fn(),
}));

describe("Theme Toggler", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });
  it("should match snapshot", () => {
    const { container } = render(<ThemeToggler />);
    expect(container).toMatchSnapshot();
  });

  it("should trigger dispatch when clicking on toggler", async () => {
    render(<ThemeToggler />);
    const switchBtn = screen.getByRole("switch");
    fireEvent.click(switchBtn);
    await waitFor(() => expect(hooks.useAppDispatch).toHaveBeenCalled());
  });
});
