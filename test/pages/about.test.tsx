import About from "src/pages/about";
import { render } from "test/test-utils";

describe("About page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<About />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
