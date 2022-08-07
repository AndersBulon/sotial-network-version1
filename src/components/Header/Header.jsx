import style from "./Header.module.css"
import logo from "../../assets/images/logo.png"
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logOutThunkCreator } from "../../redux/auth_reducer.js";
import { getSelected_IsAuth, getSelected_Login } from "../../redux/auth_selectors.js";

const linkclass = ({ isActive }) => isActive ? `${style.act_link}` : `${style.desact_link}`;

let Header = (props) => {
	const toggleClassActiveForBurger = (e) => {
		document.body.classList.toggle('_lock')
		e.target.classList.toggle('_active')
		e.target.nextElementSibling.classList.toggle('_active')
	}
	const linkClickChange = (e) => {
		if (e.target.innerText.slice(0, 6) === "Logout") {
			props.logOut()
		}
		const burger = document.querySelector(".menu__burger")
		const menuBody = document.querySelector(".menu__body")
		if (burger.classList.contains("_active")) {
			document.body.classList.remove('_lock')
			burger.classList.remove('_active')
			menuBody.classList.remove('_active')
		}
	}
	return (
		<header className={`${style.header} header`}>
			<div className={`${style.header__container} header__container`}>
				<div className={style.leftBlock}>
					<Link to="/" className={style.imglink}>
						<div className={style.blokolor}>
							<img onClick={() => { console.log("кликнул на картинке") }}
								className={style.img}
								src={logo}
								alt="logo"
							/>

						</div>
					</Link>
					<h1 className={style.title}>Social NetworK</h1>
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
				<div className={style.menu}>
					<div className="menu__burger" onClick={toggleClassActiveForBurger}>
						<span className="menu__burger_span"></span>
					</div>
					<nav className="menu__body">
						<ul className="menu__list">
							<li><NavLink onClick={linkClickChange} className={linkclass} to="/">Home</NavLink></li>
							<li><NavLink onClick={linkClickChange} className={linkclass} to="/messages">Message</NavLink></li>
							<li><NavLink onClick={linkClickChange} className={linkclass} to="/music">Music</NavLink></li>
							<li><NavLink onClick={linkClickChange} className={linkclass} to="/news">News</NavLink></li>
							<li><NavLink onClick={linkClickChange} className={linkclass} to="/profile">Profile</NavLink></li>
							<li><NavLink onClick={linkClickChange} className={linkclass} to="/users">Users</NavLink></li>
							<li><NavLink onClick={linkClickChange} className={linkclass} to="/settings">Settings</NavLink></li>
							{props.isAuth ?
								<li><NavLink onClick={linkClickChange} className={linkclass} to="/login">Logout({props.login})</NavLink></li>
								: <li><NavLink onClick={linkClickChange} className={linkclass} to="/login">Login</NavLink></li>}
						</ul>
					</nav>
				</div>
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