import { act, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { GifItem } from "./GifItem";

describe("Loader", () => {
  it("should render without crashing", () => {
    const { container } = render(
      <GifItem
        id="1"
        imageSrc="http://localhost:8000/mock-url"
        rating="g"
        title="mock-gif"
        username="abc"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should show an image in fullscreen when clicking on gif item", async () => {
    const { getByTestId } = render(
      <GifItem
        id="1"
        imageSrc="http://localhost:8000/mock-url"
        rating="g"
        title="mock-gif"
        username="abc"
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
        rating="g"
        title="mock-gif"
        username="abc"
      />
    );
    await userEvent.click(getByTestId("1"));
    await userEvent.click(getByLabelText("Close"));
    await waitFor(() => {
      expect(queryByTestId("gif-fullscreen")).toBeNull();
    });
  });
});