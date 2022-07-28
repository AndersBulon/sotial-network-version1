//* =============  IMPORTS  =====================================

import { usersAPI } from "../api/api.js";
import { updateObjectInArrayForReducer } from "../components/HelpComponents/HelpComponents.js";

//* =============  CONSTANTS  ===================================

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_NEW_PAGINATOR_SETTINGS = 'SET-NEW-PAGINATOR-SETTINGS';
const SET_BLOCK_STRUCTURE = 'SET-BLOCK-STRUCTURE';
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
			return updateObjectInArrayForReducer(state, action.userId, state.users, "id", { followed: true }, "users")
		case UNFOLLOW:
			return updateObjectInArrayForReducer(state, action.userId, state.users, "id", { followed: false }, "users")

		case SET_USERS:
			return {
				...state,
				users: action.users
			}
		case SET_BLOCK_STRUCTURE:
			return {
				...state,
				blockStructure: action.blockStructure
			}
		case SET_CURRENT_PAGE:
			return {
				...state, currentPage: action.curPage
			}
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.totalUsersCount,
				totalBlockCount: action.totalBlockCount,
				pages: action.pages
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
		case SET_NEW_PAGINATOR_SETTINGS: {
			return {
				...state,
				pageSize: action.pageSize,
				pagesInBlock: action.pagesInBlock,
			}
		}
		default:
			return state;
	}
}

//* =============  ActionCreators  _AC  ===================================

const setTotalUsersCount = (totalUsersCount, totalBlockCount, pages) => ({
	type: SET_TOTAL_USERS_COUNT, totalUsersCount, totalBlockCount, pages
})
export const goFirstPageNumber = () => ({ type: GO_FIRST_PAGE_NUMBER })
export const goEndPageNumber = () => ({ type: GO_END_PAGE_NUMBER })
export const setCurrentPage = (curPage) => ({ type: SET_CURRENT_PAGE, curPage })
export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setBlockStructure = (blockStructure) => ({ type: SET_BLOCK_STRUCTURE, blockStructure })
export const showNextBlock = () => ({ type: SHOW_NEXT_BLOCK })
export const showPrevBlock = () => ({ type: SHOW_PREVIOUS_BLOCK })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const changeButtonsСondition = (disabled, id) => ({ type: LOCKED_BUTTON, disabled, id })
export const changeNextPrev = (value) => ({ type: CHANGE_NEXT_PREV, value })
export const setNewPaginatorSettings = (pageSize = 5, pagesInBlock = 10) => ({ type: SET_NEW_PAGINATOR_SETTINGS, pageSize, pagesInBlock })

//* =============  FUNCTIONS  ===================================
let followUnfollowFlow = async (id, dispatch, apiMethod, actionCreator) => {
	dispatch(changeButtonsСondition(true, id));
	let data = await apiMethod(id)
	if (data.resultCode === 0) { dispatch(actionCreator(id)) }
	dispatch(changeButtonsСondition(false, id));
}
//* =============  ActionCreators  _AC  THUNK  ===================================
export const getUsersThunkCreator = (currentPage, pageSize, totalBlockCount, pages) => async (dispatch) => {
	dispatch(toggleIsFetching(true));
	let data = await usersAPI.setUsersPageParams(currentPage, pageSize)
	dispatch(setUsers(data.items));
	dispatch(toggleIsFetching(false));
	dispatch(setTotalUsersCount(data.totalCount, totalBlockCount, pages));
}

export const unFollowThunkCreator = (id) => async (dispatch) => {
	followUnfollowFlow(id, dispatch, usersAPI.delFollow, unfollow)
}

export const followThunkCreator = (id) => async (dispatch) => {
	followUnfollowFlow(id, dispatch, usersAPI.setFollow, follow)
}