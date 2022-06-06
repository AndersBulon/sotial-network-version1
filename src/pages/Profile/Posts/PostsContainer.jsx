import { connect } from "react-redux";
import { addPost_AC, changeTextarea_AC } from "../../../redux/profile_reducer.js";
import Posts from "./Posts.jsx";


let mapDispatchToProps = (dispatch) => {
	return {
		sendPost: () => {
			dispatch(addPost_AC())
		},
		changeTextarea: (text) => {
			dispatch(changeTextarea_AC(text))
		}
	}
}

let mapStateToProps = (state) => {
	return {
		newPostText: state.profilePage.newPostText,
		posts: state.profilePage.posts,
	}

}


const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;
