import CourseDetailList from "../../components/CourseDetailBox/CourseDetailList";
import useHttpGetClient from "../../hooks/use-http-get-client";
import HeroImage from "../../components/HeroImage/HeroImage";
import Section from "../../components/Section/Section";

function HomePage() {

  const courses = useHttpGetClient('courses')
  return (
    <>
      <HeroImage />
      <Section classes="margin-3em">
      <h1>Home</h1>

      </Section>
      {courses.length > 0 && <CourseDetailList courseList={courses} />}
    </>
  );
}

export default HomePage;