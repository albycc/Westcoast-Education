import { useState, useEffect, createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  userName: "",
});

export function AuthContextProvider({ children }) {
  const [userName, setUserName] = useState("Bob");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
