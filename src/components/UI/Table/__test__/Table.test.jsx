import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Table from "../Table";

describe("Table component", () => {
  const setup = (list = [], route = "/", headers, properties) => {
    render(
      <MemoryRouter initialEntries={[route]}>
        <Table list={list} headers={headers} properties={properties} />
      </MemoryRouter>
    );
  };
  test("Table renders items from list of courses", () => {
    const list = [
      {
        id: "1",
        courseId: "KL456",
        title: "Pythonprogrammering för AI-utveckling",
        length: 2,
        category: "programming",
        description:
          "Programmering med Python används för att behandla data, bygga spel eller skapa hemsidor. Python är vanligt som nybörjarspråk då det är relativt enkelt att använda. På grund av detta har programmeringsspråket på senare tid vuxit i popularitet. En annan anledning till den växande populariteten är det stora utbudet av tredjepartskod och tillgången till bibliotek. Genom programmering med Python kan du enkelt skapa nya program utan större ansträngning!",
        startDate: "2023-05-20",
      },
      {
        id: "2",
        courseId: "YL675",
        title: ".NET cloud developer",
        length: 3,
        category: "programming",
        description:
          "Cloud development, även kallat molntjänster, gör det möjligt att hantera programvaror, datalagring och andra funktioner på nätet istället för i din dators mjukvara. Det är ett anpassbart och prisvärt sätt att hantera applikationer, infrastruktur och mjukvaror.",
        startDate: "2023-05-16",
      },
    ];
    
    setup(
      list,
      "/courses",
      "Course Id, Title, Length",
      "courseId, title, length"
    );

    const listItems = screen.getAllByRole("cell");

    expect(listItems).not.toHaveLength(0);
  });
});
