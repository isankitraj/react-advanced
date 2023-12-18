import { useReducer } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/tasks/TaskList";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import TasksContext from "./state-management/tasks/tasksContext";
import loginReducer from "./state-management/reducers/loginReducer";
import loginContext from "./state-management/contexts/loginContext";
import AuthProvider from "./state-management/AuthProvider";
import TasksProvider from "./state-management/tasks/TasksProvider";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <NavBar />
        <HomePage />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
