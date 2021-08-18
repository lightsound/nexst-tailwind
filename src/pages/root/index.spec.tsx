import { fireEvent, render } from "@testing-library/react";
import renderer from "react-test-renderer";

import Root from "./index.page";

describe("Root page", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Root />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("clicking button triggers alert", () => {
    const { getByText } = render(<Root />);
    window.alert = jest.fn();
    fireEvent.click(getByText("Click me!"));
    expect(window.alert).toHaveBeenCalledWith("Hello, World!");
  });
});
