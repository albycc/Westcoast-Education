import { Outlet } from "react-router-dom";
import Header from "../components/Layouts/Header/Header";
import Main from "../components/Layouts/Main/Main";
import Navbar from "../components/Navbar/Navbar";

function BasePage() {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default BasePage;
