import renderer from "react-test-renderer";

import AboutPage from "../pages/about";
import IndexPage from "../pages/index";

it("renders index unchanged", () => {
  const tree = renderer.create(<IndexPage />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders about unchanged", () => {
  const tree = renderer.create(<AboutPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
