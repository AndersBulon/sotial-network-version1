import { connect } from "react-redux";
import { compose } from "redux";
import Login from "./Login.jsx";
import { getCaptchaThunkCreator, loginThunkCreator, logOutThunkCreator } from "../../redux/auth_reducer.js";
import { getSelected_AuthMessages, getSelected_Captcha, getSelected_IsAuth } from "../../redux/auth_selectors.js";


const mapStateToProps = (state) => {
	return {
		captcha: getSelected_Captcha(state),
		isAuth: getSelected_IsAuth(state),
		messages: getSelected_AuthMessages(state),
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		loginThunkCreator: (email, password, rememberMe, captcha) => {
			 dispatch(loginThunkCreator(email, password, rememberMe, captcha)) },
		logOut: () => { dispatch(logOutThunkCreator()) },
		getCaptcha: () => (dispatch(getCaptchaThunkCreator))
	}
}

const LoginContainer = compose(
	connect(mapStateToProps, mapDispatchToProps),
)(Login)

export default LoginContainer;