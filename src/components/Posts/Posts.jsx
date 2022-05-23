import React from "react";
import Post from "./Post/Post";
import style from "./Posts.module.css";

function Posts() {
  return (
    <div className={`${style.posts} grid designe`}>
      <div className={`${style.coments} coments designe`}>Comments...</div>
		<Post />
		<Post />
		<Post />
		<Post />
		<Post />
		<Post />

    </div>
  );
}

export default Posts;
