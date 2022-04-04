import { act, render, waitFor } from "../../../../test";
import userEvent from "@testing-library/user-event";
import { GifItem } from "./GifItem";

describe("Gif Item", () => {
  it("should render without crashing", () => {
    const { container } = render(
      <GifItem
        id="1"
        imageSrc="http://localhost:8000/mock-url"
        username="abc"
        title="mock gif item"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should show an image in fullscreen when clicking on gif item", async () => {
    const { getByTestId } = render(
      <GifItem
        id="1"
        imageSrc="http://localhost:8000/mock-url"
        username="abc"
        title="mock gif item"
      />
    );
    act(() => {
      userEvent.click(getByTestId("1"));
    });
    expect(getByTestId("gif-fullscreen")).toBeInTheDocument();
  });

  it("should close image fullscreen when clicking on close button", async () => {
    const { getByTestId, getByLabelText, queryByTestId } = render(
      <GifItem
        id="1"
        imageSrc="http://localhost:8000/mock-url"
        username="abc"
        title="mock gif item"
      />
    );
    await userEvent.click(getByTestId("1"));
    await userEvent.click(getByLabelText("Close"));
    await waitFor(() => {
      expect(queryByTestId("gif-fullscreen")).toBeNull();
    });
  });
});
