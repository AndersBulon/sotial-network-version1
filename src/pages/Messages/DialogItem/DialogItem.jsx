import React from "react";
import { NavLink } from "react-router-dom";
import { dialogsData } from "../../../index.js";
import style from "./DialogItem.module.css"



const DialogItem = (props) => {
	return (
		<div className={style.dialog_item + " designe"}>
			<NavLink to={(props.dialogId).toString()}> {props.dialogAuthor}</NavLink>
		</div>
	)
}

let dialogs = dialogsData.map(dialog => <DialogItem key={dialog.dialogId} dialogId={dialog.dialogId} dialogAuthor={dialog.dialogAuthor} />)


export {dialogs};