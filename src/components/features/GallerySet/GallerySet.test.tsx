import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GallerySet from "./GallerySet";
import { WorkData } from "../../pages/Gallery/galleryData";
import { MemoryRouter } from "react-router";

const mockWorks: WorkData[] = [
  {
    id: "1",
    title: "Artwork 1",
    src: "/path/to/artwork1.jpg",
    date: "2021",
    technique: "Oil on canvas",
    dimensions: "50x70cm",
  },
  {
    id: "2",
    title: "Artwork 2",
    src: "/path/to/artwork2.jpg",
    date: "2022",
    technique: "Acrylic",
    dimensions: "40x60cm",
  },
];

describe("GallerySet Component", () => {
  it("renders with title and artworks", () => {
    render(
      <MemoryRouter>
        <GallerySet title="Test Gallery Set" works={mockWorks} />
      </MemoryRouter>
    );

    expect(screen.getByText(/test gallery set/i)).toBeInTheDocument();
    mockWorks.forEach((work) => {
      expect(screen.getByText(work.title)).toBeInTheDocument();
    });
  });
});
