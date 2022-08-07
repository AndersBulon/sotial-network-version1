import React from "react";
// import { legacy_createStore } from "redux";
import { getDateAndTime } from "../../../components/HelpComponents/HelpComponents.js";
import { MessageForm } from "../MessageForm/MessageForm.jsx";
import style from "./MessageItem.module.css"


const MessageItem = (props) => {

	const messagesEndRef = React.useRef(null)
	let [formHeight, setformHeight] = React.useState(null)

	const scrollToBottom = () => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ block: "end", inline: "nearest", behavior: "smooth" })
		}
	}

	const formSizeControll = () => {
		let formSizeRef = document.getElementById('formWrapper')
		formSizeRef.addEventListener("DOMSubtreeModified", function () {
			setformHeight(formSizeRef.clientHeight)
			setTimeout(() => {
				messagesEndRef.current.style.height = formSizeRef.clientHeight - 3 + "px";
				messagesEndRef.current.scrollIntoView({ block: "end", inline: "nearest", behavior: "smooth" })
			}, 1);

		}, false);
	}

	const messages = props.messages.filter(function (e) {
		return "" + e.dialogId === "" + props.dialogId;
	});

	React.useEffect(scrollToBottom, [messages]);
	React.useEffect(formSizeControll, [formHeight]);



	const author = props.dialogs.filter(function (e) {
		return "" + e.Id === "" + props.dialogId;
	});

	let messageItem = messages.map(message =>
		<div className={message.typeMess === "out" ? style.message_item : style.message_itemIn} key={message.Id}>
			<div className={style.sendFrom}>
				<span>Message from: </span>{message.typeMess === "in" ? author[0].dialogAuthor : "My"}
			</div>
			<div className={style.messageText}>{message.mesText}</div>
			<div className={style.messageTimeDataContainer}>
				<div className={style.messageData}>{getDateAndTime(message.time)[1]}</div>
				<div className={style.messageTime}>{getDateAndTime(message.time)[0]}</div>
			</div>
		</div>);

	return (
		<div className={style.container}>
			{messages.length === 0 && <div className={style.noMessages}>Selected user has no messages.</div>}
			{messages.length > 0 &&
				<div className={style.itemsContainer}>
					{messageItem}
					<div className={style.messagesEndRef} ref={messagesEndRef} />
				</div>}
			<div className={style.formContainer} id="formWrapper">
				<MessageForm {...props} />
			</div>
		</div>)
}

export { MessageItem };