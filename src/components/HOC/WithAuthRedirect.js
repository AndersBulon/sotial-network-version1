import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";


const mapStateToPropsForRedirect = (state) => {
		return {
			isAuth: state.auth.isAuth
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