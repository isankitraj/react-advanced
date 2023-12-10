import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
  return useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }: any) => {
      const res = await axios.get<Post[]>(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _start: (pageParam - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        }
      );
      return res.data;
    },
    staleTime: 600000,

    placeholderData: keepPreviousData,
    getNextPageParam: (lastpage, allpages) => {
      return lastpage.length > 0 ? allpages.length + 1 : undefined;
    },
  });
};

export default usePosts;
