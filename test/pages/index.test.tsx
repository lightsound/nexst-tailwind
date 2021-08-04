/**
 * @jest-environment jsdom
 */
import { fireEvent, render } from "@testing-library/react";
import Index from "src/pages/index.page";

describe("Index page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Index />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it("clicking button triggers alert", () => {
    const { getByText } = render(<Index />, {});
    window.alert = jest.fn();
    fireEvent.click(getByText("Click me!"));
    expect(window.alert).toHaveBeenCalledWith("Hello, World!");
  });
});
