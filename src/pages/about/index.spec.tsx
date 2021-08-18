import renderer from "react-test-renderer";

import About from "./index.page";

describe("About page", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
