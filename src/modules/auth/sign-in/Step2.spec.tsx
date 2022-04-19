import { render } from "../../../../test";
import { Step2 } from "./Step2";

describe("Sign In: Step 2", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <Step2 onSuccess={jest.fn()} onFailed={jest.fn()} />
    );
    expect(container).toMatchSnapshot();
  });
});
