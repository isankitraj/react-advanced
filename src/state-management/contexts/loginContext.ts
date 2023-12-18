import React from "react";
import { TaskAction } from "../reducers/loginReducer";

interface loginContextType {
  user: string;
  dispatch: React.Dispatch<TaskAction>;
}

const loginContext = React.createContext<loginContextType>(
  {} as loginContextType
);

export default loginContext;
