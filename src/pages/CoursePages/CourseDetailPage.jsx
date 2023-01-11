import { useParams } from "react-router-dom";
import useHttpGetData from "../../hooks/use-http-get-data";

function CourseDetailPage() {
  const { id } = useParams();
  const course = useHttpGetData("courses", id);
  return (
    <div>
      {course && <>
        <h1>{course.title}</h1>
        <p>ID: {course.courseId}</p>
        <p>Length: {course.length}</p>
        <p>Start datum: {course.startDate}</p>
        <p>{course.description}</p>
      </>}
    </div>
  );
}

export default CourseDetailPage;
