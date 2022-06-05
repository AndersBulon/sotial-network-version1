import { connect } from "react-redux";
import { addPost_AC, changeTextarea_AC } from "../../../redux/profile_reducer.js";
import Posts from "./Posts.jsx";


// function PostsContainer(props) {
// 	let state = props.store.getState();

// 	let postsElement = state.profilePage.posts.map(el => <Post key={el.Id} postText={el.postText} like={el.like} id={el.Id} />)
// 	let sendPost = () => {
// 		props.store.dispatch(addPost_AC())
// 	}

// 	let changeTextarea = (text) => {
// 		props.store.dispatch(changeTextarea_AC(text))
// 	}

// 	return (
// 		<Posts
// 			sendPost={sendPost}
// 			changeTextarea={changeTextarea}
// 			newPostText={state.profilePage.newPostText}
// 			postsElement={postsElement}
// 		/>
// 	);
// }


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
		posts: state.profilePage.posts
	}

}


const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;
