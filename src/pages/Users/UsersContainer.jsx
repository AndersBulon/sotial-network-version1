import { connect } from "react-redux";
import { follow_AC, goEndPageNumber_AC, goFirstPageNumber_AC, setCurrentPage_AC, setTotalUsersCount_AC, setUsers_AC, showMore_AC, showPrevBlock_AC, unfollow_AC } from "../../redux/users_reducer.js";
import Users from "./Users.jsx";



let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(follow_AC(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollow_AC(userId))
		},
		setUsers: (users) => {
			dispatch(setUsers_AC(users))
		},
		setCurrentPage: (currentPage) => {
			dispatch(setCurrentPage_AC(currentPage))
		},
		setTotalUsersCount: (TotalUsersCount) => {
			dispatch(setTotalUsersCount_AC(TotalUsersCount))
		},
		showMore: (currBlock) => {
			dispatch(showMore_AC(currBlock))
		},
		showPrevBlock: (currBlock) => {
			dispatch(showPrevBlock_AC(currBlock))
		},

		goEndPageNumber: () => {
			dispatch(goEndPageNumber_AC())
		},
		goFirstPageNumber: () => {
			dispatch(goFirstPageNumber_AC())
		},

		}
	}


let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		currentPagesBlock: state.usersPage.currentPagesBlock,
		blockStructure: state.usersPage.blockStructure,
		totalBlockCount: state.usersPage.totalBlockCount,
		pages: state.usersPage.pages
	}

}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
