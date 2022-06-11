import React from "react";
import preloader from "../../assets/images/spinner.svg"
import style from "./Preloader.module.css"

let Preloader = () => {
	return (
		<span className={style.loading}>
			<img src={preloader} alt="" />
		</span>
	)
}

export { Preloader };