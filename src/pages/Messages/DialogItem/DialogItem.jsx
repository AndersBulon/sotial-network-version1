import React from "react";
import { NavLink } from "react-router-dom";
import style from "./DialogItem.module.css"

const DialogItem = (props) => {
	
	let dialog = props.dialogs.map(dialog =>
		<div className={style.dialog_item} key={dialog.Id}>
			<NavLink to={"" + dialog.Id}>
				<div className={style.authorItem}><span>Author's nick: </span>{dialog.dialogAuthor}</div>
				<div className={style.authorId}><span>Author's ID: </span>{dialog.Id}</div>
			</NavLink>
		</div>);
	return (
		<div className={style.dialogsConteiner}>
			{dialog}
		</div>)
}

export { DialogItem };