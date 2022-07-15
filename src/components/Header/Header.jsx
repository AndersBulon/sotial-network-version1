import style from "./Header.module.css"
import logo from "../../assets/images/logo.png"
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logOutThunkCreator } from "../../redux/auth_reducer.js";
import { getSelected_IsAuth, getSelected_Login } from "../../redux/auth_selectors.js";



const linkclass = ({ isActive }) => isActive ? `${style.active_link}` : `${style.link}`;

let Header = (props) => {
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