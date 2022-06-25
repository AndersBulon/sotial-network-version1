//* =============  IMPORTS  =====================================

import { authAPI } from "../api/api.js";

//* =============  CONSTANTS  ===================================


const SET_MY_LOGIN = 'SET-MY-LOGIN';
const UNOGIN = 'UNOGIN';


//* =============  STATE  INITIOLISATION  =====================

let initialState = {

	email: "",
	password: "",
	rememberMe: false,
}


//* =============  REDUCER  ===================================

export const formReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_MY_LOGIN: {
			return {
				...state,
				email: action.email,
				password: action.password,
				rememberMe: action.rememberMe,
			};
		}
		case UNOGIN: {
			return {
				...state,
				email:"",
				password: "",
				rememberMe: false,
			};
		}
		default:
			return state;
	}
}

//* =============  ActionCreators  _AC  ===================================


export const setMyLogin_AC = (email, password, rememberMe) => (
	{ type: SET_MY_LOGIN, email: email, password: password, rememberMe: rememberMe });

export const unLogin_AC =() =>( {type: UNOGIN})
//* =============  ActionCreators  _AC  THUNK===========================

export const setMyLoginThunkCreator = (email, password, rememberMe) => {
	return (dispatch) => {
		authAPI.setLogin(email, password, rememberMe)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(setMyLogin_AC(email, password, rememberMe));
				}
			})
	}
}
export const unLoginThunkCreator = () => {
	return (dispatch) => {
		authAPI.unLogin()
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(unLogin_AC());
				}
			})
	}
}
