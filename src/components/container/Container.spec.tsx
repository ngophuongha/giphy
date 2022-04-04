import { render } from "../../../test";
import StyledContainer from "./Container.styled";

describe("Styled Container", () => {
  it("should match snapshot", () => {
    const { container } = render(<StyledContainer />);
    expect(container).toMatchSnapshot();
  });
});
