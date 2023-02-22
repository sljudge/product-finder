import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import H1 from "./H1";

describe("H1", () => {
  it("renders without error", () => {
    render(<H1>Hello world</H1>);
    expect(screen.getByTestId("h1")).toHaveTextContent("Hello world");
  });
});
