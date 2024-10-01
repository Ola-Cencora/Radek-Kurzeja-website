import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Music from "./Music";
import { IMAGE_SRC } from "../../../config";

describe("Music Page", () => {
  it("renders without crashing", () => {
    render(<Music />);
  });

  it("renders correct page title", () => {
    render(<Music />);
    expect(screen.getByText(/music/i)).toBeInTheDocument();
  });

  it("renders image with correct src and alt attributes", () => {
    render(<Music />);

    const image = screen.getByAltText(/radosław kurzeja playing a concert/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", IMAGE_SRC("music.jpg"));
  });
});
