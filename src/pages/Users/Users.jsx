import React from "react";
import style from "./Users.module.css"
import image from "../../assist/images/user.jpg"

let  Users=  (props) => {
	return (

			<div className={`${style.content} designe`} >
				<h4>Страничка пользователей</h4>

				<div className={style.pages}>
					<span onClick={() => { props.goFirstPageNumber() }} className={props.currentPagesBlock === 1 ? style.nextpageblock : style.nextpageblock_activ}>
						&lt;&lt;
					</span>

					{props.blockStructure[props.currentPagesBlock].map(el =>
						<span onClick={() => props.numPageChanged(el)} key={el} className={props.currentPage === el ? style.selectedPage : style.pageNum}>
							{el}
						</span>
					)}

					<span onClick={() => { props.goEndPageNumber() }} className={props.currentPagesBlock === props.totalBlockCount ? style.prevpageblock : style.prevpageblock_activ}>
						&gt;&gt;
					</span>
				</div>

				<div className={style.item}>
					{props.users.map(user =>
						<div className={style.userswrapper} key={user.id}>
							<div className={style.avatar}>
								<img src={user.photos.small ? user.photos.small : image} alt="avatar" />
							</div>
							{user.followed ?
								<button onClick={() => { props.follow(user.id) }} className={`${style.followBtn} button`}>Follow</button> :
								<button onClick={() => { props.unfollow(user.id) }} className={`${style.followBtn} button`}>Unfollow</button>}
							<div className={user.followed ? style.info_act : style.info_disact}>
								<div className={style.status}>{user.status ? user.status.slice(0, 30) : "Нет статуса"}</div>
								<div className={style.fullname}>{user.name}</div>
								<div className={style.country}>{user.country ? user.country : "Страна нет данных"}</div>
								<div className={style.city}>ID: {user.id}</div>
							</div>
						</div>)}
				</div>

				<div className={style.buttons_block}>
					<button onClick={() => { props.showPrevBlock() }} className={`${style.showbtn} button`}>PREVIOUS</button>
					<button onClick={() => { props.showNextBlock() }} className={`${style.showbtn} button`}>NEXT</button>
				</div>
			</div>
	)
}

export default Users;