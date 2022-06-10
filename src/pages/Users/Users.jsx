import axios from "axios";
import React from "react";
import style from "./Users.module.css"
import image from "../../assist/images/user.jpg"

class Users extends React.Component {

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
	showMore = () => {
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

			<div className={`${style.content} designe`} >
				<h4>Блок страниц : {this.props.currentPagesBlock} *** Cтраничка : {this.props.currentPage} </h4>

				<div className={style.pages}>

					<span onClick={() => {this.goFirstPageNumber()}} className={this.props.currentPagesBlock === 1 ? style.nextpageblock : style.nextpageblock_activ}>&lt;&lt;</span>


					{this.props.blockStructure[this.props.currentPagesBlock].map(el =>

						<span onClick={() => this.numPageChanged(el)} key={el} className={this.props.currentPage === el ?
							style.selectedPage : style.pageNum}>{el}</span>
					)}
					<span onClick={() => { this.goEndPageNumber() }} className={this.props.currentPagesBlock ===
						this.props.totalBlockCount ? style.prevpageblock : style.prevpageblock_activ}>&gt;&gt;</span>
				</div>


				<div className={style.item}>
					{this.props.users.map(user =>
						<div className={style.userswrapper} key={user.id}>
							<div className={style.avatar}>
								<img src={user.photos.small ? user.photos.small : image} alt="avatar" />
							</div>
							{user.followed ?
								<button onClick={() => { this.props.follow(user.id) }} className={`${style.followBtn} button`}>Follow</button> :
								<button onClick={() => { this.props.unfollow(user.id) }} className={`${style.followBtn} button`}>Unfollow</button>}
							<div className={user.followed ? style.info_act : style.info_disact}>
								<div className={style.status}>{user.status ? user.status.slice(0, 30) : "Нет статуса"}</div>
								<div className={style.fullname}>{user.name}</div>
								<div className={style.country}>{user.country ? user.country : "Страна нет данных"}</div>
								<div className={style.city}>ID: {user.id}</div>
							</div>
						</div>)}
				</div>
				<div className={style.buttons_block}>
					<button onClick={() => { this.showPrevBlock() }} className={`${style.showbtn} button`}>PREVIOUS</button>
					<button onClick={() => { this.showMore() }} className={`${style.showbtn} button`}>NEXT</button>
				</div>

			</div>
		)
	}

}

export default Users;