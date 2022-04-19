import { render, screen } from "../../../test";
import { NavBar } from "./index";
import * as store from "../../store/hooks";

describe("Styled Navbar", () => {
  it("should match snapshot", () => {
    const { container } = render(<NavBar />);
    expect(container).toMatchSnapshot();
  });

  it("should display currentName if any", async () => {
    jest.spyOn(store, "useAppSelector").mockReturnValue("mock name");
    render(<NavBar />);
    expect(screen.getByText(/mock name/i)).toBeInTheDocument();
  });
});
