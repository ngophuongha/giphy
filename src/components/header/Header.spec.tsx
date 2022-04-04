import { render } from "../../../test";
import { Header } from "./Header.styled";

describe("Styled Header", () => {
  it("should match snapshot", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
