import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router";
import Gallery from "./Gallery";
import galleryData from "./galleryData";

describe("Gallery Page", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <Gallery />
      </MemoryRouter>
    );
  });

  it("renders correct page title", () => {
    render(
      <MemoryRouter>
        <Gallery />
      </MemoryRouter>
    );
    expect(screen.getByText(/gallery/i)).toBeInTheDocument();
  });

  it("renders GallerySet components for each gallery", () => {
    render(
      <MemoryRouter>
        <Gallery />
      </MemoryRouter>
    );

    galleryData.forEach(({ gallerySetTitle }) => {
      expect(screen.getByText(gallerySetTitle)).toBeInTheDocument();
    });
  });
});
