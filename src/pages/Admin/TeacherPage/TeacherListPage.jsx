import { Link, useLocation } from "react-router-dom";
import List from "../../../components/UI/List/List";
import useHttpGetClient from "../../../hooks/use-http-get-client";

function TeacherListPage() {
  const { pathname } = useLocation();
  const teachers = useHttpGetClient('teachers')
  return (
    <div>
      <h1>Teachers</h1>
      <List list={teachers} />
      <Link to={pathname + "/new"}>Registrera ny lärare</Link>
    </div>
  );
}

export default TeacherListPage;
