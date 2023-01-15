import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import Section from "../../components/Section/Section";
import useHttpGetData from "../../hooks/use-http-get-data";

function CourseDetailPage() {
  const { id } = useParams();
  const course = useHttpGetData("courses", id);
  return (
    <>
      {course && (
        <>
        <Section classes="margin-3em">
          <h1>{course.title}</h1>

        </Section>
          <Card width="large">
            <Section classes="margin-children-1em">
            <p>ID: {course.courseId}</p>
            <p>Length: {course.length} veckor</p>
            <p>Start datum: {course.startDate}</p>
            <h3>Beskrivning</h3>
            <p>{course.description}</p>

            </Section>
          </Card>
        </>
      )}
    </>
  );
}

export default CourseDetailPage;
