import React from "react";
import Post from "./Post/Post";
import style from "./Posts.module.css";


function Posts() {
	return (
		<div className={`${style.posts} grid`}>
			<div className={`${style.coments} coments designe`}>
					My posts...
			</div>
			<Post message="Привет 1" like="1" />
			<Post message="Привет 2" like="7" />
			<Post message="Привет 3" like="5" />
			<Post message="Привет 4" like="1212" />
			<Post message="Привет 5" like="67" />
		</div>
	);
}

export default Posts;
