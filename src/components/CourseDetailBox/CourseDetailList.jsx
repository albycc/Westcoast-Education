import { useState } from "react";
import CourseDetailCard from "./CourseDetailCard";
import style from "./CourseDetailList.module.scss";
import config from "../../config.json"

function CourseDetailList({courseList}) {
  const [courses, setCourses] = useState(courseList)

  const categoryButtonHandler = (event) => {
    const category = event.target.value;
    if(category === ''){
      setCourses(courseList)
      return;
    }
    const filteredList = courseList.filter(course => course.category === category)
    setCourses(filteredList)
  }

  return (
    <div>
      <div className={style["courses-menu"]}>
        {config.coursesCategories.map((menu) => (
          <button key={menu.value} value={menu.value} onClick={categoryButtonHandler} className={style['course-category-button']}>
            {menu.title}
          </button>
        ))}
      </div>
      <div className={style["courses-container"]}>
        {courses.map((course) => (
          <CourseDetailCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CourseDetailList;
