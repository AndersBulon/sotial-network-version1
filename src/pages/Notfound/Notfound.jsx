import React from "react";
import { Link } from "react-router-dom";
import style from "./Notfound.module.css"

function Notfound() {
	return (
		<div className={`${style.content} designe`}>
			<span>This page doesn't exist. Go </span>
			<Link to="/" className={style.link}> homepage. </Link>
		</div>
	)
}

export { Notfound };