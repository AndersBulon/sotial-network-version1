import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { getSelected_IsAuth } from "../../redux/auth_selectors.js";


const mapStateToPropsForRedirect = (state) => {
		return {
			isAuth: getSelected_IsAuth(state)
		}
	}

export const WithAuthRediredct = (Component) => {
	class RedirectComponent extends React.Component {
		render() {
			//* ========================Выполняется REDIRECT===========================================
			if (!this.props.isAuth) return <Navigate replace to='/login' />
			return <Component {...this.props} />
		}
	}
	
	return compose(
		connect(mapStateToPropsForRedirect)
	)(RedirectComponent);
};