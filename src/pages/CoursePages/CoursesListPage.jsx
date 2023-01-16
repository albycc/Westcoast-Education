import { useContext } from "react";
import { useLocation } from "react-router-dom";
import Section from "../../components/Section/Section";
import LinkButton from "../../components/UI/LinkButton/LinkButton";
import Table from "../../components/UI/Table/Table";
import useHttpGetClient from "../../hooks/use-http-get-client";
import AuthContext from "../../store/auth-context";

function CoursesListPage() {
  const { pathname } = useLocation();
  let courses = useHttpGetClient("courses");
  const { isLoggedIn } = useContext(AuthContext);

  courses = courses.map((course) => {
    return { ...course, length: course.length + " veckor" };
  });
  return (
    <>
      <Section classes="margin-3em">
        <h1>Courses</h1>
      </Section>
      <div>
        <Table
          list={courses}
          headers="Kurstitel, Kurs id, Längd, Start datum"
          properties="title, courseId, length, startDate"
        />
      </div>
      <Section classes="margin-3em">
        {isLoggedIn ? (
          <LinkButton to={pathname + "/new"} label="Registrera ny kurs" />
        ) : (
          <p>Logga in för att registrera</p>
        )}
      </Section>
    </>
  );
}

export default CoursesListPage;
