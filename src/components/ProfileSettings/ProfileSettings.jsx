import React from "react";
import style from "./ProfileSettings.module.css";
import { useForm } from "react-hook-form";
import upload from "../../assets/images/upload.png";
import spinner from "../../assets/images/spinner.svg";
import { Preloader } from "../Preloader/Preloader.jsx";

const SettingsForm = (props) => {
	let [editMode, setEditMode] = React.useState(false)
	let [aboutMe, setAboutMe] = React.useState(props.profile.aboutMe)
	let [fullName, setFullName] = React.useState(props.profile.fullName)
	let [jobDescription, setJobDescription] = React.useState(props.profile.lookingForAJobDescription)
	let [jobCheck, setJobCheck] = React.useState(props.profile.lookingForAJob)
	let [contacts, setContacts] = React.useState(props.profile.contacts)
	let [error, setError] = React.useState(props.messages)
	let [choosingPhoto, choosePhoto] = React.useState(upload)
	let [photos, addPhotos] = React.useState((Object.keys(props.profile).length !== 0) ? props.profile.photos.large : spinner)
	let [refreshingPhoto, refreshPhoto] = React.useState((Object.keys(props.profile).length !== 0) ? props.profile.photos.large : spinner)

	React.useEffect(() => {
		setAboutMe(props.profile.aboutMe)
		setFullName(props.profile.fullName)
		setJobDescription(props.profile.lookingForAJobDescription)
		setContacts(props.profile.contacts)
		setError(props.messages)
		setJobCheck(props.profile.lookingForAJob)
		if (Object.keys(props.profile).length !== 0 && refreshingPhoto !== props.profile.photos.large) {
			addPhotos(props.profile.photos.large)
			refreshPhoto(props.profile.photos.large)
		}
	}, [props.profile, props.messages, refreshingPhoto])

	const {
		handleSubmit,
		formState: { errors },
		register,
		reset,
	} = useForm({ mode: "onBlur" })

	const onSubmit = (data) => {
		if (choosingPhoto !== upload) {
			props.updatePhotos(data.file[0])
			choosePhoto(upload)
			addPhotos(spinner)
		}
		props.updateProfile(aboutMe, contacts, jobCheck, jobDescription, fullName, props.myId)
		reset()
		deActivateEditMode()


	}

	const chooseAvatarPhoto = (e) => {
		let reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0])
			reader.onload = () => {
				choosePhoto(reader.result)
			}
		}
	}
	const onAboutMe = (e) => {
		setAboutMe(e.currentTarget.value)
	}
	const onFullName = (e) => {
		setFullName(e.currentTarget.value)
	}
	const onJobDescription = (e) => {
		setJobDescription(e.currentTarget.value)
	}
	const onJobCheck = (e) => {
		setJobCheck(e.target.checked)
	}
	const activateEditMode = () => {
		setEditMode(true)
	}
	const deActivateEditMode = () => {
		setEditMode(false)
	}

	const onFacebook = (e) => {
		let editValue = { ...contacts, facebook: e.currentTarget.value }
		setContacts(editValue)
	};
	const onWebsite = (e) => {
		let editValue = { ...contacts, website: e.currentTarget.value }
		setContacts(editValue)
	};
	const onGithub = (e) => {
		let editValue = { ...contacts, github: e.currentTarget.value }
		setContacts(editValue)
	};
	const onInstagram = (e) => {
		let editValue = { ...contacts, instagram: e.currentTarget.value }
		setContacts(editValue)
	};
	const onMainLink = (e) => {
		let editValue = { ...contacts, mainLink: e.currentTarget.value }
		setContacts(editValue)
	};
	const onTwitter = (e) => {
		let editValue = { ...contacts, twitter: e.currentTarget.value }
		setContacts(editValue)
	};
	const onVk = (e) => {
		let editValue = { ...contacts, vk: e.currentTarget.value }
		setContacts(editValue)
	};
	const onYoutube = (e) => {
		let editValue = { ...contacts, youtube: e.currentTarget.value }
		setContacts(editValue)
	};

	const errGenerate = () => {
		let arr = []
		Object.entries(errors).forEach((entry) => {
			const [, value] = entry;
			arr.push(value.message)
		});
		return arr;
	}


	if (!Object.keys(props.profile).length) return <Preloader />
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.form}>
			<fieldset className={style.block1}>
				<legend>Information</legend>

				<label
					className={`${style.label} ${style.fullNameLbl}`}>
					Full name :
				</label>
				{!editMode
					? <span className={`${style.label} ${style.fullName}`}>{fullName}</span>
					: <input type={"text"} value={fullName}
						className={`${style.input} ${style.fullName} `}
						{...register("fullName",
							{ required: "Поле 'Full name' обязательно к заполнению!" })}
						onChange={onFullName}
					/>
				}

				<label
					className={`${style.label} ${style.aboutMeLbl}`}>
					About me :
				</label>
				{!editMode
					? <span className={`${style.label} ${style.aboutMe}`}>{aboutMe}</span>
					: <textarea type="textarea" value={aboutMe}
						className={`${style.input} ${style.aboutMe}`}
						{...register("aboutMe",
							{ required: "Поле 'About me' обязательно к заполнению!" })}
						onChange={onAboutMe}
					/>
				}

				<label
					className={`${style.label} ${style.jobDescriptionLbl}`}>
					Job description :
				</label>
				{!editMode
					? <span className={`${style.label} ${style.jobDescription}`}>{jobDescription}</span>
					: <textarea type={"textarea"} value={jobDescription}
						className={`${style.input} ${style.jobDescription}`}
						{...register("jobDescription",
							{ required: "Поле 'Job description' обязательно к заполнению!" })}
						onChange={onJobDescription}
					/>
				}
				<label
					className={`${style.label} ${style.jobCheckLbl}`}>
					Looking for a job
				</label>
				{!editMode
					? <input type={"checkbox"}
						disabled={true}
						className={`${style.input} ${style.jobCheck}`}
						checked={jobCheck || ''}
					/>
					: <input type={"checkbox"}
						className={`${style.input} ${style.jobCheck}`}
						checked={jobCheck || ''}
						{...register("lookingForAJob")}
						onClick={(e) => { onJobCheck(e) }}
					/>
				}
			</fieldset>

			<fieldset className={style.block2}>
				<legend>Contacts</legend>
				<label
					className={`${style.label} ${style.facebookLbl}`}>
					Facebook :
				</label>
				{!editMode
					? <span className={`${style.label} ${style.facebook}`}>{
						contacts ? contacts.facebook : ""}</span>
					: <input type={"text"} value={contacts.facebook ? contacts.facebook : ""}
						className={`${style.input} ${style.facebook} `}
						{...register("facebook",
							{
								required: "Поле 'Facebook' обязательно к заполнению!",
								pattern: {
									// eslint-disable-next-line
									value: /^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/,
									message: `В поле 'Facebook' введен не корректный URL-адрес`
								}
							})}
						onChange={onFacebook}
					/>
				}
				<label
					className={`${style.label} ${style.githubLbl}`}>
					Github :
				</label>
				{!editMode
					? <span className={`${style.label} ${style.github}`}>{
						contacts ? contacts.github : ""}</span>
					: <input type={"text"} value={contacts.github ? contacts.github : ""}
						className={`${style.input} ${style.github} `}
						{...register("github",
							{
								required: "Поле 'Github' обязательно к заполнению!",
								pattern: {
									// eslint-disable-next-line
									value: /^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/,
									message: `В поле 'Github' введен не корректный URL-адрес`
								}
							})}
						onChange={onGithub}
					/>
				}
				<label
					className={`${style.label} ${style.instagramLbl}`}>
					Instagram :
				</label>
				{!editMode
					? <span className={`${style.label} ${style.instagram}`}>{
						contacts ? contacts.instagram : ""}</span>
					: <input type={"text"} value={contacts.instagram ? contacts.instagram : ""}
						className={`${style.input} ${style.instagram} `}
						{...register("instagram",
							{
								required: "Поле 'Instagram' обязательно к заполнению!",
								pattern: {
									// eslint-disable-next-line
									value: /^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/,
									message: `В поле 'Instagram' введен не корректный URL-адрес`
								}
							})}
						onChange={onInstagram}
					/>
				}
				<label
					className={`${style.label} ${style.mainLinkLbl}`}>
					MainLink :
				</label>
				{!editMode
					? <span className={`${style.label} ${style.mainLink}`}>{
						contacts ? contacts.mainLink : ""}</span>
					: <input type={"text"} value={contacts.mainLink ? contacts.mainLink : ""}
						className={`${style.input} ${style.mainLink} `}
						{...register("mainLink",
							{
								required: "Поле 'MainLink' обязательно к заполнению!",
								pattern: {
									// eslint-disable-next-line
									value: /^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/,
									message: `В поле 'MainLink' введен не корректный URL-адрес`
								}
							})}
						onChange={onMainLink}
					/>
				}
				<label
					className={`${style.label} ${style.twitterLbl}`}>
					Twitter :
				</label>
				{!editMode
					? <span className={`${style.label} ${style.twitter}`}>{
						contacts ? contacts.twitter : ""}</span>
					: <input type={"text"} value={contacts.twitter ? contacts.twitter : ""}
						className={`${style.input} ${style.twitter} `}
						{...register("twitter",
							{
								required: "Поле 'Twitter' обязательно к заполнению!",
								pattern: {
									// eslint-disable-next-line
									value: /^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/,
									message: `В поле 'Twitter' введен не корректный URL-адрес`
								}
							})}
						onChange={onTwitter}
					/>
				}
				<label
					className={`${style.label} ${style.vkLbl}`}>
					VK :
				</label>
				{!editMode
					? <span className={`${style.label} ${style.vk}`}>{
						contacts ? contacts.vk : ""}</span>
					: <input type={"text"} value={contacts.vk ? contacts.vk : ""}
						className={`${style.input} ${style.vk} `}
						{...register("vk",
							{
								required: "Поле 'VK' обязательно к заполнению!",
								pattern: {
									// eslint-disable-next-line
									value: /^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/,
									message: `В поле 'VK' введен не корректный URL-адрес`
								}
							})}
						onChange={onVk}
					/>
				}

				<label
					className={`${style.label} ${style.websiteLbl}`}>
					Website :
				</label>
				{!editMode
					? <span className={`${style.label} ${style.website}`}>{
						contacts ? contacts.website : ""}</span>
					: <input type={"text"} value={contacts.website ? contacts.website : ""}
						className={`${style.input} ${style.website} `}
						{...register("website",
							{
								required: "Поле 'Website' обязательно к заполнению!",
								pattern: {
									// eslint-disable-next-line
									value: /^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/,
									message: `В поле 'Website' введен не корректный URL-адрес`
								}
							})}
						onChange={onWebsite}
					/>
				}
				<label
					className={`${style.label} ${style.youtubeLbl}`}>
					Youtube :
				</label>
				{!editMode
					? <span className={`${style.label} ${style.youtube}`}>{
						contacts ? contacts.youtube : ""}</span>
					: <input type={"text"} value={contacts.youtube ? contacts.youtube : ""}
						className={`${style.input} ${style.youtube} `}
						{...register("youtube",
						{
							required: "Поле 'Youtube' обязательно к заполнению!",
							pattern: {
								// eslint-disable-next-line
								value: /^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/,
								message: `В поле 'Youtube' введен не корректный URL-адрес`
							}
						})}
						onChange={onYoutube}
					/>
				}
			</fieldset>

			<fieldset className={style.block3}>
				<legend>Photo</legend>
				<div className={style.imageBlock}>
					{!props.profile.photos.large
						? <img src={spinner} alt="" className={style.avatarImg} />
						: <img src={photos} alt="" className={style.avatarImg} />}

				</div>
				<div className={style.uploadContainer}>
					<img id="upload-image" src={choosingPhoto} className={`${style.uploadImg}`} alt="" />
					<div>
						<input id="file-input" type="file" className={`${style.fileInput}`}
							{...register("file")}
							onChange={chooseAvatarPhoto} />
						<label htmlFor="file-input" className={`${style.fileBtn}`}>Выберите файл </label>
					</div>
				</div>
			</fieldset>

			{
				Object.keys(errors).length !== 0 &&
				<fieldset className={style.error1Block}>
					<legend className={style.legend}>Errors</legend>
					{errGenerate().map(el => <div key={el}>{el}</div>)}
				</fieldset>

			}

			{
				error.length > 0 &&
				<fieldset className={style.error2Block}>
					<legend className={style.legend}>Errors From Site</legend>
					{error.map(el => <div key={el}>{el}</div>)}
				</fieldset>
			}


			<div className={style.buttonsBlock}>
				<button type="button" className={`${style.editBtn} button`}
					onClick={activateEditMode}
				>
					Edit Profile
				</button>
				<input type={"submit"} value='Send' className={`${style.submitBtn} button`} />
			</div>
		</form >
	)
}

const ProfileSettings = (props) => {
	React.useEffect(() => {
		props.setProfile(props.myId)
		// eslint-disable-next-line
	}, [props.myId])
	return (
		<div className={style.contant}>
			<h2>Settings Profile</h2>
			<SettingsForm
				{...props}
				updateProfile={props.updateProfile}
				updatePhotos={props.updatePhotos}
			/>
		</div>
	)
}

export { ProfileSettings };