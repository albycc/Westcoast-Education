import { Link, useLocation } from "react-router-dom";
import LinkList from "../../components/UI/Lists/LinkList";
import Table from "../../components/UI/Table/Table";
import useHttpGetClient from "../../hooks/use-http-get-client";

function CoursesListPage() {
  const { pathname } = useLocation();
  const courses = useHttpGetClient("courses");
  return (
    <div>
      <h1>Courses</h1>
      <Table
        list={courses}
        headers="Kurstitel, Kurs id, Längd, Start datum"
        properties="title, courseId, length, startDate"
      />
      <Link to={pathname + "/new"}>Registrera ny kurs</Link>
    </div>
  );
}

export default CoursesListPage;
