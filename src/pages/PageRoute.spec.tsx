import { BrowserRouter } from "react-router-dom";
import { render } from "../../test";
import { PageRoute } from "./PageRoute";

describe("PageRoute", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <PageRoute />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
