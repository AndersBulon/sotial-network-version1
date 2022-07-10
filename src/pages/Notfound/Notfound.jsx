import React from "react";
import { Link } from "react-router-dom";
import style from "./Notfound.module.css"

function Notfound(props) {
	return (
		<div className={`${style.content} designe`}>
			<span>This page doesn't exist. Go </span>
			<Link to="/" className={style.link}> homepage. </Link>
			<div>{props.message}</div>
		</div>
	)
}

export { Notfound };