import React from "react";
import style from "./Users.module.css"
import image from "../../assets/images/user.jpg"
import { NavLink } from "react-router-dom";
import { Paginator } from "../../components/Paginator/Paginator.jsx";
import { statusHelper } from "../../components/HelpComponents/HelpComponents.js"

let Users = (props) => {

	return (
		<div className={`${style.content} designe`} >
			<h4 className={style.title}>Страничка пользователей</h4>
			<Paginator {...props} className={style.paginator} />
			<div className={style.items}>
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

						<div className={`${user.followed ? style.info_act : style.info_disact} ${(user.id === props.myId) && style.my}`}>
							{statusHelper(user, style.status, style.itemName, style.itemText)}
							<div className={style.fullname}>
								<span className={style.itemName}>Fullname :</span>
								<span className={style.itemText}>{user.name.slice(0, 30)}</span>
							</div>
							<div className={style.itemID}>
								<span className={style.itemName}>ID :</span>
								<span className={style.itemText}>{user.id}</span>
							</div>
						</div>
					</div>)}
			</div>
		</div>
	)
}

export default Users;