//* =============  IMPORTS  =====================================
// import { createID } from "./createID.js";


//* =============  CONSTANTS  ===================================



//* =============  STATE  INITIOLISATION  =====================

let initialState = {
	sidebarComp: [
		{ 'Id': 5, 'p': 'Привет', 'l': 'лавка' },
		{ 'Id': 2, 'p': 'Привет', 'l': 'лавка' },
		{ 'Id': 7, 'p': 'Привет', 'l': 'лавка' },
		{ 'Id': 1, 'p': 'Привет', 'l': 'лавка' },
		{ 'Id': 4, 'p': 'Привет', 'l': 'лавка' },
	],
	sideBarText: 'это сайдбар',
}


//* =============  REDUCER  =============================================

export const sideBarReducer = (state = initialState, action) => {

	return state
}

//* =============  ActionCreators  _AC  ===================================


