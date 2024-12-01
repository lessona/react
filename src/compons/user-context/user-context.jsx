import { UserContext } from "./index.js";
import { useState } from "react";

export const UserContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  return (
    <UserContext.Provider value={{ value: auth, setValue: setAuth }}>
      {children}
    </UserContext.Provider>
  );
};
