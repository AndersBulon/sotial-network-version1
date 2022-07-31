import React from "react";
import { connect } from "react-redux";
import { Preloader } from "../../components/Preloader/Preloader.jsx";
import {
	goEndPageNumber, goFirstPageNumber, setCurrentPage, showNextBlock, showPrevBlock,
	getUsersThunkCreator, unFollowThunkCreator, followThunkCreator, setBlockStructure, setNewPaginatorSettings
} from "../../redux/users_reducer.js";
import Users from "./Users.jsx";
import { compose } from "redux";

class UsersApiContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}

	changeButtonsСondition = (disabled, id) => {
		this.props.changeButtonsСondition(disabled, id)
	}
	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Users {...this.props} />
			</>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		totalUsersCount: state.usersPage.totalUsersCount,
		pagesInBlock: state.usersPage.pagesInBlock,
		pageSize: state.usersPage.pageSize,
		currentPagesBlock: state.usersPage.currentPagesBlock,
		blockStructure: state.usersPage.blockStructure,
		currentPage: state.usersPage.currentPage,
		totalBlockCount: state.usersPage.totalBlockCount,
		users: state.usersPage.users,
		pages: state.usersPage.pages,
		isFetching: state.usersPage.isFetching,
		lockedButton: state.usersPage.lockedButton,
		myId: state.auth.myId,
		isAuth: state.auth.isAuth
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		goFirstPageNumber: () => { dispatch(goFirstPageNumber()) },
		goEndPageNumber: () => { dispatch(goEndPageNumber()) },
		setCurrentPage: (currentPage) => { dispatch(setCurrentPage(currentPage)) },
		showPrevBlock: () => { dispatch(showPrevBlock()) },
		showNextBlock: () => { dispatch(showNextBlock()) },
		getUsers: (currentPage, pageSize, totalBlockCount, pages, blockStructure) => {
			 dispatch(getUsersThunkCreator(currentPage, pageSize, totalBlockCount, pages, blockStructure)) },
		setBlockStructure: (blockStructure) => { dispatch(setBlockStructure(blockStructure)) },
		unFollow: (id) => { dispatch(unFollowThunkCreator(id)) },
		follow: (id) => { dispatch(followThunkCreator(id)) },
		setNewPaginatorSettings: (pageSize, pagesInBlock)=> {dispatch(setNewPaginatorSettings(pageSize, pagesInBlock))},
	}
}

const UsersContainer = compose(
	connect(mapStateToProps, mapDispatchToProps),
	// WithAuthRediredct
)(UsersApiContainer)
export default UsersContainer;