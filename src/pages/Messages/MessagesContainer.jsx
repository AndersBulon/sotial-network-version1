import { connect } from "react-redux";
import { compose } from "redux";
import { WithAuthRediredct } from "../../components/HOC/WithAuthRedirect.js";
import { addMessage_AC } from "../../redux/messages_reducer .js";
import Messages from "./Messages.jsx";



let mapStateToProps = (state) => {
	return {
		messages: state.messagesPage.messages,
		dialogs: state.messagesPage.dialogs,
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: (messageText) => {
			dispatch(addMessage_AC(messageText));
		},
	}
}

const MessagesContainer = compose(
	connect(mapStateToProps, mapDispatchToProps),
	WithAuthRediredct
)(Messages)



export default MessagesContainer;