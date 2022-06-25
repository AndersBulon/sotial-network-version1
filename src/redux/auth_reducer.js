//* =============  IMPORTS  =====================================
import { authAPI } from "../api/api.js";

//* =============  CONSTANTS  ===================================


const SET_MY_PROFILE = 'SET-MY-PROFILE';


//* =============  STATE  INITIOLISATION  =====================

let initialState = {

	myId: null,
	email: null,
	login: null,
	isAuth: false
}


//* =============  REDUCER  ===================================

export const authReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_MY_PROFILE: {
			return {
				...state,
				...action.data,
				isAuth: true
			};
		}
		default:
			return state;
	}
}

//* =============  ActionCreators  _AC  ===================================


export const setMyProfile_AC = (myId, email, login) => ({ type: SET_MY_PROFILE, data: { myId, email, login } });

//* =============  ActionCreators  _AC  THUNK===========================

export const setMyProfileThunkCreator = () => {
	return (dispatch) => {
		authAPI.getAuthorisation()
			.then(data => {
				if (data.resultCode === 0) {
					let { id, email, login } = data.data;
					dispatch(setMyProfile_AC(id, email, login));
				}
			})
	}
}
