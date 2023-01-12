import style from "./CourseDetailCard.module.scss";
import missingImage from "../../Assets/images/no-image.jpg"

function CourseDetailCard({ course }) {
  return (
    <div className={style["course-detail-card"]}>
      {course && <>
      <img src={course.imageSrc || missingImage} alt="course cover"/>
        <p className={style["course-title"]}>{course.title}</p>
        <p>{course.length}</p>
        <p>{course.startDate}</p>
        <button>Anmäl</button>
      </>}
    </div>
  );
}

export default CourseDetailCard;
