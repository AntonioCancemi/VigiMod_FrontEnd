import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);
  const [config, setConfig] = useState({
    headers: {},
  });

  const login = (data) => {
    setAuthData(data);
    setConfig({
      headers: {
        Authorization: `${data?.tokenType} ${data?.accessToken}`,
        "Content-Type": "application/json",
      },
    });
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
    <AuthContext.Provider value={{ config, authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
