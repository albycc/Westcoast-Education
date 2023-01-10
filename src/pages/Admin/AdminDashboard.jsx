import { Link, Outlet } from "react-router-dom";

function AdminDashboard() {
  return (
    <div>
      <nav>
        <Link to="/admin/courses">Kurser</Link>
        <Link to="/admin/teachers">Lärare</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default AdminDashboard;
