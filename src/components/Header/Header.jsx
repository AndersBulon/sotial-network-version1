import style from "./Header.module.css"
import logo from "../../assets/images/logo.png"
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logOutThunkCreator } from "../../redux/auth_reducer.js";
import { getSelected_IsAuth, getSelected_Login } from "../../redux/auth_selectors.js";



const linkclass = ({ isActive }) => isActive ? `${style.active_link}` : `${style.link}`;

let Header = (props) => {
	return (
		<header className={`${style.header} header`}>
			<div className={style.leftBlock}>
				<img
					className={style.img}
					src={logo}
					alt="logo"
				/>
				<h3 className={style.title}>Social NetworK</h3>
			</div>
			<div className={style.rightBlock}>
				{props.isAuth
					? <div className={style.login}>
						<span className={style.loginString}>{props.login}</span>
						<button onClick={props.logOut} className={`${style.logoutBtn} button`}>Logout</button>
					</div>
					: <div className={style.login1}>
						<NavLink className={linkclass} to="/login">Login</NavLink>
					</div>
				}
			</div>
		</header>
	);
};

const mapStateToProps = (state) => {
	return {
		login: getSelected_Login(state),
		isAuth: getSelected_IsAuth(state)
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		logOut: () => { dispatch(logOutThunkCreator()) },
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);