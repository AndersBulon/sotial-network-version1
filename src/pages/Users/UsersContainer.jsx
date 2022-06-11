import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { follow_AC, goEndPageNumber_AC, goFirstPageNumber_AC, setCurrentPage_AC, setTotalUsersCount_AC, setUsers_AC, showMore_AC, showPrevBlock_AC, unfollow_AC } from "../../redux/users_reducer.js";
import Users from "./Users.jsx";



class UsersApiContainer extends React.Component {
	// constructor (props) {
	// 	super(props);
	// }

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items)
			this.props.setTotalUsersCount(response.data.totalCount)
		})
	}
	numPageChanged = (el) => {
		this.props.setCurrentPage(el)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items)
		})
	}
	showNextBlock = () => {
		if (this.props.currentPagesBlock < this.props.totalBlockCount) {
			let currBlock = this.props.currentPagesBlock;
			currBlock++;
			this.props.showMore(currBlock)
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currBlock}&count=${this.props.pageSize}`).then(response => {
				this.props.setUsers(response.data.items)
			})
		}
	}
	showPrevBlock = () => {
		if (this.props.currentPagesBlock > 1) {
			let currBlock = this.props.currentPagesBlock;
			currBlock--;
			this.props.showPrevBlock(currBlock)
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currBlock}&count=${this.props.pageSize}`).then(response => {
				this.props.setUsers(response.data.items)
			})
		}
	}
	goEndPageNumber = () => {
		if (this.props.currentPagesBlock < this.props.totalBlockCount) {
			this.props.goEndPageNumber()
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pages}&count=${this.props.pageSize}`).then(response => {
				this.props.setUsers(response.data.items)
			})
		}
	}
	goFirstPageNumber = () => {
		if (this.props.currentPagesBlock > 1) {
			this.props.goFirstPageNumber()
			setTimeout(() => {
				axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
					this.props.setUsers(response.data.items)
				})
			}, 50);
		}
	}

	render() {
		return (
			<Users 
				goFirstPageNumber={this.goFirstPageNumber}
				numPageChanged={this.numPageChanged}
				goEndPageNumber={this.goEndPageNumber}
				showPrevBlock={this.showPrevBlock}

				currentPagesBlock={this.props.currentPagesBlock}
				blockStructure={this.props.blockStructure}
				currentPage={this.props.currentPage}
				totalBlockCount={this.props.totalBlockCount}
				users={this.props.users}
				
				follow={this.props.follow}
				unfollow={this.props.unfollow}
			/>
		)
	}
}


let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => { dispatch(follow_AC(userId)) },
		unfollow: (userId) => { dispatch(unfollow_AC(userId)) },	
		setUsers: (users) => { dispatch(setUsers_AC(users)) },
		setCurrentPage: (currentPage) => { dispatch(setCurrentPage_AC(currentPage)) },
		setTotalUsersCount: (TotalUsersCount) => { dispatch(setTotalUsersCount_AC(TotalUsersCount)) },
		showMore: (currBlock) => { dispatch(showMore_AC(currBlock)) },
		showPrevBlock: (currBlock) => { dispatch(showPrevBlock_AC(currBlock)) },
		goEndPageNumber: () => { dispatch(goEndPageNumber_AC()) },
		goFirstPageNumber: () => { dispatch(goFirstPageNumber_AC()) },
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
		pages: state.usersPage.pages
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer)

export default UsersContainer;
