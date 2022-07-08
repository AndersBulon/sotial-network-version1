import { connect } from "react-redux";
import { addPost_AC } from "../../../redux/profile_reducer.js";
import Posts from "./Posts.jsx";


let mapDispatchToProps = (dispatch) => {
	return {
		sendPost: (newPost) => {
			dispatch(addPost_AC(newPost))
		}
	}
}

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
	}

}


const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;
