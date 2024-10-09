import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Contact from "./Contact";

describe("Contact Page", () => {
  it("renders without crashing", () => {
    render(<Contact />);
  });

  it("renders correct page title", () => {
    render(<Contact />);
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });

  it("renders form fields", () => {
    render(<Contact />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it("renders submit button", () => {
    render(<Contact />);
    expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
  });

  it("displays success message after form submission", async () => {
    render(<Contact />);

    userEvent.type(screen.getByLabelText(/name/i), "John Doe");
    userEvent.type(screen.getByLabelText(/email/i), "john@example.com");
    userEvent.type(
      screen.getByLabelText(/message/i),
      "Hello, this is a test message!"
    );

    userEvent.click(screen.getByRole("button", { name: /send/i }));

    expect(
      await screen.findByText(/thank you, the message has been sent!/i)
    ).toBeInTheDocument();
  });
});
