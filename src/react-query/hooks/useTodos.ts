import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import APIClient from "../../services/api-client";
import apiClient from "../../services/todoService";



export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: apiClient.getAll,
    staleTime: 10000,
  });
};

export default useTodos;
