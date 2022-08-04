import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DialogItem } from "./DialogItem/DialogItem.jsx";
import { MessageItem } from "./MessageItem/MessageItem.jsx";
import style from "./Messages.module.css"

const MessageForm = (props) => {
	let [messageText, setMessage] = useState("")
	const {
		handleSubmit,
		reset,
		register,
		formState: { errors },
	} = useForm({ mode: "onBlur" })

	const onSubmit = () => {
		props.sendMessage(messageText);
		setMessage("");
		reset()
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.messageForm} >
			{errors.text && <p className={`${style.messageErr} error`}>{errors.text.message }</p>}
			<textarea className={style.messageInput} 
				placeholder="Введите новое сообщение..." 
				value={messageText}
				{...register("text",
					{ required: "Введите сообщение!!!" })}
				onChange={(e)=> {setMessage(e.currentTarget.value)}}
			/>
			<input type="submit" value="Send" className={`${style.sendBtn} button`} />
		</form>
	)
}

function Messages(props) {
	let message = props.messages.map(message => <MessageItem key={message.Id} mesId={message.Id} mesText={message.mesText} />);
	let dialog = props.dialogs.map(dialog => <DialogItem key={dialog.Id} dialogId={dialog.Id} dialogAuthor={dialog.dialogAuthor} />);
	return (
		<div className={style.content} >
			<h3 className={style.title}>Messages</h3>
			<div className={style.dialogs_list}>
				{dialog}
			</div>
			<div className={style.messages_list}>
				{message}
			</div>
			<div className={style.sendscreen}>
				<MessageForm sendMessage={props.sendMessage}/>
			</div>
		</div>
	)
}
export default Messages;