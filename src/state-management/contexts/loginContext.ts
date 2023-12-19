import React from "react";
import { TaskAction } from "../reducers/loginReducer";


// the type of  data that is going to be transferred to other react components via react context. 
interface loginContextType {
  user: string;
  dispatch: React.Dispatch<TaskAction>;
}

// creating a react context so that it can be transferred to useReact Context made in other components.
const loginContext = React.createContext<loginContextType>(
  {} as loginContextType
);

export default loginContext;
