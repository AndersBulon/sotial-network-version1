import React from "react";
import { connect } from "react-redux";
import { Preloader } from "../../components/Preloader/Preloader.jsx";
import {
	goEndPageNumber, goFirstPageNumber, setCurrentPage, showNextBlock, showPrevBlock,
	getUsersThunkCreator, unFollowThunkCreator, followThunkCreator
} from "../../redux/users_reducer.js";
import Users from "./Users.jsx";
import { compose } from "redux";
// import { WithAuthRediredct } from "../../components/HOC/WithAuthRedirect.js";


class UsersApiContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}
	numPageChanged = (el) => {
		this.props.setCurrentPage(el)
		this.props.getUsers(el, this.props.pageSize)
	}
	showPrevBlock = () => {
		this.props.showPrevBlock();
		setTimeout(() => {
			this.props.getUsers(this.props.currentPage, this.props.pageSize)
		}, 100);
	}
	showNextBlock = () => {
		this.props.showNextBlock()
		setTimeout(() => {
			this.props.getUsers(this.props.currentPage, this.props.pageSize)
		}, 100);
	}
	goEndPageNumber = () => {
		this.props.goEndPageNumber()
		this.props.getUsers(this.props.pages, this.props.pageSize)
	}
	goFirstPageNumber = () => {
		this.props.goFirstPageNumber()
		setTimeout(() => {
			this.props.getUsers(this.props.currentPage, this.props.pageSize)
		}, 50);
	}
	changeButtonsСondition = (disabled, id) => {
		this.props.changeButtonsСondition(disabled, id)
	}
	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Users
					goFirstPageNumber={this.goFirstPageNumber}
					numPageChanged={this.numPageChanged}
					goEndPageNumber={this.goEndPageNumber}
					showPrevBlock={this.showPrevBlock}
					showNextBlock={this.showNextBlock}

					currentPagesBlock={this.props.currentPagesBlock}
					blockStructure={this.props.blockStructure}
					currentPage={this.props.currentPage}
					totalBlockCount={this.props.totalBlockCount}
					users={this.props.users}
					lockedButton={this.props.lockedButton}
					nextPrevButton={this.props.nextPrevButton}
					myId={this.props.myId}
					isAuth={this.props.isAuth}

					follow={this.props.follow}
					unFollow={this.props.unFollow}

				/>
			</>
		)
	}
}


let mapStateToProps = (state) => {
	return {
		currentPagesBlock: state.usersPage.currentPagesBlock,
		blockStructure: state.usersPage.blockStructure,
		currentPage: state.usersPage.currentPage,
		totalBlockCount: state.usersPage.totalBlockCount,
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		pages: state.usersPage.pages,
		isFetching: state.usersPage.isFetching,
		lockedButton: state.usersPage.lockedButton,
		pagesInBlock: state.usersPage.pagesInBlock,
		myId: state.auth.myId,
		isAuth: state.auth.isAuth
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		setCurrentPage: (currentPage) => { dispatch(setCurrentPage(currentPage)) },
		showNextBlock: () => { dispatch(showNextBlock()) },
		showPrevBlock: () => { dispatch(showPrevBlock()) },
		goEndPageNumber: () => { dispatch(goEndPageNumber()) },
		goFirstPageNumber: () => { dispatch(goFirstPageNumber()) },
		getUsers: (currentPage, pageSize) => { dispatch(getUsersThunkCreator(currentPage, pageSize)) },
		unFollow: (id) => { dispatch(unFollowThunkCreator(id)) },
		follow: (id) => { dispatch(followThunkCreator(id)) },
	}
}

const UsersContainer = compose(
	connect(mapStateToProps, mapDispatchToProps),
	// WithAuthRediredct
)(UsersApiContainer)
export default UsersContainer;