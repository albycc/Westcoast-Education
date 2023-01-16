import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import LoginCard from "../LoginCard/LoginCard";
import Button from "../UI/Button/Button";
import style from "./Navbar.module.scss";

function Navbar() {
  const [showLoginModular, setShowLoginModular] = useState(false);
  const { isLoggedIn, userName, logoutFunc } = useContext(AuthContext);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const loginButtonHandler = () => {
    if (isLoggedIn) {
      logoutFunc();
      return;
    }
    setShowLoginModular(true);
    setMobileMenuVisible(false)
  };

  const mobileMenuButtonHandler = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };
  return (
    <div className={style["navbar-container"]}>
      {showLoginModular && <LoginCard toggleFunction={setShowLoginModular} />}
      <span className={style.logo}>WESTCOAST EDUCATION</span>
      <div className={style["desktop-view"]}>
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
          <Button
            func={loginButtonHandler}
            label={isLoggedIn ? "Logga ut" : "Logga in"}
            background="darkBlue"
          />
          {isLoggedIn && <span className={style["user-name"]}>{userName}</span>}
        </div>
      </div>
      {mobileMenuVisible && (
        <div className={style["mobile-menu-dropdown"]}>
          <div className={style["dropdown-section"]}>
            <Link to="/">Start</Link>
            <Link to="/courses">Kurser</Link>
            <Link to="/teachers">Lärare</Link>
          </div>

          <div className={style["dropdown-section"]}>
            <p>{userName}</p>
            <Button
              func={loginButtonHandler}
              label={isLoggedIn ? "Logga ut" : "Logga in"}
              background="darkBlue"
            />
          </div>
        </div>
      )}
      <button
        className={style["mobile-menu-button"]}
        onClick={mobileMenuButtonHandler}
      >
      </button>
    </div>
  );
}

export default Navbar;
