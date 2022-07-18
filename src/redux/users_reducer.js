//* =============  IMPORTS  =====================================

import { usersAPI } from "../api/api.js";

//* =============  CONSTANTS  ===================================

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SHOW_NEXT_BLOCK = 'SHOW-NEXT-BLOCK';
const SHOW_PREVIOUS_BLOCK = 'SHOW-PREVIOUS-BLOCK';
const GO_END_PAGE_NUMBER = 'GO-END-PAGE-NUMBER';
const GO_FIRST_PAGE_NUMBER = 'GO-FIRST-PAGE-NUMBER';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const LOCKED_BUTTON = 'LOCKED-BUTTON';
const CHANGE_NEXT_PREV = 'CHANGE-NEXT-PREV';

//* =============  STATE  INITIOLISATION  =====================

let initialState = {
	users: [],
	totalUsersCount: 0,
	pageSize: 5,
	totalBlockCount: 1,
	pagesInBlock: 10,
	pages: 1,
	blockStructure: { '1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
	currentPagesBlock: 1,
	currentPage: 1,
	isFetching: false,
	lockedButton: [],
	nextPrevButtonStatus: 1
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
						arr.push(j + state.pagesInBlock * (i - 1))
					}
					blockStructure[i] = arr;
					counter = counter - state.pagesInBlock;
					arr = []
				}
				else {
					for (let k = 1; k <= counter; k++) {
						arr.push(k + state.pagesInBlock * (i - 1));
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

		case SHOW_NEXT_BLOCK:
			return {
				...state, currentPagesBlock: state.currentPagesBlock + 1, currentPage: state.blockStructure[state.currentPagesBlock + 1][0]
			}
		case SHOW_PREVIOUS_BLOCK:
			return {
				...state, currentPagesBlock: state.currentPagesBlock - 1, currentPage: state.blockStructure[state.currentPagesBlock - 1][0]
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
		case LOCKED_BUTTON: {
			return {
				...state,
				lockedButton: action.disabled
					? [...state.lockedButton, action.id]
					: state.lockedButton.filter(id => id !== action.id)
			}
		}
		default:
			return state;
	}
}

//* =============  ActionCreators  _AC  ===================================

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (curPage) => ({ type: SET_CURRENT_PAGE, curPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const showNextBlock = () => ({ type: SHOW_NEXT_BLOCK })
export const showPrevBlock = () => ({ type: SHOW_PREVIOUS_BLOCK })
export const goEndPageNumber = () => ({ type: GO_END_PAGE_NUMBER })
export const goFirstPageNumber = () => ({ type: GO_FIRST_PAGE_NUMBER })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const changeButtonsСondition = (disabled, id) => ({ type: LOCKED_BUTTON, disabled, id })
export const changeNextPrev = (value) => ({ type: CHANGE_NEXT_PREV, value })

//* =============  ActionCreators  _AC  THUNK  ===================================

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
	dispatch(toggleIsFetching(true));
	let data = await usersAPI.setUsersPageParams(currentPage, pageSize)
	dispatch(setUsers(data.items));
	dispatch(toggleIsFetching(false));
	dispatch(setTotalUsersCount(data.totalCount));
}

export const unFollowThunkCreator = (id) => async (dispatch) => {
	dispatch(changeButtonsСondition(true, id));
	let data = await usersAPI.delFollow(id)
	if (data.resultCode === 0) { dispatch(unfollow(id)) }
	dispatch(changeButtonsСondition(false, id));
}

export const followThunkCreator = (id) => async (dispatch) => {
	dispatch(changeButtonsСondition(true, id));
	let data = await usersAPI.setFollow(id)
	if (data.resultCode === 0) { dispatch(follow(id)) }
	dispatch(changeButtonsСondition(false, id));
}