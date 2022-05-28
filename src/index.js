import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
	{ 'postId': 1, 'postText': 'Привет это пост 1', 'like': '112' },
	{ 'postId': 2, 'postText': 'Привет это пост 2', 'like': '67' },
	{ 'postId': 3, 'postText': 'Привет это пост 3', 'like': '72' },
	{ 'postId': 4, 'postText': 'Привет это пост 4', 'like': '111' },
	{ 'postId': 5, 'postText': 'Привет это пост 5', 'like': '93' },
]
let messagesData = [
	{ 'mesId': 1, 'mesText': 'Сообщение 1' },
	{ 'mesId': 2, 'mesText': 'Привет это Катя )))' },
	{ 'mesId': 3, 'mesText': 'Сообщение 3' },
	{ 'mesId': 4, 'mesText': 'Сообщение 4' },
	{ 'mesId': 5, 'mesText': 'Сообщение 5' },
	{ 'mesId': 6, 'mesText': 'Сообщение 6' },
	{ 'mesId': 7, 'mesText': 'Сообщение 7' },
]
let dialogsData = [
	{ 'dialogId': 1, 'dialogAuthor': 'Andrei' },
	{ 'dialogId': 2, 'dialogAuthor': 'Katja' },
	{ 'dialogId': 3, 'dialogAuthor': 'Anita' },
	{ 'dialogId': 44, 'dialogAuthor': 'Sahsa' },
	{ 'dialogId': 5, 'dialogAuthor': 'Boris' },
	{ 'dialogId': 6, 'dialogAuthor': 'Petr' },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App postdata={postsData} messagedata={messagesData} dialogdata={dialogsData} />
		</BrowserRouter>
	</React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
