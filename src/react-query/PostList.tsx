import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const pageSize = 10;

  const [page, setPage] = useState(1);
  const { data: posts, error, isLoading } = usePosts({ page, pageSize });

  // if (isLoading) return <p>Loading Posts...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      {isLoading && <p>Loading Posts...</p>}

      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="btn mx-2 my-2 btn-primary"
      >
        Prev
      </button>
      <button
        
        onClick={() => setPage(page + 1)}
        className="btn btn-primary"
      >
        Next
      </button>
    </>
  );
};

export default PostList;
