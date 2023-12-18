import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../constants";
import { Todo } from "./useTodos";

import APIClient from "../../services/api-client";
import apiClient from "../../services/todoService";



interface AddTodoContext {
  previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: apiClient.post,

    onMutate: (newTodo: Todo) => {
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

      // approach 2 - updating the data directly in cache
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => [
        newTodo,
        ...(todos || []),
      ]);

      onAdd();
      //if (ref.current) ref.current.value = "";

      return { previousTodos };
    },

    onSuccess: (savedTodo, newTodo) => {
      // savedTodo represents the data returned from the successful mutation.
      // newTodo represents the data that we are sending to backend.
      // console.log(savedTodo);
      // console.log(newTodo);
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );

      // approach: Invalidating the cache
      // queryClient.invalidateQueries({
      //   queryKey: ['todos']
      // })
    },

    onError: (error, newTodo, context) => {
      if (!context) {
        return;
      }

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
    },
  });

  return addTodo;
};

export default useAddTodo;
