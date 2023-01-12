import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import LoginCard from "../LoginCard/LoginCard";
import style from "./Navbar.module.scss";

function Navbar() {
  const [showLoginModular, setShowLoginModular] = useState(false);
  const { isLoggedIn, userName, logoutFunc } = useContext(AuthContext);

  const loginButtonHandler = () => {
    if (isLoggedIn) {
      logoutFunc();
      return;
    }
    setShowLoginModular(true);
  };
  return (
    <div className={style["navbar-container"]}>
      <span>WESTCOAST EDUCATION</span>
      <nav className={style.navbar}>
        <ul>
          <li>
            <Link to="/">Start</Link>
          </li>
          <li>
            <Link to="/courses">Kurser</Link>
          </li>
          <li>
            <Link to="/teachers">Lärare</Link>
          </li>
        </ul>
      </nav>
      <div className={style["login-container"]}>
        <button onClick={loginButtonHandler}>
          {isLoggedIn ? "Logga ut" : "Logga in"}
        </button>
        {isLoggedIn && <span>{userName}</span>}
      </div>
      {showLoginModular && <LoginCard toggleFunction={setShowLoginModular} />}
    </div>
  );
}

export default Navbar;
