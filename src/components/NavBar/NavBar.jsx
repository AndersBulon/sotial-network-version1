import { React } from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const linkclass = ({isActive}) => isActive ? `${style.active_link}` : `${style.link}`;

const NavBar = () => {
	return (
		<nav className={`${style.nav} designe grid navigator`}>
			<div className={style.item}>
				<NavLink to="/" className={linkclass}>
					Home
				</NavLink>
			</div>
			<div className={style.item}>
				<NavLink to="/profile" className={linkclass}>
					Profile
				</NavLink>
			</div>
			<div className={style.item}>
				<NavLink  to="/messages" className={linkclass}>
					Messages
				</NavLink>
			</div>
			<div className={style.item}>
				<NavLink to="/users" className={linkclass}>
					Users
				</NavLink>
			</div>
			<div className={style.item}>
				<NavLink to="/news" className={linkclass}>
					News
				</NavLink>
			</div>
			<div className={style.item}>
				<NavLink to="/music" className={linkclass}>
					Music
				</NavLink>
			</div>
			<div className={style.item}>
				<NavLink to="/settings" className={linkclass}>
					Settings
				</NavLink>
			</div>
		</nav>
	);
}

export { NavBar };