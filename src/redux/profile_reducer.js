//* =============  IMPORTS  =====================================
import { createID } from "./createID.js";


//* =============  CONSTANTS  ===================================

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';


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
		default:
			return state;
	}

}

//* =============  ActionCreators  _AC  ===================================

export const addPost_AC = () => {
	return {
		type: ADD_POST
	}
}
export const changeTextarea_AC = (text) => {
	return { type: CHANGE_POST_TEXT, newValue: text }
}
