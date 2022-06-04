import React from "react";
import { addMessage_AC, changeMessageText_AC } from "../../redux/messages_reducer .js";
import { DialogItem } from "./DialogItem/DialogItem";
import { MessageItem } from "./MessageItem/MessageItem";
import Messages from "./Messages.jsx";




function MessagesContainer(props) {
	let state = props.store.getState();
	let mesages = state.messagesPage.messages.map
		(message => <MessageItem key={message.Id} mesId={message.Id} mesText={message.mesText} />)
	let dialogs = state.messagesPage.dialogs.map
		(dialog => <DialogItem key={dialog.Id} dialogId={dialog.Id} dialogAuthor={dialog.dialogAuthor} />)


	let sendMessage = () => {
		props.store.dispatch(addMessage_AC());
	}
	let changeMesagetext = (text) => {
		props.store.dispatch(changeMessageText_AC(text))
	}

	return (
		<Messages
			mesages={mesages}
			dialogs={dialogs}
			newMessageText={state.messagesPage.newMessageText}
			sendMessage={sendMessage}
			changeMesagetext={changeMesagetext}
		/>
	)
}

export default MessagesContainer;