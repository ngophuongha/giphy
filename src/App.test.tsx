import { render } from "@testing-library/react";
import App from "./App";

describe("Index Page", () => {
  it("should render without crashing", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
