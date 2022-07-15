import React from "react";
import style from "./ProfileSettings.module.css";
import { useForm } from "react-hook-form";
import photo from "../../assets/images/profilePhoto/PF.jpg";
import upload from "../../assets/images/upload.png";
import { Preloader } from "../Preloader/Preloader.jsx";

const SettingsForm = (props) => {
	let [editMode, setEditMode] = React.useState(false)
	let [aboutMe, setAboutMe] = React.useState(props.profile.aboutMe)
	let [fullName, setFullName] = React.useState(props.profile.fullName)
	let [jobDescription, setJobDescription] = React.useState(props.profile.lookingForAJobDescription)
	let [jobCheck, setJobCheck] = React.useState(props.profile.lookingForAJob)
	let [contacts, setContacts] = React.useState(props.profile.contacts)
	let [error, setError] = React.useState(props.messages)

	React.useEffect(() => {
		setAboutMe(props.profile.aboutMe)
		setFullName(props.profile.fullName)
		setJobDescription(props.profile.lookingForAJobDescription)
		setContacts(props.profile.contacts)
		setError(props.messages)
		setJobCheck(props.profile.lookingForAJob)
	}, [props.profile, props.messages])

	const addPhoto = (e) => {
		props.updatePhotos(e.target.files[0])
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

	const {
		handleSubmit,
		register,
	} = useForm({ mode: "onSubmit" })

	const onSubmit = () => {
		props.updateProfile(aboutMe, contacts, jobCheck, jobDescription, fullName, props.myId)
		deActivateEditMode()
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
						{...register("fullName")}
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
						{...register("aboutMe")}
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
						{...register("jobDescription")}
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
						{...register("facebook")}
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
						{...register("github")}
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
						{...register("instagram")}
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
						{...register("mainLink")}
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
						{...register("twitter")}
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
						{...register("vk")}
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
						{...register("website")}
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
						{...register("youtube")}
						onChange={onYoutube}
					/>
				}
			</fieldset>

			<fieldset className={style.block3}>
				<legend>Photo</legend>
				<div className={style.imageBlock}>
					{!props.profile.photos.large
						? <img src={photo} alt="" className={style.avatarImg} />
						: <img src={props.profile.photos.large} alt="" className={style.avatarImg} />}

				</div>
				<div className={style.uploadContainer}>
					<img id="upload-image" src={upload} className={`${style.uploadImg}`} alt="" />
					<div>
						<input id="file-input" type="file" className={`${style.fileInput}`}
						{...register("file")}
						onChange={addPhoto} />
						<label htmlFor="file-input" className={`${style.fileBtn}`}>Выберите файл </label>
					</div>
				</div>
			</fieldset>

			{(error.length > 0) &&
				<fieldset country-info-list="true" className={style.errorBlock}>
					<legend className={style.legend}>Errors</legend>{error.map(el => <div key={el}>{el}</div>)}
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
	console.log(props);
	return (
		<div className={style.contant}>
			<h2>Settings Profile</h2>
			<SettingsForm
				{...props}
				// profile={props.profile}
				// messages={props.messages}
				// myId={props.myId}
				updateProfile={props.updateProfile}
				updatePhotos={props.updatePhotos}
			/>
		</div>
	)
}

export { ProfileSettings };