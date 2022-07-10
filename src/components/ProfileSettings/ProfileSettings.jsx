import React from "react";
import style from "./ProfileSettings.module.css";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

const SettingsForm = (props) => {
	console.log(props);
	React.useEffect(() => {
		props.setProfile(props.myId)
		// eslint-disable-next-line 
	}, [props.myId]);


	let [aboutMe, setAboutMe] = React.useState(props.profile.aboutMe)
	let [fullName, setFullName] = React.useState(props.profile.fullName)
	let [jobDescription, setJobDescription] = React.useState(props.profile.lookingForAJobDescription)


	const onAboutMe = (e) => {
		setAboutMe(e.currentTarget.value)
	}
	const onFullName = (e) => {
		setFullName(e.currentTarget.value)
	}
	const onJobDescription = (e) => {
		setJobDescription(e.currentTarget.value)
	}

	const {
		handleSubmit,
		register,
	} = useForm({ mode: "onSubmit" })

	const onSubmit = (data) => {
		props.updateProfile(data.aboutMe, {}, data.lookingForAJob, data.jobDescription, data.fullName)
		console.log("Из submit", data.lookingForAJob);
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<fieldset className={style.block1}>
				<legend>Общая информация</legend>
				
					<label
						className={`${style.label} ${style.fullNameLbl}`}>
						Full name
					</label>
					<input type={"text"} value={fullName}
						className={`${style.input} ${style.fullName} input`}
						{...register("fullName")}
						onChange={(e) => { onFullName(e) }}
					/>
				
				
					<label
						className={`${style.label} ${style.aboutMeLbl}`}>
						About me
					</label>
					<input type={"textarea"} value={aboutMe}
						className={`${style.input} ${style.aboutMe} input`}
						{...register("aboutMe")}
						onChange={(e) => { onAboutMe(e) }}
					/>
			
			
					<label
						className={`${style.label} ${style.jobDescriptionLbl}`}>
						Job description
					</label>
					<input type={"textarea"} value={jobDescription}
						className={`${style.input} ${style.jobDescription} input`}
						{...register("jobDescription")}
						onChange={(e) => { onJobDescription(e) }}
					/>
			

			
					<input type={"checkbox"}
						className={`${style.input} ${style.jobCheck}`}
						{...register("lookingForAJob")}
					/>
					<label
						className={`${style.label} ${style.jobCheckLbl}`}>
						Looking for a job
					</label>
			
			</fieldset>


			<input type={"submit"} className="button" />
		</form>
	)
}

const ProfileSettings = (props) => {
	if(!props.isAuth) return <Navigate replace to='/login' />
	return (
		<div className={style.contant}>
			<h2>Settings Profile</h2>
			<SettingsForm profile={props.profile}
				updateProfile={props.updateProfile}
				myId={props.myId} setProfile={props.setProfile}
			/>
		</div>
	)



}

export { ProfileSettings };