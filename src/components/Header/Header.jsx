import React, { useEffect, useState } from "react";
import style from "./Header.module.css"
import logo from "../../assets/images/logo.png"
import { NavLink } from "react-router-dom";
import { Preloader } from "../Preloader/Preloader.jsx";
import { usersAPI } from "../../api/api.js";



const linkclass = ({ isActive }) => isActive ? `${style.active_link}` : `${style.link}`;

let Header = () => {

	const [logindata, setLogin] = useState({})

	useEffect(() => {
		usersAPI.getAuthorisation().then(data =>
				setLogin(data))
	}, []);

	if (!Object.keys(logindata).length) {
		return <Preloader />}

	return (
		<header className={`${style.header} grid designe header`}>
			<div className={style.logotype}>
				<img
					className={style.img}
					src={logo}
					alt="logo"
				/>
				<h1 className="title">Social NetworK</h1>
			</div>
			<div className={style.login}>
				<NavLink className={linkclass} to="/login">{!logindata.data.login ? "login": logindata.data.login }</NavLink>
			</div>
		</header>
	);
};

export default Header;