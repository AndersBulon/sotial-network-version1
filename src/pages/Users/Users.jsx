import React from "react";
import style from "./Users.module.css"
import image from "../../assets/images/user.jpg"
import { NavLink } from "react-router-dom";

let Users = (props) => {
	return (

		<div className={`${style.content} designe`} >
			<h4>Страничка пользователей</h4>

			<div className={style.pages}>
				<button disabled={props.currentPagesBlock === 1} onClick={() => { props.goFirstPageNumber() }} className={style.left_arr}>
					&lt;&lt;
				</button>

				{props.blockStructure[props.currentPagesBlock].map(el =>
					<span onClick={() => props.numPageChanged(el)} key={el} className={props.currentPage === el ? style.selectedPage : style.pageNum}>
						{el}
					</span>
				)}

				<button disabled={props.currentPagesBlock === props.totalBlockCount} onClick={() => { props.goEndPageNumber() }} className={style.right_arr}>
					&gt;&gt;
				</button>
			</div>

			<div className={style.item}>
				{props.users.map(user =>
					<div className={style.userswrapper} key={user.id}>
						<div className={style.avatar}>
							<NavLink to={`/profile/${user.id}`}>
								<img src={user.photos.small ? user.photos.small : image} alt="avatar" />
							</NavLink>
						</div>
						{!props.isAuth
							?
							<div className={style.btnCont}>
								<div className={style.wrap}>
									<div className={style.textus}>Locked</div>
									<img alt="" className={`${style.lockedBtn}`} />
								</div>
							</div>

							:
							<div className={style.btnCont}>
								{user.followed ?
									<button disabled={props.lockedButton.some(id => id === user.id)} onClick={() => {
										props.unFollow(user.id)
									}} className={`${style.followBtn} button`}>
										Followed
									</button>
									:
									<button disabled={props.lockedButton.some(id => id === user.id)} onClick={() => {
										props.follow(user.id)
									}} className={`${style.followBtn} button`}>
										Unfollowed
									</button>}
							</div>
						}

						<div className={`${user.followed ? style.info_act : style.info_disact}
						 ${(user.id === props.myId) ? style.my : style.a}`} >
							<div className={style.status}>{user.status ? user.status.slice(0, 50) : "Нет статуса"}</div>
							<div className={style.fullname}>{user.name}</div>
							<div className={style.country}>{user.country ? user.country : "Страна нет данных"}</div>
							<div className={style.city}>ID: {user.id}</div>
						</div>
					</div>)}
			</div>
			<div className={style.buttons_block}>
				<button disabled={props.currentPagesBlock === 1} onClick={() => { props.showPrevBlock() }} className={`${style.prevbtn} button`}>PREVIOUS</button>
				<button disabled={props.currentPagesBlock === props.totalBlockCount} onClick={() => { props.showNextBlock() }} className={`${style.nextbtn} button`}>NEXT</button>
			</div>
		</div>
	)
}

export default Users;