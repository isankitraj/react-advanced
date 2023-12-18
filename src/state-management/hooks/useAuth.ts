import { useContext } from "react";
import loginContext from "../contexts/loginContext";

const useAuth = () => {
  return useContext(loginContext);
};

export default useAuth;