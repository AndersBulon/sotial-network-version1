//* =============  IMPORTS  =====================================

//* =============  CONSTANTS  ===================================

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'

//* =============  STATE  INITIOLISATION  =====================

let initialState = {
	users: [
		{ 'Id': '1', photourl:'https://avatarfiles.alphacoders.com/224/224801.jpg', 'followed': false, 'fullName': 'Andrei K', 'status': 'I like football', 'country': 'Belarus', 'city': 'Minsk' },
		{ 'Id': '2', photourl:'https://avatarfiles.alphacoders.com/224/224801.jpg', 'followed': true, 'fullName': 'Sergei F', 'status': 'I am a boss', 'country': 'Russia', 'city': 'Moskow' },
		{ 'Id': '3', photourl:'https://avatarfiles.alphacoders.com/224/224801.jpg', 'followed': true, 'fullName': 'Olga S', 'status': 'Absent now', 'country': 'Italy', 'city': 'Rim' },
		{ 'Id': '4', photourl:'https://avatarfiles.alphacoders.com/224/224801.jpg', 'followed': false, 'fullName': 'Patrik Korf', 'status': 'Thanks God its friday', 'country': 'Germany', 'city': 'Bavaria' },

	],

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
