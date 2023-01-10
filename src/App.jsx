import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminIndexPage from "./pages/Admin/AdminIndex/AdminIndexPage";
import CoursePage from "./pages/Admin/CoursePages/CoursePage";
import CourseRegisterPage from "./pages/Admin/CoursePages/CourseRegisterPage";
import CoursesListPage from "./pages/Admin/CoursePages/CoursesListPage";
import TeacherListPage from "./pages/Admin/TeacherPage/TeacherListPage";
import TeacherPage from "./pages/Admin/TeacherPage/TeacherPage";
import TeacherRegisterPage from "./pages/Admin/TeacherPage/TeacherRegisterPage";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin/" element={<AdminDashboard />}>
        <Route index element={<AdminIndexPage />} />
        <Route path="courses">
          <Route index element={<CoursesListPage />} />
          <Route path=":id" element={<CoursePage />} />
          <Route path="new" element={<CourseRegisterPage />} />
        </Route>
        <Route path="teachers">
          <Route index element={<TeacherListPage />} />
          <Route path=":id" element={<TeacherPage />} />
          <Route path="new" element={<TeacherRegisterPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
