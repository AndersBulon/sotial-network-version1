//* =============  IMPORTS  =====================================
import { createID } from "./createID.js";

//* =============  CONSTANTS  ===================================

const ADD_MESSAGE = 'ADD_MESSAGE';

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
				let newId = createID(state.messages) + 1;
				let newMessage = {
					'Id': newId,
					'mesText': action.messageText
				}
				return {
					...state,
					messages: [...state.messages, newMessage]
				};
			
		default:
			return state;
	}
}

//* =============  ActionCreators  _AC  ===================================

export const addMessage_AC = (messageText) => {
	return {
		type: ADD_MESSAGE, messageText: messageText
	}
}
