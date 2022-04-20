import { act, render, waitFor, fireEvent } from "../../../../test";
import userEvent from "@testing-library/user-event";
import { GifItem } from "./GifItem";

describe("Gif Item", () => {
  it.only("should render without crashing", async () => {
    const { container } = render(
      <GifItem
        id="1"
        imageSrc="http://localhost:8000/mock-url"
        username="abc"
        title="mock gif item"
      />
    );
    fireEvent.scroll(window, {
      target: { scrollY: 50 },
    });
    // await waitFor(
    //   () => {
    //     // screen.debug();
    //     // const lazyload = document.getElementsByClassName("lazyload-wrapper")[0];
    //     // expect(document.querySelector(".lazyload-placeholder")).to.not.exist;
    //     // expect(getByText("mock gif item")).toBeInTheDocument();
    //   },
    //   { timeout: 4000 }
    // );
    expect(container).toMatchSnapshot();
  });

  it.skip("should show an image in fullscreen when clicking on gif item", async () => {
    const { getByTestId, findByTestId } = render(
      <GifItem
        id="1"
        imageSrc="http://localhost:8000/mock-url"
        username="abc"
        title="mock gif item"
      />
    );

    const card = await findByTestId("1");
    act(() => {
      fireEvent.click(card);
    });
    expect(getByTestId("gif-fullscreen")).toBeInTheDocument();
  });

  it.skip("should close image fullscreen when clicking on close button", async () => {
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
