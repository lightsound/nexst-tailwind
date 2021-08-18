import { fireEvent, render } from "@testing-library/react";

import Root from "./index.page";

describe("Root page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Root />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("clicking button triggers alert", () => {
    const { getByText } = render(<Root />);
    window.alert = jest.fn();
    fireEvent.click(getByText("Click me!"));
    expect(window.alert).toHaveBeenCalledWith("Hello, World!");
  });
});
