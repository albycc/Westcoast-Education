import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CourseRegisterPage from "../CourseRegisterPage";

describe("CourseRegisterPage component", () => {
  const setup = () => {
    render(<CourseRegisterPage />);
  };
  describe("Course register form page", () => {
    test("Has header saying Ny kurs", () => {
      setup();
      const title = screen.getByRole("heading", { name: "Ny kurs" });

      expect(title).toBeInTheDocument();
    });

    test("Has title input field", () => {
      setup();

      const input = screen.getByLabelText("Titel");

      expect(input).toBeInTheDocument();
    });

    test("Has course id input field", () => {
      setup();

      const input = screen.getByLabelText("Kurs id");

      expect(input).toBeInTheDocument();
    });

    test("Has length input field", () => {
      setup();

      const input = screen.getByLabelText("Längd");

      expect(input).toBeInTheDocument();
    });

    test("Has category options", () => {
      setup();

      const input = screen.getByLabelText("Kategori");

      expect(input).toBeInTheDocument();
    });

    test("Has description text area", () => {
      setup();

      const input = screen.getByLabelText("Beskrivning");

      expect(input).toBeInTheDocument();
    });

    test("Has start date input field", () => {
      setup();

      const input = screen.getByLabelText("Start datum");

      expect(input).toBeInTheDocument();
    });

    test("Register button should be disabled initially", () => {
      setup();

      const button = screen.getByRole("button", { name: "Registrera kurs" });

      expect(button).toBeDisabled();
    });
  });

  describe("Register form interaction", () => {
    test("Fill every input and button will be enabled", async () => {
      setup();

      const titleInput = screen.getByLabelText("Titel");
      const courseIdInput = screen.getByLabelText("Kurs id");
      const lengthInput = screen.getByLabelText("Längd");
      const categoryInput = screen.getByLabelText("Kategori");
      const descriptionInput = screen.getByLabelText("Beskrivning");
      const startDatumInput = screen.getByLabelText("Start datum");

      await userEvent.type(titleInput, "C++");
      await userEvent.type(courseIdInput, "KL365");
      await userEvent.type(lengthInput, "11");
      await userEvent.type(categoryInput, "programming");
      await userEvent.selectOptions(categoryInput, "programming")
      await userEvent.type(descriptionInput, "Lorem ipsum");
      await userEvent.type(startDatumInput, "2023-04-05");


      const button = screen.getByRole("button", { name: /registrera kurs/i });

      expect(button).toBeEnabled();
    });

  });
});
