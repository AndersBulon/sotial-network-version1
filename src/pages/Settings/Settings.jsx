import React from "react";
import { Link } from "react-router-dom";
import style from "./Settings.module.css"


function Settings() {
	return (
		<div className={`${style.content} designe`} >
			<h2>НАСТРОЙКИ / SETTINGS</h2>
			<div>
				<Link to="/settings/profile" className={`${style.link} link`}> Редактировать свой профиль </Link>
			</div>
		</div>
	)
}

export default Settings;