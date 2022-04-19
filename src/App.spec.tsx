import { render } from "../test";
import App from "./App";

describe("Index Page", () => {
  it("should match snapshot", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
