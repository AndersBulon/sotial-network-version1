import React from "react";
import Post from "./Post/Post";
import style from "./Posts.module.css";

// const postCont = document.querySelectorAll('article')
// const comentsBtn = document.querySelector('.comentsBtn')
// function HiddenPosts() {
// 	postCont.forEach(element => {
// 		if (element.hidden === true) {
// 			element.hidden = false;
// 		}
// 		else {
// 			element.hidden = true;
// 		}
// 	});
// }

function Posts(props) {

	let postsElement = props.postdata.map(el => <Post key={el.postId} postText={el.postText} like={el.like} />)
	return (
		<div className={style.postsElement}>
			<div className={style.createNewPost}>
				<textarea className={style.newpostInput}></textarea>
				<button className={`${style.addpostBtn} button`}>Add new post</button>
			</div>
			<div >
				<button  className={`${style.comentsBtn} comentsBtn button`}>Hidden my posts...</button>
			</div>
			<div className={`${style.postcontainer} grid`} >
				{postsElement}
			</div>
		</div>
	);
}

export default Posts;
