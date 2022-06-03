//* =============  IMPORTS  =====================================
import { createID } from "./createID.js";

//* =============  CONSTANTS  ===================================

const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';

//* =============  REDUCER  ===================================

export const messagesReducer = (state, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let enterMessage = state.newMessageText;
			if (enterMessage === '') {
				alert("Сообщение не должно быть пустым!")
			}
			else {
				let newId = createID(state.messages) + 1;
				let newMessage = {
					'Id': newId,
					'mesText': state.newMessageText,
				}
				state.messages.push(newMessage);
			}
			state.newMessageText = '';
			return state;
		case CHANGE_MESSAGE_TEXT:
			state.newMessageText = action.newValue;
			return state;
		default:
			return state;
	}

}

//* =============  ActionCreators  _AC  ===================================

export const addMessage_AC = () => {
	return {
		type: ADD_MESSAGE
	}
}
export const changeMessageText_AC = (text) => {
	return { type: CHANGE_MESSAGE_TEXT, newValue: text }
}