import { Link, useLocation } from "react-router-dom";

function CoursesListPage() {
  const {pathname} = useLocation()
  return (
    <div>
      <h1>Courses</h1>
      <ul>
        <li>
          <Link to={pathname + "/1"}>1</Link>
        </li>
        <li>
          <Link to={pathname + "/2"}>2</Link>
        </li>
      </ul>
      <Link to={pathname + "/new"}>Registrera ny kurs</Link>
    </div>
  );
}

export default CoursesListPage;
