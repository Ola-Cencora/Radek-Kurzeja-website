import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router";
import Navigation from "./Navigation";
import userEvent from "@testing-library/user-event";

describe("Navigation Component", () => {
  let setIsNavShownMock: jest.Mock;

  beforeEach(() => {
    setIsNavShownMock = jest.fn();
  });

  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <Navigation isNavShown={true} setIsNavShown={setIsNavShownMock} />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("button", { name: /close navigation/i })
    ).toBeInTheDocument();
  });

  it("closes navigation when close button is clicked", () => {
    render(
      <MemoryRouter>
        <Navigation isNavShown={true} setIsNavShown={setIsNavShownMock} />
      </MemoryRouter>
    );

    userEvent.click(screen.getByRole("button", { name: /close navigation/i }));

    expect(setIsNavShownMock).toHaveBeenCalledWith(false);
  });

  it("closes navigation when a link is clicked", () => {
    render(
      <MemoryRouter>
        <Navigation isNavShown={true} setIsNavShown={setIsNavShownMock} />
      </MemoryRouter>
    );

    userEvent.click(screen.getByRole("link", { name: /about/i }));
    expect(setIsNavShownMock).toHaveBeenCalledWith(false);
  });
});
