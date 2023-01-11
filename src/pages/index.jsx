import { Link, Outlet } from "react-router-dom";

function BasePage() {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Start</Link>
            </li>
            <li>
              <Link to="/courses">Kurser</Link>
            </li>
            <li>
              <Link to="/teachers">Lärare</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default BasePage;
