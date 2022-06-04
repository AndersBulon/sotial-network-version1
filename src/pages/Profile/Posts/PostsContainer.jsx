import React from "react";
import { addPost_AC, changeTextarea_AC } from "../../../redux/profile_reducer.js";
import Post from "./Post/Post";
import Posts from "./Posts.jsx";




function PostsContainer(props) {
	let state = props.store.getState();

	let postsElement = state.profilePage.posts.map(el => <Post key={el.Id} postText={el.postText} like={el.like} id={el.Id} />)
	let sendPost = () => {
		props.store.dispatch(addPost_AC())
	}

	let changeTextarea = (text) => {
		props.store.dispatch(changeTextarea_AC(text))
	}

	return (
		<Posts
			sendPost={sendPost}
			changeTextarea={changeTextarea}
			newPostText={state.profilePage.newPostText}
			postsElement={postsElement}
		/>
	);
}

export default PostsContainer;
