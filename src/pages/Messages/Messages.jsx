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
			<input type="textarea" className={`${style.messageInput} input`}
				placeholder="Введите новое сообщение..." autoFocus={true}
				value={messageText}
				{...register("text",
					{ required: "Введите сообщение!!!" })}
				onChange={(e)=> {setMessage(e.currentTarget.value)}}
			/>
			<input type="submit" value="Send Message" className={`${style.sendBtn} button`} />
		</form>
	)
}

function Messages(props) {
	let message = props.messages.map(message => <MessageItem key={message.Id} mesId={message.Id} mesText={message.mesText} />);
	let dialog = props.dialogs.map(dialog => <DialogItem key={dialog.Id} dialogId={dialog.Id} dialogAuthor={dialog.dialogAuthor} />);
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
				<MessageForm sendMessage={props.sendMessage}/>
			</div>
		</div>
	)
}
export default Messages;