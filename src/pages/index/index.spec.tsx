/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import { Index } from "./";

describe("Index", () => {
  it("renders a heading", () => {
    render(<Index />);
    const heading = screen.getByRole("heading", { name: /Index/i });
    expect(heading).toBeInTheDocument();
  });
});
