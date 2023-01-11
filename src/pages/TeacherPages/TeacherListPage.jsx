import { Link, useLocation } from "react-router-dom";
import Table from "../../components/UI/Table/Table";
import useHttpGetClient from "../../hooks/use-http-get-client";

function TeacherListPage() {
  const { pathname } = useLocation();
  const teachers = useHttpGetClient("teachers");
  return (
    <div>
      <h1>Teachers</h1>
      <Table
        list={teachers}
        headers="Förnamn, Efternamn, Personnr, E-mail, Mobil"
        properties="firstname, surname, socialId, email, phone"
      />
      <Link to={pathname + "/new"}>Registrera ny lärare</Link>
    </div>
  );
}

export default TeacherListPage;
