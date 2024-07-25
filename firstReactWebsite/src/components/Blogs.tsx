// import { useEffect, useState } from "react"
import BlogCard from "./BlogCard";
import useFetchPosts from "../hooks/useFetchPosts";

const Blogs = () => {
  const { posts, loading, error } = useFetchPosts(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (error) {
    console.error(error);
    return <div>Error loading posts.</div>;
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div className="mx-8 my-[5rem] grid grid-cols-3 ">
      {posts?.map((post) => (
        <BlogCard
          id={post.id}
          key={post.id}
          title={post.title}
          content={post.content}
          author={post.author}
          date={post.date}
          authorImg={post.authorImg}
          postImg={post.postImg}
        />
      ))}
    </div>
  );
};

export default Blogs;
