//* =============  IMPORTS  =====================================

//* =============  CONSTANTS  ===================================

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'

//* =============  STATE  INITIOLISATION  =====================

let initialState = {
	users: []

}

//* =============  REDUCER  ===================================

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.Id === action.userId) {
						return { ...user, followed: false }
					}
					return user;
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.Id === action.userId) {
						return { ...user, followed: true }
					}
					return user;
				})
			}
		case SET_USERS:
			return {
				...state,
				users: [...state.users, ...action.users]
			}

		default:
			return state;
	}

}

//* =============  ActionCreators  _AC  ===================================

export const follow_AC = (userId) => {

	return {
		type: FOLLOW,
		userId
	}
}
export const unfollow_AC = (userId) => {

	return {
		type: UNFOLLOW,
		userId
	}
}
export const setUsers_AC = (users) => {
	return {
		type: SET_USERS,
		users
	}
}
