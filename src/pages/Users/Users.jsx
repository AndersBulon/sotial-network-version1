import React from "react";
import styles from "./Users.module.css"


function Users(props) {

	if (props.users.length === 0) {
		props.setusers([
			{ 'Id': '1', photourl: 'https://avatarfiles.alphacoders.com/224/224801.jpg', 'followed': false, 'fullName': 'Andrei K', 'status': 'I like football', 'country': 'Belarus', 'city': 'Minsk' },
			{ 'Id': '2', photourl: 'https://avatarfiles.alphacoders.com/224/224802.jpg', 'followed': true, 'fullName': 'Sergei F', 'status': 'I am a boss', 'country': 'Russia', 'city': 'Moskow' },
			{ 'Id': '3', photourl: 'https://avatarfiles.alphacoders.com/224/224803.jpg', 'followed': true, 'fullName': 'Olga S', 'status': 'Absent now', 'country': 'Italy', 'city': 'Rim' },
			{ 'Id': '4', photourl: 'https://avatarfiles.alphacoders.com/224/22480.jpg', 'followed': false, 'fullName': 'Patrik Korf', 'status': 'Thanks God its friday', 'country': 'Germany', 'city': 'Bavaria' }
		]
		)
	}



	return (
		<div className={`${styles.content} designe`} >
			<h4>Cтраничка пользователей</h4>
			<div className={styles.item}>
				{props.users.map(user =>
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
					</div>)}
			</div>
			<button className={`${styles.showbtn} button`}>Show more</button>
		</div>
	)
}

export default Users;