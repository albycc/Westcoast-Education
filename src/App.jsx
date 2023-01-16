import { Route, Routes } from "react-router-dom";
import CourseDetailPage from "./pages/CoursePages/CourseDetailPage";
import CourseRegisterPage from "./pages/CoursePages/CourseRegisterPage";
import CoursesListPage from "./pages/CoursePages/CoursesListPage";
import TeacherListPage from "./pages/TeacherPages/TeacherListPage";
import TeacherDetailPage from "./pages/TeacherPages/TeacherDetailPage";
import TeacherRegisterPage from "./pages/TeacherPages/TeacherRegisterPage";
import HomePage from "./pages/HomePages/HomePage";
import BasePage from "./pages";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BasePage />}>
        <Route index element={<HomePage />} />
        <Route path="courses">
          <Route index element={<CoursesListPage />} />
          <Route path=":id" element={<CourseDetailPage />} />
          <Route path="new" element={<CourseRegisterPage />} />
        </Route>
        <Route path="teachers">
          <Route index element={<TeacherListPage />} />
          <Route path=":id" element={<TeacherDetailPage />} />
          <Route path="new" element={<TeacherRegisterPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
