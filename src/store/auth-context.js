import { useState, useEffect, createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  userName: "",
  loginFunc: () => {},
  logoutFunc: () => {},
});

export function AuthContextProvider({ children }) {
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("context useeffect");
    const storageData = JSON.parse(localStorage.getItem("context"));
    if (storageData && userName === "") {
      setUserName(storageData.userName);
      setIsLoggedIn(true);
    }
    console.log(userName, isLoggedIn);
  }, [userName, isLoggedIn]);

  const loginFunc = (loginObject) => {
    setUserName(loginObject.username);
    setIsLoggedIn(true);
    localStorage.setItem(
      "context",
      JSON.stringify({ userName: loginObject.username, isLoggedIn: true })
    );
  };

  const logoutFunc = () => {
    setUserName("");
    setIsLoggedIn(false);
    localStorage.removeItem("context");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userName, loginFunc, logoutFunc }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
