import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  page: number;
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
  return useQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: async () => {
      const res = await axios.get<Post[]>(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _start: (query.page - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        }
      );
      return res.data;
    },
    staleTime: 600000,
    placeholderData: keepPreviousData,
  });
};

export default usePosts;
