import React from "react";
// import Posts from "./Posts/Posts.jsx";
import Profileinfo from "./Profileinfo/Profileinfo"
import style from "./Profile.module.css";
import PostsContainer from "./Posts/PostsContainer.jsx";


function Profile(props) {
	return (
		<div className={style.content}>
			<Profileinfo />
			<PostsContainer store={props.store} />
		</div>
	);
}
export default Profile;