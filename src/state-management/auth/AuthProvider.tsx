import { ReactNode, useReducer } from "react";
import loginReducer from "./loginReducer";
import loginContext from "./loginContext";

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(loginReducer, "");

  return (
    <loginContext.Provider value={{ user, dispatch }}>
      {children}
    </loginContext.Provider>
  );
};

export default AuthProvider;
