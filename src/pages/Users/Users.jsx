import React from "react";
import style from "./Users.module.css"
import { Paginator } from "../../components/Paginator/Paginator.jsx";
import User from "./User.jsx";

let Users = (props) => {

	return (
		<div className={`${style.content} designe`} >
			<h3 className={style.title}>Users</h3>
			<Paginator {...props} className={style.paginator} />
			<div className={style.items}>
				{props.users.map(user =>
					<User key={user.id} {...props} user={user}  />
				)}
			</div>
		</div>
	)
}

export default Users;