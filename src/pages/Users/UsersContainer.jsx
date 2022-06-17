import React from "react";
import { connect } from "react-redux";
import { usersAPI } from "../../api/api.js";
import { Preloader } from "../../components/Preloader/Preloader.jsx";
import { follow, goEndPageNumber, goFirstPageNumber, setCurrentPage,
		   setTotalUsersCount, setUsers, showNextBlock, showPrevBlock,
		   toggleIsFetching, unfollow, changeButtonsСondition } from "../../redux/users_reducer.js";
import Users from "./Users.jsx";


class UsersApiContainer extends React.Component {
	// constructor (props) {
	// 	super(props);
	// }

	componentDidMount() {
		this.props.toggleIsFetching(true)
		usersAPI.setUsersPageParams(this.props.currentPage,this.props.pageSize)
		.then(data => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(data.items)
			this.props.setTotalUsersCount(data.totalCount)
		})
	}
	numPageChanged = (el) => {
		this.props.setCurrentPage(el)
		this.props.toggleIsFetching(true)
		usersAPI.setUsersPageParams(el,this.props.pageSize)
		.then(data => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(data.items)
		})
	}
	showNextBlock = () => {
			let currBlock = this.props.currentPagesBlock;
			currBlock++;
			this.props.showNextBlock(currBlock)
			this.props.toggleIsFetching(true)
			usersAPI.setUsersPageParams(currBlock,this.props.pageSize)
			.then(data => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(data.items)
			})
	}
	showPrevBlock = () => {
			let currBlock = this.props.currentPagesBlock;
			currBlock--;
			this.props.showPrevBlock(currBlock)
			this.props.toggleIsFetching(true)
			usersAPI.setUsersPageParams(currBlock,this.props.pageSize)
			.then(data => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(data.items)
			})
	}
	goEndPageNumber = () => {
		if (this.props.currentPagesBlock < this.props.totalBlockCount) {
			this.props.goEndPageNumber()
			this.props.toggleIsFetching(true)
			usersAPI.setUsersPageParams(this.props.pages,this.props.pageSize)
			.then(data => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(data.items)
			})
		}
	}
	goFirstPageNumber = () => {
		if (this.props.currentPagesBlock > 1) {
			this.props.goFirstPageNumber()
			setTimeout(() => {
				this.props.toggleIsFetching(true)
				usersAPI.setUsersPageParams(this.props.currentPage,this.props.pageSize)
				.then(data => {
					this.props.setUsers(data.items)
					this.props.toggleIsFetching(false)
				})
			}, 50);
		}
	}
	changeButtonsСondition = (disabled, id) => {
		this.props.changeButtonsСondition(disabled, id)

	}

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader/> : null}
				<Users
				
					goFirstPageNumber={this.goFirstPageNumber}
					numPageChanged={this.numPageChanged}
					goEndPageNumber={this.goEndPageNumber}
					showPrevBlock={this.showPrevBlock}
					showNextBlock={this.showNextBlock}
					changeButtonsСondition={this.changeButtonsСondition}

					currentPagesBlock={this.props.currentPagesBlock}
					blockStructure={this.props.blockStructure}
					currentPage={this.props.currentPage}
					totalBlockCount={this.props.totalBlockCount}
					users={this.props.users}
					lockedButton={this.props.lockedButton}

					follow={this.props.follow}
					unfollow={this.props.unfollow}
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
	{follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, showNextBlock,
	showPrevBlock, goEndPageNumber, goFirstPageNumber, toggleIsFetching, changeButtonsСondition} )(UsersApiContainer)

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

