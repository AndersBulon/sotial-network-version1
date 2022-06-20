import React, { useEffect } from "react";
import style from "./Header.module.css"
import logo from "../../assets/images/logo.png"
import { NavLink } from "react-router-dom";
import { Preloader } from "../Preloader/Preloader.jsx";
import { connect } from "react-redux";
import { setMyProfileThunkCreator } from "../../redux/auth_reducer.js";



const linkclass = ({ isActive }) => isActive ? `${style.active_link}` : `${style.link}`;

let Header = (props) => {

	useEffect(() => {
		props.setMyProfileThunkCreator()
			// eslint-disable-next-line
			}, []);


	if (!Object.keys(props.myProfile).length) {
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
				<NavLink className={linkclass} to="/login">{!props.myProfile.data.login ? "login": props.myProfile.data.login }</NavLink>
			</div>
		</header>
	);
};


const mapStateToProps = (state) => {
	return {
		myProfile: state.auth.myProfile,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		setMyProfileThunkCreator: (profile) => { dispatch(setMyProfileThunkCreator(profile)) },
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);