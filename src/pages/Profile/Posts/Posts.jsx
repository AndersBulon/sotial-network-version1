import React from "react";
import Post from "./Post/Post.jsx";
import style from "./Posts.module.css";
import { useForm } from "react-hook-form"

function PostForm(props) {

	let [localState, changeLocalState] = React.useState("")

	const {
		handleSubmit,
		reset,
		register,
		formState: { errors },
	} = useForm({ mode: "onSubmit" })

	const onSubmit = () => {
		props.sendPost(localState)
		localState = changeLocalState("")
		reset();
	}

	let changeTextarea = (e) => {
		changeLocalState(e.currentTarget.value);
	}

	let errRef = React.createRef();
	let handleClick = () => {
		const wrapper = errRef.current;
		wrapper.classList.add("err")
		setTimeout(() => {
			wrapper.classList.remove("err")
		}, 850);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.postForm}>
			<p ref={errRef} className={`${style.postErr}`}>
				{errors.text?errors.text.message:""}
			</p>
			<input
				type="textarea" value={localState} placeholder="Введите новый пост..."
				className={`${style.newpostInput} input`} autoFocus={true}
				{...register('text', {
					required: "Пост не может быть пустым !",
				})}
				onChange={changeTextarea}
			/>
			<input type="submit" className={`${style.sendPostBtn} button`}
				onClick={handleClick}
				 value="Add new post" />
		</form>
	)
}

function Posts(props) {

	let postsElement = props.posts.map(el => <Post key={el.Id} postText={el.postText} like={el.like} id={el.Id} avatar={el.postAvatar} />)

	return (
		<div className={style.postsElement}>
			<div className={style.createNewPost}>
				<PostForm sendPost={props.sendPost} />
			</div>
			<div >
				<button className={`${style.comentsBtn} comentsBtn button`}>Hidden posts...</button>
			</div>
			<div className={`${style.postcontainer} grid`} >
				{postsElement}
			</div>
		</div>
	);
}

export default Posts;
