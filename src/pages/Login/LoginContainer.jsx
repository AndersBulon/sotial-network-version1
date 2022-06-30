import { connect } from "react-redux";
import { compose } from "redux";
import Login from "./Login.jsx";

import { loginThunkCreator, logOutThunkCreator } from "../../redux/auth_reducer.js";


const mapStateToProps = (state) => {
	// console.log(state.auth);
	return {
		authdata: state.auth,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		loginThunkCreator:  (email, password, rememberMe) => { dispatch(loginThunkCreator(email, password, rememberMe)) },
		logOut:  () => { dispatch(logOutThunkCreator()) },
	}
}

const LoginContainer = compose(
	connect(mapStateToProps, mapDispatchToProps),
)(Login)

export default LoginContainer;