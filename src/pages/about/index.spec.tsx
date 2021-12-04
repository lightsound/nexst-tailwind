/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import { About } from "./";

describe("About", () => {
  it("renders a heading", () => {
    render(<About />);
    const heading = screen.getByRole("heading", { name: /About/i });
    expect(heading).toBeInTheDocument();
  });
});
