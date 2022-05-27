import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Messages.module.css"

const Dialog = (props) => {
	return (
		<div className={style.dialog_item + " designe"}>
			<NavLink to={(props.dialogId).toString()}> {props.dialogAuthor}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return (
		<div className={style.message_item + " designe"}>
			{props.mesText}
		</div>
	)

}

let dialogsData = [
	{ 'dialogId': 1, 'dialogAuthor': 'Andrei' },
	{ 'dialogId': 2, 'dialogAuthor': 'Sergei' },
	{ 'dialogId': 3, 'dialogAuthor': 'Anita' },
	{ 'dialogId': 44, 'dialogAuthor': 'Sahsa' },
	{ 'dialogId': 5, 'dialogAuthor': 'Boris' },
	{ 'dialogId': 6, 'dialogAuthor': 'Petr' },
]
let messagesData = [
	{ 'mesId': 1, 'mesText': 'Сообщение 1' },
	{ 'mesId': 2, 'mesText': 'Сообщение 2' },
	{ 'mesId': 3, 'mesText': 'Сообщение 3' },
	{ 'mesId': 4, 'mesText': 'Сообщение 4' },
	{ 'mesId': 5, 'mesText': 'Сообщение 5' },
	{ 'mesId': 6, 'mesText': 'Сообщение 6' },
	{ 'mesId': 7, 'mesText': 'Сообщение 7' },
]

let dialogs = dialogsData.map(dialog => <Dialog key={dialog.dialogId} dialogId={dialog.dialogId} dialogAuthor={dialog.dialogAuthor} />)
let mesages = messagesData.map(message => <Message key={message.mesId} mesId={message.mesId} mesText={message.mesText} />)


function Messages(props) {
	return (
		<div className={`${style.content} designe`} >
			<h2 className={style.title + " designe"}>Страничка сообщений</h2>
			<div className={style.dialogs_list + " designe"}>
				{dialogs}
			</div>
			<div className={style.messages_list + " designe"}>
				{mesages}
			</div>
		</div>
	)
}

export default Messages;