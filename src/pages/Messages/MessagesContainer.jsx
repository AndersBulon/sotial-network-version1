import { connect } from "react-redux";
import { addMessage_AC, changeMessageText_AC } from "../../redux/messages_reducer .js";
import Messages from "./Messages.jsx";



let mapStateToProps = (state) => {
	return {
		newMessageText: state.messagesPage.newMessageText,
		messages: state.messagesPage.messages,
		dialogs: state.messagesPage.dialogs,
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => {
			dispatch(addMessage_AC());
		},
		changeMesagetext: (text) => {
			dispatch(changeMessageText_AC(text));
		},

	}
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;