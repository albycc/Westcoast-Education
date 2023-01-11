import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import LoginCard from "../components/LoginCard/LoginCard";
import AuthContext from "../store/auth-context";

function BasePage() {
    const [showLoginModular, setShowLoginModular] = useState(false);
    const {userName, isLoggedIn, logoutFunc} = useContext(AuthContext)

    const loginButtonHandler = () => {
        if(isLoggedIn){
            logoutFunc()
            return;

        }
        setShowLoginModular(true)
    }
  return (
    <div>
      <div>
        <nav>
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
        { isLoggedIn && <p>{userName}</p>}
        <button onClick={loginButtonHandler}>{isLoggedIn ? 'Logga ut': 'Logga in'}</button>
      </div>
      <div>
        <Outlet />
      </div>
      {showLoginModular && <LoginCard toggleFunction={setShowLoginModular} />}
    </div>
  );
}

export default BasePage;
