import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "./About";
import { aboutTxt } from "./aboutTxt";
import { IMAGE_SRC } from "../../../config";

describe("About Page", () => {
  it("renders without crashing", () => {
    render(<About />);
  });

  it("renders correct page title", () => {
    render(<About />);
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });

  it("renders image with correct src and alt attributes", () => {
    render(<About />);

    const image = screen.getByAltText(/radosław kurzeja playing a concert/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", IMAGE_SRC("music.jpg"));
  });

  it("renders all paragraphs from aboutTxt", () => {
    render(<About />);

    aboutTxt.forEach((paragraph) => {
      expect(screen.getByText(paragraph)).toBeInTheDocument();
    });
  });
});
