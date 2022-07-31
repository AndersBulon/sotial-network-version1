import React from "react";
import style from "./User.module.css"
import image from "../../assets/images/user.jpg"
import { NavLink } from "react-router-dom";
import { statusHelper } from "../../components/HelpComponents/HelpComponents.js"

let User = (props) => {

	return (
					<div className={style.userswrapper} key={props.user.id}>
						<div className={style.avatar}>
							<NavLink to={`/profile/${props.user.id}`}>
								<img src={props.user.photos.small ? props.user.photos.small : image} alt="avatar" />
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
								{props.user.followed ?
									<button disabled={props.lockedButton.some(id => id === props.user.id)} onClick={() => {
										props.unFollow(props.user.id)
									}} className={`${style.followBtn} button`}>
										Followed
									</button>
									:
									<button disabled={props.lockedButton.some(id => id === props.user.id)} onClick={() => {
										props.follow(props.user.id)
									}} className={`${style.followBtn} button`}>
										Unfollowed
									</button>}
							</div>
						}
						<div className={`${props.user.followed ? style.info_act : style.info_disact} ${(props.user.id === props.myId) && style.my}`}>
							{statusHelper(props.user, style.status, style.itemName, style.itemText)}
							<div className={style.fullname}>
								<span className={style.itemName}>Fullname :</span>
								<span className={style.itemText}>{props.user.name.slice(0, 30)}</span>
							</div>
							<div className={style.itemID}>
								<span className={style.itemName}>ID :</span>
								<span className={style.itemText}>{props.user.id}</span>
							</div>
						</div>
					</div>
	)
}
export default User;