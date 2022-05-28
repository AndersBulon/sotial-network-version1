import React from "react";
import { messagesData } from "../../../index.js";
import style from "./MessageItem.module.css"


const MessageItem = (props) => {
	return (
		<div className={style.message_item + " designe"}>
			{props.mesText}
		</div>
	)
}

let mesages = messagesData.map(message => <MessageItem key={message.mesId} mesId={message.mesId} mesText={message.mesText} />)

export {MessageItem, mesages};