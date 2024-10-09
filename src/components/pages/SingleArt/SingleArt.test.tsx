import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import "@testing-library/jest-dom";
import SingleArt from "./SingleArt";
import galleryData from "../Gallery/galleryData";
import NotFound from "../NotFound/NotFound";

// Mock useNavigate hook
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: jest.fn(),
}));

describe("SingleArt Component", () => {
  it("should render correct artwork based on URL id", () => {
    const sampleArt = galleryData[0].works[0];
    render(
      <MemoryRouter initialEntries={[`/gallery/${sampleArt.id}`]}>
        <Routes>
          <Route path="/gallery/:id" element={<SingleArt />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: sampleArt.title })
    ).toBeInTheDocument();
    expect(screen.getByAltText(sampleArt.title)).toHaveAttribute(
      "src",
      sampleArt.src
    );
    expect(screen.getByText(sampleArt.date)).toBeInTheDocument();
    expect(screen.getByText(sampleArt.technique)).toBeInTheDocument();
    expect(screen.getByText(sampleArt.dimensions)).toBeInTheDocument();
  });

  it("should show NotFound component if artwork id does not exist", () => {
    render(
      <MemoryRouter initialEntries={["/gallery/non-existing-id"]}>
        <Routes>
          <Route path="/gallery/:id" element={<SingleArt />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/there is no such page/i)).toBeInTheDocument();
  });

  it("should navigate to next and previous artwork", () => {
    const sampleGallery = galleryData[0].works;
    const sampleArt = sampleGallery[1];
    const mockNavigate = jest.fn();

    // Override useNavigate mock
    jest
      .spyOn(require("react-router"), "useNavigate")
      .mockImplementation(() => mockNavigate);

    render(
      <MemoryRouter initialEntries={[`/gallery/${sampleArt.id}`]}>
        <Routes>
          <Route path="/gallery/:id" element={<SingleArt />} />
        </Routes>
      </MemoryRouter>
    );

    const prevButton = screen.getByLabelText("see previous artwork");
    const nextButton = screen.getByLabelText("see next artwork");

    fireEvent.click(prevButton);
    expect(mockNavigate).toHaveBeenCalledWith(
      `/gallery/${sampleGallery[0].id}`
    );

    fireEvent.click(nextButton);
    expect(mockNavigate).toHaveBeenCalledWith(
      `/gallery/${sampleGallery[2].id}`
    );
  });
});
