import React from "react";
import { DialogItem } from "./DialogItem/DialogItem.jsx";
import { MessageItem } from "./MessageItem/MessageItem.jsx";
import style from "./Messages.module.css"



function Messages(props) {
	let sendMessage = () => {
		props.sendMessage();
	}
	let changeMesagetext = (e) => {
		let text = e.target.value;
		props.changeMesagetext(text);
	}
	let message = props.messages.map(message => <MessageItem key={message.Id} mesId={message.Id} mesText={message.mesText} />);
	let dialog =  props.dialogs.map(dialog => <DialogItem key={dialog.Id} dialogId={dialog.Id} dialogAuthor={dialog.dialogAuthor} />);
	

	return (
		<div className={`${style.content} designe`} >
			<h2 className={style.title + " designe"}>Страничка сообщений</h2>
			<div className={style.dialogs_list + " designe"}>
				{dialog}
			</div>
			<div className={style.messages_list + " designe"}>
				{message}
			</div>
			<div className={`${style.sendscreen} designe`}>
				<textarea
					value={props.newMessageText} placeholder="Введите новое сообщение..."
					onChange={changeMesagetext}
					className={`${style.textarea} input`}
				/>
				<button onClick={sendMessage} className={`${style.btn} button`} >
					Send message
				</button>
			</div>
		</div>
	)
}

export default Messages;