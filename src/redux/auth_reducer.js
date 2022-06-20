//* =============  IMPORTS  =====================================
import { usersAPI } from "../api/api.js";

//* =============  CONSTANTS  ===================================


const SET_MY_PROFILE = 'SET-MY-PROFILE';


//* =============  STATE  INITIOLISATION  =====================

let initialState = {
	myProfile: [],
}


//* =============  REDUCER  ===================================

export const authReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_MY_PROFILE: {
			return {
				...state,
				myProfile: action.profile
			};
		}
		default:
			return state;
	}
}

//* =============  ActionCreators  _AC  ===================================


export const setMyProfile_AC = (profile) => ({ type: SET_MY_PROFILE, profile: profile });

//* =============  ActionCreators  _AC  THUNK===========================

export const setMyProfileThunkCreator = () => {
	return (dispatch) => {
		usersAPI.getAuthorisation()
			.then(profile => {
				dispatch(setMyProfile_AC(profile));
			})
	}
}
