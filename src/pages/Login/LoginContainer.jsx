import { connect } from "react-redux";
import { compose } from "redux";
import Login from "./Login.jsx";
import { setMyLoginThunkCreator, setMyLogin_AC, unLoginThunkCreator } from "../../redux/form_reducer.js";


const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		setMyLogin: (email, password, rememberMe) => { dispatch(setMyLogin_AC(email, password, rememberMe)) },
		setMyLoginThunkCreator:  (email, password, rememberMe) => { dispatch(setMyLoginThunkCreator(email, password, rememberMe)) },
		unLoginThunkCreator:  () => { dispatch(unLoginThunkCreator()) },
	}
}

const LoginContainer = compose(
	connect(mapStateToProps, mapDispatchToProps),
)(Login)

export default LoginContainer;