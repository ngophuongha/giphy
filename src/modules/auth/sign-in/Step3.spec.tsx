import { render } from "../../../../test";
import { Step3 } from "./Step3";

describe("Sign In: Step 3", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <Step3 onSuccess={jest.fn()} onFailed={jest.fn()} />
    );
    expect(container).toMatchSnapshot();
  });
});
