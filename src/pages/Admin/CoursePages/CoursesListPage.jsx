import { Link, useLocation } from "react-router-dom";
import List from "../../../components/UI/List/List";
import useHttpGetClient from "../../../hooks/use-http-get-client";

function CoursesListPage() {
  const {pathname} = useLocation();
  const courses = useHttpGetClient('courses');
  return (
    <div>
      <h1>Courses</h1>
      <List list={courses} />
      <Link to={pathname + "/new"}>Registrera ny kurs</Link>
    </div>
  );
}

export default CoursesListPage;
