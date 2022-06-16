//* =============  IMPORTS  =====================================



//* =============  CONSTANTS  ===================================

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SHOW_MORE = 'SHOW-MORE';
const SHOW_PREVIOUS_BLOCK = 'SHOW-PREVIOUS-BLOCK';
const GO_END_PAGE_NUMBER = 'GO-END-PAGE-NUMBER';
const GO_FIRST_PAGE_NUMBER = 'GO-FIRST-PAGE-NUMBER';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

//* =============  STATE  INITIOLISATION  =====================

let initialState = {
	users: [],
	totalUsersCount: 0,
	pageSize: 5,
	totalBlockCount: 1,
	pagesInBlock: 10,
	pages: 1,
	blockStructure : {'1':[1,2,3,4,5,6,7,8,9,10]},
	currentPagesBlock: 1,
	currentPage: 1,
	isFetching: false,
}

//* =============  REDUCER  ===================================

export const usersReducer = (state = initialState, action) => {

	switch (action.type) {

		case FOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (String(user.id) === String(action.userId)) {
						return { ...user, followed: true }
					}
					return user;
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (String(user.id) === String(action.userId)) {
						return { ...user, followed: false }
					}
					return user;
				})
			}
		case SET_USERS:
			return {
				...state,
				users: action.users
			}
		case SET_CURRENT_PAGE:
			return {
				...state, currentPage: action.curPage
			}
		case SET_TOTAL_USERS_COUNT:
			let totalBlockCount = (Math.ceil(action.totalUsersCount / state.pagesInBlock / state.pageSize));
			let pages = (Math.ceil(action.totalUsersCount / state.pageSize));
			let blockStructure = {};
			let arr = [];
			let counter = pages;
			for (let i = 1; i <= totalBlockCount; i++) {
				if (counter - state.pagesInBlock > 0) {
					for (let j = 1; j <= state.pagesInBlock; j++) {
						arr.push(j+10*(i-1))
					}
					blockStructure[i] = arr;
					counter = counter - state.pagesInBlock;
					arr = []
				}
				else {
					for (let k = 1; k <= counter; k++) {
						arr.push(k+10*(i-1));
					}
					blockStructure[i] = arr;
				}
			}
			
			return {
				...state,
				 totalUsersCount: action.TotalUsersCount,
				 totalBlockCount: totalBlockCount,
				 pages: pages,
				 blockStructure: blockStructure,
			}
		case SHOW_MORE:
			return {
				...state, currentPagesBlock: action.currBlock, currentPage: (action.currBlock*10-9)
			}
		case SHOW_PREVIOUS_BLOCK:
			return {
				...state, currentPagesBlock: action.currBlock, currentPage: (action.currBlock*10-9)
			}

		case GO_END_PAGE_NUMBER:
			return {
				...state, currentPagesBlock: state.totalBlockCount, currentPage: state.pages
			}
		case GO_FIRST_PAGE_NUMBER:
			return {
				...state, currentPagesBlock: 1, currentPage: 1
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state, isFetching: action.isFetching
			}

		default:
			return state;
	}

}

//* =============  ActionCreators  _AC  ===================================

export const follow = (userId) => {

	return {
		type: FOLLOW,
		userId
	}
}
export const unfollow = (userId) => {

	return {
		type: UNFOLLOW,
		userId
	}
}
export const setUsers = (users) => {
	return {
		type: SET_USERS,
		users
	}
}
export const setCurrentPage = (curPage) => {
	return {
		type: SET_CURRENT_PAGE,
		curPage
	}
}
export const setTotalUsersCount = (totalUsersCount) => {
	return {
		type: SET_TOTAL_USERS_COUNT,
		totalUsersCount
	}
}
export const showNextBlock = (currBlock) => {
	return {
		type: SHOW_MORE,
		currBlock
	}
}
export const showPrevBlock = (currBlock) => {
	return {
		type: SHOW_PREVIOUS_BLOCK,
		currBlock
	}
}

export const goEndPageNumber = () => {
	return {
		type: GO_END_PAGE_NUMBER,
	}
}
export const goFirstPageNumber = () => {
	return {
		type: GO_FIRST_PAGE_NUMBER,
	}
}
export const toggleIsFetching = (isFetching) => {
	return {
		type: TOGGLE_IS_FETCHING,
		isFetching
	}
}
