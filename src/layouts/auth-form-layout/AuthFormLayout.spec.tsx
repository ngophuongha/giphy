import { render } from "../../../test";
import { AuthFormLayout } from "./AuthFormLayout";

describe("Auth Form Layout", () => {
  it("should match snapshot", () => {
    const { container } = render(<AuthFormLayout />);
    expect(container).toMatchSnapshot();
  });
});
