import CourseDetailList from "../../components/CourseDetailBox/CourseDetailList";
import useHttpGetClient from "../../hooks/use-http-get-client";

function HomePage() {

  const courses = useHttpGetClient('courses')
  return (
    <div>
      <h1>Home</h1>
      <CourseDetailList courseList={courses} />
    </div>
  );
}

export default HomePage;