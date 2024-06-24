/* eslint-disable react/prop-types */
import "./Post.css";
import Post from "./Post";
import { useEffect, useState } from "react";
// import Post from "./post";
// import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState(0);
  console.log(posts);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className="post">
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
      {/* {
      posts.map((post)=><Post ={post}></Post>)
    } */}
      {/* {<Post posts={post}></Post>} */}
    </div>
  );
};

export default Posts;
