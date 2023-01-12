import CourseDetailCard from "./CourseDetailCard";
import style from "./CourseDetailList.module.scss";

function CourseDetailList({ courseList = [] }) {

  const menuAlternatives = ['Alla categorier', 'Programmering', 'Analys', 'Projektledning', 'Nätverk', 'Design']
  return (
    <div>
        <div className={style["courses-menu"]}>
          {menuAlternatives.map(menu => <span key={menu}>{menu}</span>)}
        </div>
      <div className={style["courses-container"]}>
        {courseList.map((course) => (
          <CourseDetailCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CourseDetailList;
