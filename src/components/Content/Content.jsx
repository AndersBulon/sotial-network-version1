import React from "react";
import Profile from "../Profile/Profile";
import Posts from "../Posts/Posts";
import style from "./Content.module.css"


function Content() {
	return (
		<div className={`${style.content} designe`}>
			<Profile />
			{/* <Posts /> */}
		</div>
	)
}
export default Content;