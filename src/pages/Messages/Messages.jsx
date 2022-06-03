import React from "react";
import { addMessage_AC, changeMessageText_AC } from "../../redux/messages_reducer .js";
import { DialogItem } from "./DialogItem/DialogItem";
import { MessageItem } from "./MessageItem/MessageItem";
import style from "./Messages.module.css"



function Messages(props) {
	let mesages = props.DataMessagesPage.messages.map
		(message => <MessageItem key={message.Id} mesId={message.Id} mesText={message.mesText} />)
	let dialogs = props.DataMessagesPage.dialogs.map
		(dialog => <DialogItem key={dialog.Id} dialogId={dialog.Id} dialogAuthor={dialog.dialogAuthor} />)
	let newMessageText = props.DataMessagesPage.newMessageText;

	let sendMessage = () => {
		props.dispatch(addMessage_AC());
	}
	let changeMesagetext = (e) => {
		let text = e.target.value;
		props.dispatch(changeMessageText_AC(text))
	}

	return (
		<div className={`${style.content} designe`} >
			<h2 className={style.title + " designe"}>Страничка сообщений</h2>
			<div className={style.dialogs_list + " designe"}>
				{dialogs}
			</div>
			<div className={style.messages_list + " designe"}>
				{mesages}
			</div>
			<div className={`${style.sendscreen} designe`}>
				<textarea value={newMessageText} placeholder="Введите новое сообщение здесь..." 
					onChange={changeMesagetext} 
					className={style.textarea}>
				</textarea>
				<button onClick={sendMessage} className={`${style.btn} button`} >
					Send
				</button>
			</div>
		</div>
	)
}

export default Messages;