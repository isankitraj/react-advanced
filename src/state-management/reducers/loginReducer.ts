// interface Action {
//   type: "LOGIN" | "LOGOUT";
//   userName?: string;
// }

interface login {
  type: "LOGIN";
  username: string;
}

interface logout {
  type: "LOGOUT";
}

export type TaskAction = login | logout;

const loginReducer = (user: string, action: TaskAction): string => {
  if (action.type === "LOGIN") {
    return action.username;
  }

  if (action.type === "LOGOUT") {
    return "";
  }
  return user;
};

export default loginReducer;
