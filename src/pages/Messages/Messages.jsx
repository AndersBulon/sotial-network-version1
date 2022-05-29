import React from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import { MessageItem } from "./MessageItem/MessageItem";
import style from "./Messages.module.css"



function Messages(props) {
	let mesages = props.DataMessagesPage.messages.map
		(message => <MessageItem key={message.mesId} mesId={message.mesId} mesText={message.mesText} />)
	let dialogs = props.DataMessagesPage.dialogs.map
		(dialog => <DialogItem key={dialog.dialogId} dialogId={dialog.dialogId} dialogAuthor={dialog.dialogAuthor} />)
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