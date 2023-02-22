import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Footer from "./Footer";

describe("Footer", () => {
  it("renders the logo", () => {
    render(<Footer />);
    expect(screen.getAllByAltText("Huguenots logo"));
  });
  it("contains terms, legal, privacy and cookies links", () => {
    render(<Footer />);
    const links = screen.getAllByRole("link");
    const hrefs = links.map((link) => link.href).join(", ");
    expect(
      hrefs.includes("/terms") &&
        hrefs.includes("/legal") &&
        hrefs.includes("/privacy") &&
        hrefs.includes("cookies")
    ).toBe(true);
  });
});
