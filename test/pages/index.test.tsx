import { fireEvent, render } from "@testing-library/react";
import Home from "src/pages";

describe("Home page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Home />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it("clicking button triggers alert", () => {
    const { getByText } = render(<Home />, {});
    window.alert = jest.fn();
    fireEvent.click(getByText("Button"));
    expect(window.alert).toHaveBeenCalledWith("Hello, World!");
  });
});
