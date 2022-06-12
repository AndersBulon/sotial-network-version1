import React from "react";
import style from "./Profileinfo.module.css";
import avatar from "../../../assets/images/avatar.png"
import sadFace from "../../../assets/images/sadFace.png"
import { Preloader } from "../../../components/Preloader/Preloader.jsx"


function Profileinfo(props) {
	if (!props.profile) {
		return (
			<>
				<Preloader />
				<div className={`${style.profile} profile`}>
					<h2 className={`${style.id} nick designe`}>
						ID is not defined
					</h2>
					<div className={`${style.avatar} avatar`}>
						<img className={style.img} src={sadFace} alt="avatar" />
					</div>
					<div className={`${style.userinfo} userinfo designe`}>
						<div className={style.errorId}>
							Nickname is not defined
						</div>
					</div>
				</div>
			</>

		)
	}
	return (
		<div className={`${style.profile} profile`}>
			<div className={`${style.id} nick designe`}>
				{props.profile.fullName ? " ID № : " + props.profile.userId : "Nickname is not defined"}
			</div>
			<div className={`${style.avatar} avatar`}>
				<img
					className={style.img}
					src={props.profile.photos.large ? props.profile.photos.large : avatar}
					alt="avatar"
				/>
			</div>
			<div className={`${style.userinfo} userinfo designe`}>
				<h3 className={style.profileTitle}>Profile : {props.profile.fullName}</h3>

				<p>
					<span className={style.contacts}>Facebook: </span> {props.profile.contacts.facebook ? props.profile.contacts.facebook : "Нет данных"}
				</p>
				<p>
					<span className={style.contacts}>Website: </span> {props.profile.contacts.website ? props.profile.contacts.website : "Нет данных"}
				</p>
				<p>
					<span className={style.contacts}>Vk: </span> {props.profile.contacts.vk ? props.profile.contacts.vk : "Нет данных"}
				</p>
				<p>
					<span className={style.contacts}>Twitter: </span> {props.profile.contacts.twitter ? props.profile.contacts.twitter : "Нет данных"}
				</p>
				<p>
					<span className={style.contacts}>Instagram: </span> {props.profile.contacts.instagram ? props.profile.contacts.instagram : "Нет данных"}
				</p>
				<p>
					<span className={style.contacts}>Youtube: </span> {props.profile.contacts.youtube ? props.profile.contacts.youtube : "Нет данных"}
				</p>
				<p>
					<span className={style.contacts}>Github: </span> {props.profile.contacts.github ? props.profile.contacts.github : "Нет данных"}
				</p>
				<p>
					<span className={style.contacts}>MainLink: </span> {props.profile.contacts.mainLink ? props.profile.contacts.mainLink : "Нет данных"}
				</p>
				<p>
					<span className={style.contacts}>Looking for a job: </span> {props.profile.lookingForAJob ? "YES" : "NO"}
				</p>
				<p>
					<span className={style.contacts}>Looking for a job description: </span> {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : "Нет данных"}
				</p>

			</div>
		</div>
	);
}

export default Profileinfo;
