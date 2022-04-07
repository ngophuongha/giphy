import { render, screen, fireEvent } from "../../../test";
import { lightColors } from "../../themes";
import { StyledButton as Button } from "./Button.styled";

describe("Styled Button", () => {
  it("should match snapshot", () => {
    const { container } = render(<Button btnTitle={"Default Btn"} />);
    expect(container).toMatchSnapshot();
  });

  it("should have correct variant", () => {
    render(<Button btnTitle={"Primary Btn"} variant="primary" />);

    const primaryBtn = screen.getByRole("button");
    expect(primaryBtn).toHaveStyle(`background-color: ${lightColors.primary}`);

    // fireEvent.mouseEnter(primaryBtn);
    // screen.debug(primaryBtn);
    // expect(primaryBtn).toHaveStyle(
    //   `background-color: ${lightColors.hoverPrimary}`
    // );
  });
});
