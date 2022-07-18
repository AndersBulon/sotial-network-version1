//* =============  IMPORTS  =====================================

import { authAPI } from "../api/api.js";
import { setProfile_AC } from "./profile_reducer.js";

//* =============  CONSTANTS  ===================================

const SET_MY_PROFILE = 'SET-MY-PROFILE';
const SET_MESSAGE = 'SET-MESSAGE';
const SET_RESULT_CODE = 'SET-RESULT-CODE';
const GET_CAPTCHA = 'GET-CAPTCHA';

//* =============  STATE  INITIOLISATION  =====================

let initialState = {

	myId: null,
	email: null,
	login: null,
	isAuth: false,
	captcha: '',
	messages: [],
	resultCode: 0
}

//* =============  REDUCER  ===================================

export const authReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_MY_PROFILE: {
			return {
				...state,
				...action.data,
				captcha: ''
			};
		}
		case SET_MESSAGE: {
			return {
				...state,
				messages: action.messages
			};
		}
		case SET_RESULT_CODE: {
			return {
				...state,
				resultCode: action.code
			};
		}
		case GET_CAPTCHA: {
			return {
				...state,
				captcha: action.url
			};
		}
		default:
			return state;
	}
}

//* =============  ActionCreators  _AC  ===================================

export const setMyProfile_AC = (myId, email, login, isAuth, captcha) => ({
	 type: SET_MY_PROFILE, data: { myId, email, login, isAuth, captcha } });
export const setMessage_AC = (messages) => ({ type: SET_MESSAGE, messages });
export const setResultCode_AC = (code) => ({ type: SET_RESULT_CODE, code });
export const getCaptcha_AC = (url) => ({ type: GET_CAPTCHA, url });

//* =============  ActionCreators  _AC  THUNK===========================

export const setMyProfileThunkCreator = () => async (dispatch) => {
	let response = await authAPI.getAuthorisation();
	if (response.data.resultCode === 0) {
		let { id, email, login } = response.data.data;
		dispatch(setMyProfile_AC(id, email, login, true, ''));
	}
}

export const loginThunkCreator = (email, password, rememberMe, captcha) => async (dispatch) => {
	let response = await authAPI.setLogin(email, password, rememberMe, captcha)
	dispatch(setMessage_AC(response.data.messages));
	dispatch(setResultCode_AC(response.data.resultCode));
	if (response.data.resultCode === 0) dispatch(setMyProfileThunkCreator());
	else if (response.data.resultCode === 10) dispatch(getCaptchaThunkCreator());
}

export const logOutThunkCreator = () => async (dispatch) => {
	let response = await authAPI.unLogin()
	dispatch(setResultCode_AC(response.data.resultCode));
	if (response.data.resultCode === 0) {
		dispatch(setMyProfile_AC(null, null, null, false, ''));
		dispatch(setProfile_AC({}));
	}
}

export const getCaptchaThunkCreator = () => async (dispatch) => {
	let response = await authAPI.getCaptchaURL()
	dispatch(getCaptcha_AC(response.data.url));
}