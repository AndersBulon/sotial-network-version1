import React from "react";
import { useForm } from "react-hook-form";
import style from "./MessageForm.module.css"

export const MessageForm = (props) => {
	const sendBtn = document.getElementById("send_message_btn")
	const messInput = document.getElementById("send_message_input")
	const [messageText, setMessage] = React.useState("")
	
	if (sendBtn) {
		if (messageText.length > 0) {
			sendBtn.classList.add(`${style._active}`)
		}
		if (messageText.length === 0) {
			sendBtn.classList.remove(`${style._active}`)
		}
	}

	const {
		handleSubmit,
		reset,
		register,
	} = useForm({ mode: "onBlur" })

	const onSubmit = (data) => {
		props.sendMessage(data.text, props.dialogId);
		setMessage("");
		reset()
		messInput.style.height = "43px"
	}

	function textAreaAdjust(e) {
		if (e.target.scrollHeight > e.target.style.height) {
			e.target.style.height = "1px";
			e.target.style.height = 10 + (e.target.scrollHeight) + "px";
		}
	}

	const changeTextAreaValue = (e) => {
		setMessage(e.currentTarget.value)
		e.target.style.height = "1px";
		e.target.style.height = (10 + e.target.scrollHeight) + "px";
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.messageForm}>
			<textarea className={style.messageInput} id="send_message_input"
				placeholder="Введите сообщение..."
				value={messageText}
				{...register("text")}
				onFocus={textAreaAdjust}
				onChange={changeTextAreaValue}
			/>
			<button id="send_message_btn" type="submit" 
				className={style.sendBtn} />
		</form>
	)
}