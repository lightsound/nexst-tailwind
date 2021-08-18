import { render } from "@testing-library/react";

import About from "./index.page";

describe("About page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
