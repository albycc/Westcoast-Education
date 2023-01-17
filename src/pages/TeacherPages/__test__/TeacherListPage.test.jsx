import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TeacherListPage from "../TeacherListPage";

describe("TeacherListPage component", () => {
  const setup = () => {
    const route = "/teachers";
    render(
      <MemoryRouter initialEntries={[route]}>
        <TeacherListPage />
      </MemoryRouter>
    );
  };
  test("TeacherList calls api and gets table rows of teachers", async () => {
    setup();

    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          id: "1",
          firstname: "Gunnar",
          surname: "Vikström",
          socialId: "19780805-0453",
          email: "Gunnar.Vikström@gmail.com",
          phone: "076 67 84 53",
          competence: ["C#", ".NET", "JavaScript"],
        },
      ],
    });

    const tableRows = await screen.findAllByRole("row");

    expect(tableRows).not.toHaveLength(0);
  });
});
