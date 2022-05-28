import React from "react";
import { NavLink } from "react-router-dom";
import style from "./DialogItem.module.css"

const DialogItem = (props) => {
	return (
		<div className={style.dialog_item + " designe"}>
			<NavLink to={(props.dialogId).toString()}>
				{props.dialogAuthor}
			</NavLink>
		</div>
	)
}

export { DialogItem };