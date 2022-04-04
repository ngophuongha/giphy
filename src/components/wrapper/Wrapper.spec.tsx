import { render } from "../../../test";
import { Wrapper } from "./Wrapper.styled";

describe("Styled Wrapper", () => {
  it("should match snapshot", () => {
    const { container } = render(<Wrapper />);
    expect(container).toMatchSnapshot();
  });
});
