import { BrowserRouter } from "react-router-dom";
import { render } from "../../../test";
import { SignInPage } from "./SignIn";

describe("Sign In Page", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <SignInPage />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
