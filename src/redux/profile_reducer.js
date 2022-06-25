//* =============  IMPORTS  =====================================
import { createID } from "./createID.js";
import { profileAPI } from "../api/api.js";

//* =============  CONSTANTS  ===================================

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';


//* =============  STATE  INITIOLISATION  =====================

let initialState = {
	posts: [
		{ 'Id': 1, postAvatar: 'https://avatarfiles.alphacoders.com/224/22482.jpg', 'postText': 'Привет это пост 1', 'like': '112' },
		{ 'Id': 2, postAvatar: 'https://avatarfiles.alphacoders.com/224/224812.jpg', 'postText': 'Привет это пост 2', 'like': '67' },
		{ 'Id': 7, postAvatar: 'https://avatarfiles.alphacoders.com/224/224823.jpg', 'postText': 'Привет это пост от Аниты', 'like': '72' },
		{ 'Id': 4, postAvatar: 'https://avatarfiles.alphacoders.com/224/224809.jpg', 'postText': 'Привет это пост 4', 'like': '111' },
		{ 'Id': 5, postAvatar: 'https://avatarfiles.alphacoders.com/224/224808.jpg', 'postText': 'Привет это пост Федора', 'like': '93' },
	],
	newPostText: '',
	profile: [],
	status: ''
}


//* =============  REDUCER  ===================================

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			if (state.newPostText === '') {
				alert("Ваш пост не может быть пустым.");
				return state;
			}
			else {
				let newId = createID(state.posts) + 1;
				let newPost = {
					'Id': newId,
					postAvatar: 'https://avatarfiles.alphacoders.com/224/224801.jpg',
					'postText': state.newPostText,
					'like': '0'
				}
				return {
					...state,
					newPostText: '',
					posts: [...state.posts, newPost]
				};
			}
		case CHANGE_POST_TEXT: {
			return {
				...state,
				newPostText: action.newValue
			};
		}
		case SET_PROFILE: {
			return {
				...state,
				profile: action.profile
			};
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status
			};
		}
		default:
			return state;
	}
}

//* =============  ActionCreators  _AC  ===================================

export const addPost_AC = () => ({ type: ADD_POST });
export const changeTextarea_AC = (text) => ({ type: CHANGE_POST_TEXT, newValue: text });
export const setProfile_AC = (profile) => ({ type: SET_PROFILE, profile: profile });
export const setStatus_AC = (status) => ({ type: SET_STATUS, status: status });

//* =============  ActionCreators  _AC  THUNK===========================

export const setProfileThunkCreator = (id) => {
	return (dispatch) => {
		profileAPI.getProfile(id)
			.then(response => {
				dispatch(setProfile_AC(response.data));
			})
	}
}
export const getStatusThunkCreator = (usrId) => {
	return (dispatch) => {
		profileAPI.getStatus(usrId)
			.then(response => {
				dispatch(setStatus_AC(response));
			})
	}
}
export const updateStatusThunkCreator = (status) => {
	return (dispatch) => {
		profileAPI.updateStatus(status)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(setStatus_AC(status));
				}
			})
	}
}