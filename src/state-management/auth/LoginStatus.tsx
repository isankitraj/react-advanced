import { useContext, useReducer, useState } from "react";
import loginReducer from "./loginReducer";
import loginContext from "./loginContext";
import useAuth from "./useAuth";
import useAuthStore from "./store";

const LoginStatus = () => {
  // const { user, dispatch } = useAuth();

  const { user, login, logout } = useAuthStore();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          {/* <a onClick={() => dispatch({ type: "LOGOUT" })} href="#"> */}
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        // onClick={() => dispatch({ type: "LOGIN", username: "Hello Ankit!" })}
        onClick={() => login("ankit.raj")}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
