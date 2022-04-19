import { BrowserRouter } from "react-router-dom";
import { render } from "../../test";
import { Switch404 } from "./Switch404";

describe("Switch404 Page", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <Switch404 />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
