//* =============  IMPORTS  =====================================
import { createID } from "./createID.js";


//* =============  CONSTANTS  ===================================

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';


//* =============  REDUCER  ===================================

export const profileReducer = (state, action) => {
	switch (action.type) {
		case ADD_POST:
			let newId = createID(state.posts) + 1;
			let newPost = {
				'Id': newId,
				'postText': state.newPostText,
				'like': '0'
			}
			state.posts.push(newPost);
			state.newPostText = '';
			return state;
		case CHANGE_POST_TEXT:
			state.newPostText = action.newValue;
			return state;

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
