import { useContext } from "react";
import { useLocation } from "react-router-dom";
import Section from "../../components/Section/Section";
import LinkButton from "../../components/UI/LinkButton/LinkButton";
import Table from "../../components/UI/Table/Table";
import useHttpGetClient from "../../hooks/use-http-get-client";
import AuthContext from "../../store/auth-context";

function TeacherListPage() {
  const { pathname } = useLocation();
  const teachers = useHttpGetClient("teachers");
  const {isLoggedIn} = useContext(AuthContext)


  return (
    <>
    <Section classes="margin-3em">
      <h1>Teachers</h1>

    </Section>
      <div>
        <Table
          list={teachers}
          headers="Förnamn, Efternamn, Personnr, E-mail, Mobil"
          properties="firstname, surname, socialId, email, phone"
        />
      </div>
      <Section classes="margin-3em">
      {isLoggedIn ? <LinkButton to={pathname + "/new"} label="Registrera ny lärare" /> : <p>Logga in för att registrera</p>}

      </Section>
    </>
  );
}

export default TeacherListPage;
