//* =============  IMPORTS  =====================================
import { createID } from "./createID.js";

//* =============  CONSTANTS  ===================================

const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';

//* =============  STATE  INITIOLISATION  =====================

let initialState = {
	messages: [
		{ 'Id': 1, 'mesText': 'Сообщение 1' },
		{ 'Id': 2, 'mesText': 'Привет это Катя )))' },
		{ 'Id': 3, 'mesText': 'Сообщение 3' },
		{ 'Id': 4, 'mesText': 'Сообщение 4' },
		{ 'Id': 5, 'mesText': 'Сообщение 5' },
		{ 'Id': 6, 'mesText': 'Сообщение 6' },
		{ 'Id': 7, 'mesText': 'Сообщение от Федора' },
	],
	dialogs: [
		{ 'Id': 1, 'dialogAuthor': 'Andrei' },
		{ 'Id': 2, 'dialogAuthor': 'Katja' },
		{ 'Id': 3, 'dialogAuthor': 'Anita' },
		{ 'Id': 44, 'dialogAuthor': 'Sahsa' },
		{ 'Id': 5, 'dialogAuthor': 'Boris' },
		{ 'Id': 6, 'dialogAuthor': 'Petr' },
	],
	newMessageText: '',
}

//* =============  REDUCER  ===================================

export const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			if (state.newMessageText === '') {
				alert("Сообщение не должно быть пустым")
			}
			else {
				let newId = createID(state.messages) + 1;
				let newMessage = {
					'Id': newId,
					'mesText': state.newMessageText
				}
				state.messages.push(newMessage);
				state.newMessageText = '';
			}
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