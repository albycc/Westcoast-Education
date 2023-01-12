import CourseDetailList from "../../components/CourseDetailBox/CourseDetailList";
import useHttpGetClient from "../../hooks/use-http-get-client";
import HeroImage from "../../components/HeroImage/HeroImage";

function HomePage() {

  const courses = useHttpGetClient('courses')
  return (
    <>
      <HeroImage />
      <h1>Home</h1>
      <CourseDetailList courseList={courses} />
    </>
  );
}

export default HomePage;