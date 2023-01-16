import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import Section from "../../components/Section/Section";
import useHttpGetData from "../../hooks/use-http-get-data";

function TeacherDetailPage() {
  const { id } = useParams();
  const teacher = useHttpGetData("teachers", id);
  return (
    <>
      {teacher && (
        <>
        <Section classes="margin-3em">
          <h1>{teacher.firstname + " " + teacher.surname}</h1>

        </Section>
          <Card width="large">
            <Section classes="margin-children-1em">
              <p>Personnr: {teacher.socialId}</p>
              <p>Email: {teacher.email}</p>
              <p>Mobil: {teacher.phone}</p>
              <p>Kompetens: {teacher.competence.join(", ")}</p>
            </Section>
          </Card>
        </>
      )}
    </>
  );
}

export default TeacherDetailPage;
