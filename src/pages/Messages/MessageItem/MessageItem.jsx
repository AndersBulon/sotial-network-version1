import React from "react";
import { getDateAndTime } from "../../../components/HelpComponents/HelpComponents.js";
import { MessageForm } from "../MessageForm/MessageForm.jsx";
import style from "./MessageItem.module.css"


const MessageItem = (props) => {
	const messages = props.messages.filter(function (e) {
		return "" + e.dialogId === "" + props.dialogId;
	});
	const author = props.dialogs.filter(function (e) {
		return "" + e.Id === "" + props.dialogId;
	});

	let messageItem = messages.map(message =>
		<div className={message.typeMess === "out" ? style.message_item : style.message_itemIn} key={message.Id}>
			<div className={style.sendFrom}>
				<span>Message from: </span>{message.typeMess === "in" ? author[0].dialogAuthor : "My"}
			</div>
			<div className={style.messageText}>{message.mesText}</div>
			<div className={style.messageTime}>
				<div className={style.messageTime}>{getDateAndTime(message.time)[1]}</div>
				<div className={style.messageTime}>{getDateAndTime(message.time)[0]}</div>
			</div>


		</div>);
	return (
		<div className={style.container}>
			{messages.length === 0 && <div className={style.noMessages}>Selected user has no messages.</div>}
			{messages.length > 0 &&
				<div className={style.itemsContainer}>
					{messageItem}
				</div>}
			{messages.length > 0 && 
			<div className={style.formContainer}>
				<MessageForm {...props}/>
			</div>}

		</div>)
}

export { MessageItem };