import React from "react";
import style from "./Messages.module.css"



function Messages(props) {
	let sendMessage = () => {
		props.sendMessage();
	}
	let changeMesagetext = (e) => {
		let text = e.target.value;
		props.changeMesagetext(text);
	}

	return (
		<div className={`${style.content} designe`} >
			<h2 className={style.title + " designe"}>Страничка сообщений</h2>
			<div className={style.dialogs_list + " designe"}>
				{props.dialogs}
			</div>
			<div className={style.messages_list + " designe"}>
				{props.mesages}
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