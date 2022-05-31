import React from "react";
import Posts from "./Posts/Posts.jsx";
import Profileinfo from "./Profileinfo/Profileinfo"
import style from "./Profile.module.css";


function Profile(props) {
	return (
		<div className={style.content}>
			<Profileinfo />
			<Posts 
				postdata={props.DataProfilePage.posts} 
				newPostText = {props.DataProfilePage.newPostText} 
				addPost={props.addPost}
				changePostText = {props.changePostText}
			/>
		</div>
	);
}
export default Profile;