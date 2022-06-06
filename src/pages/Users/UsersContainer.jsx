import { connect } from "react-redux";
import { follow_AC, setUsers_AC, unfollow_AC } from "../../redux/users_reducer.js";
import Users from "./Users.jsx";



let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(follow_AC(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollow_AC(userId))
		},
		setusers: (users) => {
			dispatch(setUsers_AC(users))
		}
		}
	}


let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	}

}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
