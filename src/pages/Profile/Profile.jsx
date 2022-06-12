import React from "react";
import Profileinfo from "./Profileinfo/Profileinfo"
import style from "./Profile.module.css";
import PostsContainer from "./Posts/PostsContainer.jsx";


function Profile(props) {
	return (
		<div className={style.content}>
			<Profileinfo profile={props.profile}/>
			<PostsContainer />
		</div>
	);
}
export default Profile;