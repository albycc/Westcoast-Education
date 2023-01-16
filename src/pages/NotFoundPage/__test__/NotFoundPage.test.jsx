import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFoundPage from "../NotFoundPage";

describe("NotFoundPage component", () => {
  const setup = () => {
    const route = "/about";
    render(
      <MemoryRouter initialEntries={[route]}>
        <NotFoundPage />
      </MemoryRouter>
    );
  };
  test("Routes to a page not existing and title is 404 error", () => {
    setup();

    const title = screen.getByRole("heading", { name: /404 error/i });

    expect(title).toBeInTheDocument();
  });
});
