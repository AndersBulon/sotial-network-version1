import React from "react";
import style from "./MessageItem.module.css"

const MessageItem = (props) => {
	return (
		<div className={style.message_item + " designe"}>
			{props.mesText}
		</div>
	)
}

export {MessageItem}