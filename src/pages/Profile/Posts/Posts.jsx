import React from "react";
import {addPost_AC, changeTextarea_AC} from "../../../redux/profile_reducer.js";
import Post from "./Post/Post";
import style from "./Posts.module.css";



function Posts(props) {
	let textAreaElement = React.createRef();

	let sendPost = () => {
		props.dispatch(addPost_AC());
	}

	let changeTextarea = () => {
		let text = textAreaElement.current.value;
		props.dispatch(changeTextarea_AC(text))
	}

	let postsElement = props.postdata.map(el => <Post key={el.Id} postText={el.postText} like={el.like} id={el.Id} />)

	return (
		<div className={style.postsElement}>
			<div className={style.createNewPost}>
				<textarea ref={textAreaElement} className={style.newpostInput}
					value={props.newPostText} onChange={changeTextarea} />
				<button onClick={sendPost} className={`${style.sendPostBtn} button`}>Add new post</button>
			</div>
			<div >
				<button  className={`${style.comentsBtn} comentsBtn button`}>Hidden my posts...</button>
			</div>
			<div  className={`${style.postcontainer} grid`} >
				{postsElement}
			</div>
		</div>
	);
}

export default Posts;
