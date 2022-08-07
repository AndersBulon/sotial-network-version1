//* =============  IMPORTS  =====================================
import { createID } from "./createID.js";

//* =============  CONSTANTS  ===================================

const ADD_MESSAGE = 'ADD_MESSAGE';

//* =============  STATE  INITIOLISATION  =====================

let initialState = {
	messages: [
		{ 'Id': 0, 'mesText': 'Сообщение 1', 'dialogId': 44, time: '1659608275158', typeMess: 'out' },
		{ 'Id': 1, 'mesText': 'Сообщение 1', 'dialogId': 44, time: '1659706275158', typeMess: 'in' },
		{ 'Id': 2, 'mesText': 'Привет это Катя )))', 'dialogId': 2, time: '1659707275158', typeMess: 'in' },
		{ 'Id': 3, 'mesText': 'Сообщение 3', 'dialogId': 44, time: '1659708175158', typeMess: 'out' },
		{ 'Id': 4, 'mesText': 'Сообщение 4', 'dialogId': 3, time: '1659708245158', typeMess: 'in' },
		{ 'Id': 5, 'mesText': 'Сообщение 5', 'dialogId': 3, time: '1659708255158', typeMess: 'in' },
		{ 'Id': 6, 'mesText': 'Сообщение 6', 'dialogId': 2, time: '1659708265158' , typeMess: 'out'},
		{ 'Id': 7, 'mesText': 'Сообщение от Саши', 'dialogId': 44, time: '1659708284158', typeMess: 'in' },
		{ 'Id': 8, 'mesText': 'Привет Санек', 'dialogId': 44, time: '1659708374158', typeMess: 'out' },
		{ 'Id': 9, 'mesText': 'Дарова Андрей', 'dialogId': 44, time: '1659709274158', typeMess: 'in' },
	],
	dialogs: [
		
		{ 'Id': 1, 'dialogAuthor': 'Andrei' },
		{ 'Id': 2, 'dialogAuthor': 'Katja' },
		{ 'Id': 3, 'dialogAuthor': 'Anita' },
		{ 'Id': 44, 'dialogAuthor': 'Sahsa' },
		{ 'Id': 5, 'dialogAuthor': 'Boris' },
		{ 'Id': 6, 'dialogAuthor': 'Fedor' },
	],
	newMessageText: '',
}

//* =============  REDUCER  ===================================

export const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let newId = createID(state.messages) + 1;
			return {
				...state,
				messages: [...state.messages, {'Id': newId, 'mesText': action.messageText,
				'dialogId':action.dialogId, time: Date.now(), typeMess: 'out'	}]
			};

		default:
			return state;
	}
}

//* =============  ActionCreators  _AC  ===================================

export const addMessage_AC = (messageText, dialogId) => {
	return {
		type: ADD_MESSAGE, messageText: messageText, dialogId: dialogId
	}
}
