function CourseDetailBox({ course }) {
  return (
    <div>
      {course && <>
        <p>{course.title}</p>
        <p>{course.length}</p>
        <p>{course.startDate}</p>
        <button>Anmäl</button>
      </>}
    </div>
  );
}

export default CourseDetailBox;
