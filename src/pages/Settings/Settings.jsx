import React from "react";
import { Link } from "react-router-dom";
import style from "./Settings.module.css"


function Settings() {
	return (
		<div className={`${style.content} designe`} >
			<h3 className={style.title}>НАСТРОЙКИ / SETTINGS</h3>
			<div className={style.linkItem}>
				<Link to="/settings/profile" className={`${style.link} link`}> Редактировать свой профиль </Link>
			</div>
			<div className={style.linkItem}>
				<Link to="/settings/paginator" className={`${style.link} link`}> Редактировать постраничный вывод вкладки Users </Link>
			</div>
		</div>
	)
}

export default Settings;