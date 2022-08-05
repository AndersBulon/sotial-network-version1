import React from "react";
import { useParams } from "react-router-dom";
import { DialogItem } from "./DialogItem/DialogItem.jsx";
import { MessageItem } from "./MessageItem/MessageItem.jsx";
import style from "./Messages.module.css"

export function Messages(props) {
	const { id } = useParams()

	return (
		<div className={style.wrapper} >
			<h3 className={style.title}>Messages</h3>
			<div className={style.content}>
				{!id && <DialogItem {...props} />}
				{id && <MessageItem {...props} dialogId={id}/>}
			</div>
		</div>
	)
}

export default Messages;