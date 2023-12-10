import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import usePosts from "./hooks/usePosts";
import React from "react";

const PostList = () => {
  const pageSize = 10;

  const { data, error, isLoading, fetchNextPage, isFetchingNextPage,  } =
    usePosts({ pageSize });

  // if (isLoading) return <p>Loading Posts...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      {isLoading && <p>Loading Posts...</p>}

      <ul className="list-group">
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      <button
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
        className="btn btn-primary my-2"
      >
        {isFetchingNextPage? 'Fetching' : 'Load More'}
      </button>
    </>
  );
};

export default PostList;
