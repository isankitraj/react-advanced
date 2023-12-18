import React from "react";
import { Task, TaskAction } from "./TasksProvider";

interface TaskContextType {
  tasks: Task[];
  dispatch: React.Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TaskContextType>(
  {} as TaskContextType
);

export default TasksContext;
