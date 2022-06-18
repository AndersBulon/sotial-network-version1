import React from "react";
import { connect } from "react-redux";
import { Preloader } from "../../components/Preloader/Preloader.jsx";
import {
	goEndPageNumber, goFirstPageNumber, setCurrentPage,
	showNextBlock, showPrevBlock,
	getUsersThunkCreator, unFollowThunkCreator, followThunkCreator
} from "../../redux/users_reducer.js";
import Users from "./Users.jsx";


class UsersApiContainer extends React.Component {
	// constructor (props) {
	// 	super(props);
	// }

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}
	numPageChanged = (el) => {
		this.props.setCurrentPage(el)
		this.props.getUsers(el, this.props.pageSize)

	}
	showNextBlock = () => {
		let currBlock = this.props.currentPagesBlock;
		currBlock++;
		this.props.showNextBlock(currBlock)
		this.props.getUsers(currBlock, this.props.pageSize)
	}
	showPrevBlock = () => {
		let currBlock = this.props.currentPagesBlock;
		currBlock--;
		this.props.showPrevBlock(currBlock)
		this.props.getUsers(currBlock, this.props.pageSize)
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
		lockedButton: state.usersPage.lockedButton

	}
}

const UsersContainer = connect(mapStateToProps,
	{
		setCurrentPage,showNextBlock, showPrevBlock,
		goEndPageNumber, goFirstPageNumber,
		getUsers: getUsersThunkCreator, unFollow: unFollowThunkCreator, follow: followThunkCreator,
	})(UsersApiContainer)

export default UsersContainer;

// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		follow: (userId) => { dispatch(follow_AC(userId)) },
// 		unfollow: (userId) => { dispatch(unfollow_AC(userId)) },
// 		setUsers: (users) => { dispatch(setUsers_AC(users)) },
// 		setCurrentPage: (currentPage) => { dispatch(setCurrentPage_AC(currentPage)) },
// 		setTotalUsersCount: (TotalUsersCount) => { dispatch(setTotalUsersCount_AC(TotalUsersCount)) },
// 		showMore: (currBlock) => { dispatch(showMore_AC(currBlock)) },
// 		showPrevBlock: (currBlock) => { dispatch(showPrevBlock_AC(currBlock)) },
// 		goEndPageNumber: () => { dispatch(goEndPageNumber_AC()) },
// 		goFirstPageNumber: () => { dispatch(goFirstPageNumber_AC()) },
// 		toggleIsFetching: (isFetching) => { dispatch(toggleIsFetching_AC(isFetching)) },
// 	}
// }

