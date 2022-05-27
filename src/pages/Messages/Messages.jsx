import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Messages.module.css"

const Dialog = (props) => {
	return (
		<div className={style.dialog_item + " designe"}>
			<NavLink to={props.authorDialogId}>{props.authorDialogName}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return (
		<div className={style.message_item + " designe"}>
			{props.messageText}
		</div>
	)

}

function Messages(props) {
	return (
		<div className={`${style.content} designe`} >
			<h2 className={style.title + " designe"}>Страничка сообщений</h2>
			<div className={style.dialogs_list + " designe"}>
				<Dialog authorDialogId='1' authorDialogName='Andrei' />
				<Dialog authorDialogId='2' authorDialogName='Sergei' />
				<Dialog authorDialogId='3' authorDialogName='Petr' />
			</div>
			<div className={style.messages_list + " designe"}>
				<Message messageText='Сообщение 1' />
				<Message messageText='Сообщение 2' />
				<Message messageText='Сообщение 3' />
				<Message messageText='Сообщение 4' />
				<Message messageText='Сообщение 5' />
			</div>
		</div>
	)
}

export default Messages;