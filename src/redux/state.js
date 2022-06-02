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
			]
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

		if (action.type === 'ADD-POST') {
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
		else if (action.type === 'CHANGE-POST-TEXT') {
			this._state.profilePage.newPostText = action.newValue;
			this._callSubscriber(this._state);
		}
	}

}
export { store };
window.store = store;