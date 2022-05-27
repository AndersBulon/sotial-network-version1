import React from "react";
import Posts from "./Posts/Posts.jsx";
import Profileinfo from "./Profileinfo/Profileinfo.jsx"
import style from "./Profile.module.css";

function Profile() {
	return (
		<div className={style.content}>
			<Profileinfo />
			<Posts />
		</div>
	);
}
export default Profile;