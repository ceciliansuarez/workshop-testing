import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("renders Vite + React text", () => {
    const textElement = screen.getByText(/Vite \+ React/i);
    expect(textElement).toBeInTheDocument();
  });

  test("not render NotFoundString", () => {
    const textElement = screen.queryByText(/NotFoundString/i);
    expect(textElement).not.toBeInTheDocument();
  });

  test("renders the quantity of the button", () => {
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent("count is 0");
  });

  describe("when the button is clicked", () => {
    beforeEach(() => {
      const buttonElement = screen.getByRole("button");
      buttonElement.click();
    });

    test("renders the quantity of the button after click", () => {
      const buttonElement = screen.getByRole("button");
      expect(buttonElement).toHaveTextContent("count is 1");
    });
  });
});
