import { render, screen, fireEvent, waitFor } from "../../../../test";
import { BrowserRouter } from "react-router-dom";
import { SignIn } from "./SignIn.form";

describe("Sign In Form", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByText(/header.signIn/i)).toBeInTheDocument();
  });

  it("should switch step correctly", async () => {
    render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText(/signInBtn/i));
    await waitFor(() => {
      const textBtn = screen.getByText(/text/i);
      expect(textBtn).toBeInTheDocument();
      fireEvent.click(textBtn);
    });
    await waitFor(() => {
      const codeBtn = screen.getByText(/signInBtn/i);
      expect(codeBtn).toBeInTheDocument();
      fireEvent.click(codeBtn);
    });
  });
});
