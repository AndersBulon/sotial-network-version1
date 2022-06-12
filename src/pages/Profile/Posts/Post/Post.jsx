import React from "react";
import style from "./Post.module.css";
import { NavLink } from "react-router-dom";

function Post(props) {
	return (
		<article className={style.article}>
			<div className={style.logo}>
				<NavLink to="/users">
					<img className={style.postimg} src={props.avatar} alt="" />
				</NavLink>
			</div>
			<div className={style.posttext}>
				{props.postText}
			</div>
			<div className={style.annotation}>
				<div>
					Likes: <span className={style.like}>{props.like}</span>
				</div>
				<div>
					ID: <span className={style.like}>{props.id}</span>
				</div>

			</div>

		</article>
	)
}

export default Post;