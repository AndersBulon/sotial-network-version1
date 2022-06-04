import React from "react";
import style from "./Posts.module.css";



function Posts(props) {
	let textAreaElement = React.createRef();

	let sendPost = () => {
		props.sendPost()
	}

	let changeTextarea = () => {
		let text = textAreaElement.current.value;
		props.changeTextarea(text);
	}

	let postsElement = props.postsElement
	
	return (
		<div className={style.postsElement}>
			<div className={style.createNewPost}>
				<textarea
					value={props.newPostText} placeholder="Введите новый пост..."
					onChange={changeTextarea} 
					className={`${style.newpostInput} input`}
					ref={textAreaElement}/>
				<button onClick={sendPost} className={`${style.sendPostBtn} button`}>Add new post</button>
			</div>
			<div >
				<button className={`${style.comentsBtn} comentsBtn button`}>Hidden my posts...</button>
			</div>
			<div className={`${style.postcontainer} grid`} >
				{postsElement}
			</div>
		</div>
	);
}

export default Posts;
