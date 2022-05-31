import { rerenderTree } from "../render.js";

let state = {
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
}


let createID = (arr) => {
	let newArr = [];
	arr.forEach(element => {
		newArr.push(element.Id)
	});
	let max = newArr.sort((a, b) => a - b)[newArr.length - 1];
	return max;
}


export let addPost = () => {

	let newId = createID(state.profilePage.posts) + 1;
	let newPost = {
		'Id': newId,
		'postText': state.profilePage.newPostText,
		'like': '0'
	}
	state.profilePage.posts.push(newPost);
	changePostText('');

	rerenderTree(state);
}

export let changePostText = (newValue) => {
	state.profilePage.newPostText = newValue;
	rerenderTree(state);
}

export { state };
