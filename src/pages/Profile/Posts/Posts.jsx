import React from "react";
import Post from "./Post/Post";
import style from "./Posts.module.css";

let postsData = [
	{ 'postId': 1, 'postText': 'Привет это пост 1', 'like': '2' },
	{ 'postId': 2, 'postText': 'Привет это пост 2', 'like': '7' },
]
let postsElement = postsData.map(el => <Post key={el.postId} postText={el.postText} like={el.like} />)

function Posts(props) {
	return (
		<div className={`${style.posts} grid`}>
			<div className={`${style.coments} coments designe`}>
				My posts...
			</div>
			{postsElement}
		</div>
	);
}

export default Posts;
