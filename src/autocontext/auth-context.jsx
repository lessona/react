"use client";

import { useState } from "react";
import { AuthContext } from "./autocontext";

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuthorized: false });

  const toggleAuth = () => {
    setAuth((prev) => {
      return prev.isAuthorized
        ? { isAuthorized: false }
        : {
            isAuthorized: true,
            name: "Sam",
            id: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
          };
    });
  };

  return (
    <AuthContext.Provider value={{ auth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
