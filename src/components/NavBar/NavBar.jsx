import { React } from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

function NavBar() {
	return (
		<nav className={`${style.nav} designe grid navigator`}>
			<div className={style.item}>
				<NavLink to="/" className={style.link}>
					Home
				</NavLink>
			</div>
			<div className={style.item}>
				<NavLink to="/profile" className={style.link}>
					Profile
				</NavLink>
			</div>
			<div className={style.item}>
				<NavLink className={style.link} to="/messages">
					Messages
				</NavLink>
			</div>
			<div className={style.item}>
				<NavLink className={style.link} to="/news">
					News
				</NavLink>
			</div>
			<div className={style.item}>
				<NavLink className={style.link} to="/music">
					Music
				</NavLink>
			</div>
			<div className={style.item}>
				<NavLink className={style.link} to="/settings">
					Settings
				</NavLink>
			</div>
		</nav>
	);
}

export { NavBar };