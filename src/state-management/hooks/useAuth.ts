import { useContext } from "react";
import loginContext from "../contexts/loginContext";

const useAuth = () => {
  return useContext(loginContext);
};

export default useAuth;

// Returning a react context to share with all other component. 
// internally use auth is suing context. 