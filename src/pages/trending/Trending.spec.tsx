import { BrowserRouter } from "react-router-dom";
import { render } from "../../../test";
import { Trending } from "./Trending";

describe("Trending Page", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <Trending />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
