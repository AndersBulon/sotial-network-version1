import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Preloader } from "../../components/Preloader/Preloader.jsx";
import { follow, goEndPageNumber, goFirstPageNumber, setCurrentPage, setTotalUsersCount, setUsers, showNextBlock, showPrevBlock, toggleIsFetching, unfollow } from "../../redux/users_reducer.js";
import Users from "./Users.jsx";


class UsersApiContainer extends React.Component {
	// constructor (props) {
	// 	super(props);
	// }

	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(response.data.items)
			this.props.setTotalUsersCount(response.data.totalCount)
		})
	}
	numPageChanged = (el) => {
		this.props.setCurrentPage(el)
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.pageSize}`).then(response => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(response.data.items)
		})
	}
	showNextBlock = () => {
		if (this.props.currentPagesBlock < this.props.totalBlockCount) {
			let currBlock = this.props.currentPagesBlock;
			currBlock++;
			this.props.showNextBlock(currBlock)
			this.props.toggleIsFetching(true)
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currBlock}&count=${this.props.pageSize}`).then(response => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items)
			})
		}
	}
	showPrevBlock = () => {
		if (this.props.currentPagesBlock > 1) {
			let currBlock = this.props.currentPagesBlock;
			currBlock--;
			this.props.showPrevBlock(currBlock)
			this.props.toggleIsFetching(true)
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currBlock}&count=${this.props.pageSize}`).then(response => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items)
			})
		}
	}
	goEndPageNumber = () => {
		if (this.props.currentPagesBlock < this.props.totalBlockCount) {
			this.props.goEndPageNumber()
			this.props.toggleIsFetching(true)
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pages}&count=${this.props.pageSize}`).then(response => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items)
			})
		}
	}
	goFirstPageNumber = () => {
		if (this.props.currentPagesBlock > 1) {
			this.props.goFirstPageNumber()
			setTimeout(() => {
				this.props.toggleIsFetching(true)
				axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
					this.props.setUsers(response.data.items)
					this.props.toggleIsFetching(false)
				})
			}, 50);
		}
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

					currentPagesBlock={this.props.currentPagesBlock}
					blockStructure={this.props.blockStructure}
					currentPage={this.props.currentPage}
					totalBlockCount={this.props.totalBlockCount}
					users={this.props.users}

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
	}
}

const UsersContainer = connect(mapStateToProps,
	{follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, showNextBlock, showPrevBlock, goEndPageNumber, goFirstPageNumber, toggleIsFetching } )(UsersApiContainer)

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

