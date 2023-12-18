import { ReactNode, useReducer } from "react";
import TasksContext from "./tasksContext";

export interface Task {
  id: number;
  title: string;
}

// interface Action{
//     type: 'ADD' | 'DELETE'
// }

// creating separate interface for individual task.
interface AddTask {
  // while adding task we only need type of action and the task object.
  type: "ADD";
  task: Task;
}
interface DeleteTask {
  // while delete needs only the type of action and the id of the task that we are deleting it.
  type: "DELETE";
  taskId: number;
}

export type TaskAction = AddTask | DeleteTask;

const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
  //   if (action.type === "ADD") return [action.task, ...tasks];
  //   if (action.type === "DELETE")
  //     return tasks.filter((t) => t.id !== action.taskId);
  //   return tasks;

  // we can also use switch statement.
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      return tasks.filter((t) => t.id !== action.taskId);
  }
};

interface Props {
  children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
