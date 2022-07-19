import React from "react";
import style from "./Profileinfo.module.css";
import avatar from "../../../assets/images/avatar.png"
import { ProfileStatus } from "../../../components/ProfileStatus/ProfileStatus.jsx";
import { convertObjectToArray, logicFuncNo, logicFuncYes, splitStringWithSpaces } from "../../../components/HelpComponents/HelpComponents.js";


function Profileinfo(props) {

	let arr = convertObjectToArray(props.profile)

	return (
		<div className={`${style.profile} profile`}>
			<div className={`${style.id} nick designe`}>
				{props.profile.fullName ? " ID № : " + props.profile.userId : "Nickname is not defined"}
			</div>
			<div className={`${style.avatar} avatar`}>
				<img className={style.img} src={props.profile.photos.large ? props.profile.photos.large : avatar} alt="avatar" />
			</div>
			<div className={`${style.infoBlock} designe`}>
				<h2 className={style.infoTitle}>Full Name : {props.profile.fullName}</h2>
				{arr.map(el =>
					<p className={style.infoItem} key={el} >
						<span className={style.title} key={el[0]} >{splitStringWithSpaces(el[0])}</span>
						<span className={style.text} key={el[1]}  >{el[1] ? logicFuncYes(el[1])  : logicFuncNo(el[1])}</span>
					</p>)}
			</div>
			<div className={style.profileStatus}>
				<ProfileStatus status={props.status}
					updateStatus={props.updateStatus} myId={props.myId} userId={props.profile.userId} />
			</div>
		</div>
	);
}

export default Profileinfo;
