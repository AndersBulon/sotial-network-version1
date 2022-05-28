import React from "react";
import Post from "./Post/Post";
import style from "./Posts.module.css";



function Posts(props) {
	let postsElement = props.postdata.map(el => <Post key={el.postId} postText={el.postText} like={el.like} />)
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
