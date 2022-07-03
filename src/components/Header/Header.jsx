// import React, { useEffect } from "react";
import style from "./Header.module.css"
import logo from "../../assets/images/logo.png"
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logOutThunkCreator } from "../../redux/auth_reducer.js";



const linkclass = ({ isActive }) => isActive ? `${style.active_link}` : `${style.link}`;

let Header = (props) => {
	// useEffect(() => {
	// 	props.setMyProfileThunkCreator()
	// 	// eslint-disable-next-line
	// }, []);


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
			<div className={style.loginBlock}>
				{props.isAuth
					? <div className={style.login}>
						<span className={style.loginString}>{props.login}</span>
						<button onClick={props.logOut} className={style.logoutBtn}>Logout</button>
					</div>
					: <NavLink className={linkclass} to="/login">Login</NavLink>
				}
			</div>
		</header>
	);
};


const mapStateToProps = (state) => {
	return {

		login: state.auth.login,
		isAuth: state.auth.isAuth
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		// setMyProfileThunkCreator: () => { dispatch(setMyProfileThunkCreator()) },
		logOut: () => { dispatch(logOutThunkCreator()) },
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);