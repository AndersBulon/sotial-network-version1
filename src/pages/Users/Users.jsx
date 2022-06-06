import React from "react";
import styles from "./Users.module.css"


function Users(props) {

	let users = props.users.map(user =>

		<div className={styles.userswrapper} key={user.Id}>
			<div className={styles.avatar}>
				<img src={user.photourl} alt="avatar" />
			</div>
			{user.followed ?
				<button onClick={() => { props.follow(user.Id) }} className={`${styles.followBtn} button`}>Follow</button> :
				<button onClick={() => { props.unfollow(user.Id) }} className={`${styles.followBtn} button`}>Unfollow</button>}
			<div className={user.followed ? styles.info_act : styles.info_disact}>
				<div className={styles.status}>{user.status}</div>
				<div className={styles.fullname}>{user.fullName}</div>
				<div className={styles.country}>{user.country}</div>
				<div className={styles.city}>{user.city}</div>
			</div>

		</div>)


	return (
		<div className={`${styles.content} designe`} >
			<h4>Cтраничка пользователей</h4>
			<div className={styles.item}>
				{users}
			</div>
			<button className={`${styles.showbtn} button`}>Show more</button>
		</div>
	)
}

export default Users;