import { useContext } from "react";
import { AuthContext } from "./autocontext";

export const useAuth = () => {
  return useContext(AuthContext);
};
