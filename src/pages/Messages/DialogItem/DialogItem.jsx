import React from "react";
import { NavLink } from "react-router-dom";
import style from "./DialogItem.module.css"

const DialogItem = (props) => {
	
	let dialog = props.dialogs.map(dialog =>
		<div className={style.wrapper} key={dialog.Id}>
			<NavLink to={"" + dialog.Id} className={style.dialog_item}>
				<div className={style.authorItem}>{dialog.dialogAuthor}</div>
				<div className={style.authorId}><span>ID: </span>{dialog.Id}</div>
			</NavLink>
		</div>);

	return (
		<div className={style.dialogsConteiner}>
			{dialog}
		</div>)
}

export { DialogItem };