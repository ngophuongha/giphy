import { Suspense } from "react";
import { render, waitFor, screen } from "../../../test";

import { PrimaryLayout } from "./PrimaryLayout";
import { NavBar } from "../../components/navbar";
import { TopSearch } from "../../components/top-search";

jest.mock("../../components/navbar", () => ({
  NavBar() {
    return <>NavBar</>;
  },
}));

jest.mock("../../components/top-search", () => ({
  TopSearch() {
    return <>Top Search</>;
  },
}));

describe("Primary Layout", () => {
  it("should match snapshot", async () => {
    const { container } = await render(
      <Suspense fallback={<></>}>
        <PrimaryLayout />
      </Suspense>
    );
    await waitFor(() => {
      expect(screen.getByText(/search/i)).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });

  it("should render children", async () => {
    render(
      <Suspense fallback={<></>}>
        <PrimaryLayout>
          <div>children</div>
        </PrimaryLayout>
      </Suspense>
    );
    await waitFor(() =>
      expect(screen.getByText(/children/i)).toBeInTheDocument()
    );
  });
});
