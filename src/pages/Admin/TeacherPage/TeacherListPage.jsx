import { Link, useLocation } from "react-router-dom";

function TeacherListPage() {
  const { pathname } = useLocation();
  return (
    <div>
      <h1>Teachers</h1>
      <ul>
        <li>
          <Link to={pathname + "/1"}>1</Link>
        </li>
        <li>
          <Link to={pathname + "/2"}>2</Link>
        </li>
      </ul>
      <Link to={pathname + "/new"}>Registrera ny lärare</Link>
    </div>
  );
}

export default TeacherListPage;
