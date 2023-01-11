import CourseDetailBox from "./CourseDetailBox";

function CourseDetailList({ courseList = [] }) {
  return (
    <div>
      {courseList.map((course) => (
        <CourseDetailBox key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CourseDetailList;