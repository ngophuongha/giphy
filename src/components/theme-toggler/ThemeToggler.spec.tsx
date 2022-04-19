import { render, screen, fireEvent, waitFor } from "../../../test";
import { ThemeToggler } from "./ThemeToggler";

describe("Theme Toggler", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });
  it("should match snapshot", () => {
    const { container } = render(<ThemeToggler />);
    expect(container).toMatchSnapshot();
  });

  it("should change theme correctly", async () => {
    render(<ThemeToggler />);
    const switchBtn = screen.getByRole("switch");
    fireEvent.click(switchBtn);
    await waitFor(() => {
      expect(switchBtn).not.toBeChecked();
    });
    fireEvent.click(switchBtn);
    await waitFor(() => {
      expect(switchBtn).toBeChecked();
    });
  });
});
