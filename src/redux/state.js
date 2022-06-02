//* =============  CONSTANTS  ===================================

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';

//* =============  STORE  STATE  DISPATC  ===================================

let store = {
	_state: {
		profilePage: {
			posts: [
				{ 'Id': 1, 'postText': 'Привет это пост 1', 'like': '112' },
				{ 'Id': 2, 'postText': 'Привет это пост 2', 'like': '67' },
				{ 'Id': 7, 'postText': 'Привет это пост от Аниты', 'like': '72' },
				{ 'Id': 4, 'postText': 'Привет это пост 4', 'like': '111' },
				{ 'Id': 5, 'postText': 'Привет это пост 5', 'like': '93' },
			],
			newPostText: '',
		},
		messagesPage: {
			messages: [
				{ 'Id': 1, 'mesText': 'Сообщение 1' },
				{ 'Id': 2, 'mesText': 'Привет это Катя )))' },
				{ 'Id': 3, 'mesText': 'Сообщение 3' },
				{ 'Id': 4, 'mesText': 'Сообщение 4' },
				{ 'Id': 5, 'mesText': 'Сообщение 5' },
				{ 'Id': 6, 'mesText': 'Сообщение 6' },
				{ 'Id': 7, 'mesText': 'Сообщение 7' },
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
	},
	_callSubscriber() {
		// console.log("State changed");
	},
	getState() {

		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	createID(arr) {
		let newArr = [];
		arr.forEach(element => {
			newArr.push(element.Id)
		});
		let max = newArr.sort((a, b) => a - b)[newArr.length - 1];
		return max;
	},

	dispatch(action) {

		if (action.type === ADD_POST) {
			let newId = this.createID(this._state.profilePage.posts) + 1;
			let newPost = {
				'Id': newId,
				'postText': this._state.profilePage.newPostText,
				'like': '0'
			}
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		}
		else if (action.type === CHANGE_POST_TEXT) {
			this._state.profilePage.newPostText = action.newValue;
			this._callSubscriber(this._state);
		}
		else if (action.type === ADD_MESSAGE) {
			let enterMessage = this._state.messagesPage.newMessageText;
			if (enterMessage === '') {
				alert("Сообщение не должно быть пустым!!!")
			}
			else {
				let newId = this.createID(this._state.messagesPage.messages) + 1;
				let newMessage = {
					'Id': newId,
					'mesText': this._state.messagesPage.newMessageText,
				}
				this._state.messagesPage.messages.push(newMessage);
			}
			this._state.messagesPage.newMessageText = '';
			this._callSubscriber(this._state);
		}
		else if (action.type === CHANGE_MESSAGE_TEXT) {
			this._state.messagesPage.newMessageText = action.newValue;
			this._callSubscriber(this._state);
		}
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
export const addMessage_AC = () => {
	return {
		type: ADD_MESSAGE
	}
}
export const changeMessageText_AC = (text) => {
	return { type: CHANGE_MESSAGE_TEXT, newValue: text }
}

//* =============  EXPORTS  ===================================

export { store };
window.store = store;