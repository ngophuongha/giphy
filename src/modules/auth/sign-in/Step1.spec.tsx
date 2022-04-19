import { render } from "../../../../test";
import { Step1 } from "./Step1";

describe("Sign In: Step 1", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <Step1 onSuccess={jest.fn()} onFailed={jest.fn()} />
    );
    expect(container).toMatchSnapshot();
  });
});
