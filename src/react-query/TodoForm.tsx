import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Todo } from "./hooks/useTodos";
import axios from "axios";

const TodoForm = () => {
  const queryClient = useQueryClient();

  const addTodo = useMutation<Todo, Error, Todo>({
    mutationFn: async (todo: Todo) => {
      const respone = await axios.post<Todo>(
        "https://jsonplaceholder.typicode.com/todos",
        todo
      );
      return respone.data;      // list of todos is returning here.
    },

    onMutate: (newTodo: Todo) => {
      
    }

    onSuccess: (savedTodo, newTodo) => {

      // savedTodo represents the data returned from the successful mutation.
      // newTodo represents the data that we are sending to backend.
      console.log(savedTodo);
      console.log(newTodo);
      
      

      // approach: Invalidating the cache
      // queryClient.invalidateQueries({
      //   queryKey: ['todos']
      // })

      // approach 2 - updating the data directly in cache
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        savedTodo,
        ...(todos || []),
      ]);
    },
  });

  const ref = useRef<HTMLInputElement>(null);

  return (
<>
    {addTodo.error && <div className="alert alert-danger">{addTodo.error.message}</div>}

    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (ref.current && ref.current.value) {
          addTodo.mutate({
            id: 0,
            title: ref.current?.value,
            completed: false,
            userId: 1,
          });
        }
      }}
      className="row mb-3"
    >
      <div className="col">
        <input ref={ref} type="text" className="form-control" />
      </div>
      <div className="col">
        <button className="btn btn-primary">{addTodo.isPending ? 'Adding...' : 'Add'}</button>
      </div>
    </form>
    </>
  );
};

export default TodoForm;
