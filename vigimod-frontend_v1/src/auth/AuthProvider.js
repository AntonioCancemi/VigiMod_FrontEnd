import React, { createContext, useContext, useState } from "react";
import { getUserData } from "../axios/service/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [config, setConfig] = useState({
    headers: {},
  });

  const login = (data) => {
    console.log(data);
    setAuthData(data);
    setConfig({
      headers: {
        Authorization: `${data?.tokenType} ${data?.accessToken}`,
        "Content-Type": "application/json",
      },
    });
    getUserData(data.username)
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch((error) => console.log(error));
    console.log(userData);
  };

  const logout = () => {
    setConfig({
      headers: {
        Authorization: "",
      },
    });
    setAuthData(null);
  };

  return (
    <AuthContext.Provider value={{ config, authData, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
