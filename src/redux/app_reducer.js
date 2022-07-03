//* =============  IMPORTS  =====================================

import { setMyProfileThunkCreator } from "./auth_reducer.js";


//* =============  CONSTANTS  ===================================
const SET_INITIALIZED = 'SET-INITIALIZED';


//* =============  STATE  INITIOLISATION  =====================

let initialState = {
	initialized: false,
}


//* =============  REDUCER  ===================================

export const appReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_INITIALIZED: {
			return {
				...state,
				initialized: true
			};
		}
		default:
			return state;
	}
}

//* =============  ActionCreators  _AC  ===================================


export const setInitialized_AC = () => ({ type: SET_INITIALIZED });

//* =============  ActionCreators  _AC  THUNK===========================

export const initializeAppThunkCreator = () => (dispatch) => {
	let promise1 = dispatch(setMyProfileThunkCreator());
	//! let promise2 = dispatch(второй());
	//! let promise3 = dispatch(третий());
	Promise.all([promise1])
		.then(() => {
			dispatch(setInitialized_AC());
		})
}


