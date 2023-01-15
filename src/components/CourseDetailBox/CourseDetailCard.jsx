import Button from "../UI/Button/Button";
import style from "./CourseDetailCard.module.scss";
import "../../Assets/styles/themes.scss";
import { useContext, useState } from "react";
import AuthContext from "../../store/auth-context";

function CourseDetailCard({ course }) {
  const context = useContext(AuthContext);
  const [courseRegistered, setCourseRegistered] = useState(false);

  const buttonHandler = () => {
    console.log("setCourseRegistered")
    setCourseRegistered(true)
  }
  return (
    <div className={style["course-detail-card"]}>
      {course && (
        <>
          <h2 className={style["course-title"]}>{course.title}</h2>
          <div className={style["course-info-box"]}>
            <p>LÄNGD {course.length} veckor</p>
            <p>START {course.startDate}</p>
            {context.isLoggedIn ? (
              <>
                {courseRegistered ? (
                  <p>Registrerad!</p>
                ) : (
                  <Button label="Anmäl" background="blue" func={buttonHandler}/>
                )}
              </>
            ) : <p>Logga in för att anmäla</p>}
          </div>
        </>
      )}
    </div>
  );
}

export default CourseDetailCard;
