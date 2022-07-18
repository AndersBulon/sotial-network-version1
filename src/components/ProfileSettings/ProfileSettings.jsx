import React from "react";
import style from "./ProfileSettings.module.css";
import { useForm } from "react-hook-form";
import upload from "../../assets/images/upload.png";
import spinner from "../../assets/images/spinner.svg";
import { Preloader } from "../Preloader/Preloader.jsx";

const SettingsForm = (props) => {
	let [editMode, setEditMode] = React.useState(false)
	let [isActiveSend, changeActiveSend] = React.useState(true)
	let [jobCheck, setJobCheck] = React.useState(props.profile.lookingForAJob)
	let [error, setError] = React.useState(props.messages)
	let [choosingPhoto, choosePhoto] = React.useState(upload)
	let [photos, addPhotos] = React.useState((Object.keys(props.profile).length !== 0) ? props.profile.photos.large : spinner)
	let [refreshingPhoto, refreshPhoto] = React.useState((Object.keys(props.profile).length !== 0) ? props.profile.photos.large : spinner)

	React.useEffect(() => {
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
	} = useForm({ mode: "onBlur" })

	const onSubmit = (data) => {
		if (choosingPhoto !== upload) {
			props.updatePhotos(data.file[0])
			choosePhoto(upload)
			addPhotos(spinner)
		}
		props.updateProfile(data.fullName, data.aboutMe, data.jobDescription, jobCheck,
			{facebook: data.facebook, github: data.github,
			instagram: data.instagram, mainLink: data.mainLink, twitter: data.twitter,
			vk: data.vk, website: data.website, youtube: data.youtube}, props.myId)    
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
	// eslint-disable-next-line
	const pattern ="/^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/"
	const onJobCheck = (e) => {
		setJobCheck(e.target.checked)
	}
	const activateEditMode = () => {
		setEditMode(true)
		changeActiveSend(false)
	}
	const deActivateEditMode = () => {
		setEditMode(false)
		changeActiveSend(true)
	}

	const errGenerate = () => {
		let arr = []
		Object.entries(errors).forEach((entry) => {
			const [, value] = entry;
			arr.push(value.message)
		});
		return arr;
	}


	const ContactField = (props) => {
		let [value, setContact] = React.useState(props.contact)
		React.useEffect(() => {
			setContact(props.contact)
		}, [props.contact])
		const changeFunc = (e) => {
			setContact(e.currentTarget.value)
		};
		return (
			<div className={`${props.contactblock}`}>
				<label
					className={`${props.labelSpanCSS} ${props.labelCSS}`}>
					{props.title}
				</label>
				{!editMode
					? <span className={`${props.labelSpanCSS} ${props.spanCSS}`}>{
						value}</span>
					: <textarea value={value ? value : ""}
						className={`${props.inpCSS1} ${props.inpCSS2} `}
						{...register(props.regName,
							{
								required: props.text1,
								pattern: {
									value: props.pattern,
									message: props.text2
								}
							})}
						onChange={changeFunc}
					/>
				}
			</div>
		)
	}

	if (!Object.keys(props.profile).length) return <Preloader />
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.form}>
			<fieldset className={style.block1}>
				<legend>Information</legend>
				<ContactField contactblock={style.informblock1} labelSpanCSS={style.label} labelCSS={style.fullNameLbl}
					spanCSS={style.fullName} inpCSS1={style.input} inpCSS2={style.fullName}
					regName="fullName" contact={props.profile.fullName} func="changeFunc"
					text1="Поле 'Full name' обязательно к заполнению!" title="Full name :"
				/>
				<ContactField contactblock={style.informblock2} labelSpanCSS={style.label} labelCSS={style.aboutMeLbl}
					spanCSS={style.aboutMe} inpCSS1={style.input} inpCSS2={style.aboutMe}
					regName="aboutMe" contact={props.profile.aboutMe}
					text1="Поле 'Поле 'About me' обязательно к заполнению!" title="About me :"
				/>
				<ContactField contactblock={style.informblock3} labelSpanCSS={style.label} labelCSS={style.jobDescriptionLbl}
					spanCSS={style.jobDescription} inpCSS1={style.input} inpCSS2={style.jobDescription}
					regName="jobDescription" contact={props.profile.lookingForAJobDescription}
					text1="Поле 'Job description' обязательно к заполнению!" title="Job description :"
				/>
				<div className={style.informblock4}>
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
							onChange={ onJobCheck }
						/>
					}
				</div>
			</fieldset>

			<fieldset className={style.block2}>
				<legend>Contacts</legend>
				<ContactField contactblock={style.contactblock1} labelSpanCSS={style.label} labelCSS={style.facebookLbl}
					spanCSS={style.facebook} inpCSS1={style.input} inpCSS2={style.facebook}
					contact={props.profile.contacts.facebook} title="Facebook :" regName="facebook"
					pattern={pattern}
					text1="Поле 'Facebook' обязательно к заполнению!"
					text2="В поле 'Facebook' введен не корректный URL-адрес"
				/>

				<ContactField contactblock={style.contactblock2} labelSpanCSS={style.label} labelCSS={style.githubLbl}
					spanCSS={style.github} inpCSS1={style.input} inpCSS2={style.github}
					contact={props.profile.contacts.github}
					title="Github :" regName="github"
					text1="Поле 'Github' обязательно к заполнению!"
					text2="В поле 'Github' введен не корректный URL-адрес"
				/>

				<ContactField contactblock={style.contactblock3} labelSpanCSS={style.label} labelCSS={style.instagramLbl}
					spanCSS={style.instagram} inpCSS1={style.input} inpCSS2={style.instagram}
					contact={props.profile.contacts.instagram}
					title="Instagram :" regName="instagram" pattern={pattern}
					text1="Поле 'Instagram' обязательно к заполнению!"
					text2="В поле 'Instagram' введен не корректный URL-адрес"
				/>

				<ContactField contactblock={style.contactblock4} labelSpanCSS={style.label} labelCSS={style.mainLinkLbl}
					spanCSS={style.mainLink} inpCSS1={style.input} inpCSS2={style.mainLink}
					contact={props.profile.contacts.mainLink}
					title="MainLink :" regName="mainLink" pattern={pattern}
					text1="Поле 'MainLink' обязательно к заполнению!"
					text2="В поле 'MainLink' введен не корректный URL-адрес"
				/>

				<ContactField contactblock={style.contactblock5} labelSpanCSS={style.label} labelCSS={style.twitterLbl}
					spanCSS={style.twitter} inpCSS1={style.input} inpCSS2={style.twitter}
					contact={props.profile.contacts.twitter}
					title="Twitter :" regName="twitter" pattern={pattern}
					text1="Поле 'Twitter' обязательно к заполнению!"
					text2="В поле 'Twitter' введен не корректный URL-адрес"
				/>

				<ContactField contactblock={style.contactblock6} labelSpanCSS={style.label} labelCSS={style.vkLbl}
					spanCSS={style.vk} inpCSS1={style.input} inpCSS2={style.vk}
					contact={props.profile.contacts.vk}
					title="VK :" regName="vk" pattern={pattern}
					text1="Поле 'VK' обязательно к заполнению!"
					text2="В поле 'VK' введен не корректный URL-адрес"
				/>

				<ContactField contactblock={style.contactblock7} labelSpanCSS={style.label} labelCSS={style.websiteLbl}
					spanCSS={style.website} inpCSS1={style.input} inpCSS2={style.website}
					contact={props.profile.contacts.website}
					title="Website :" regName="website" pattern={pattern}
					text1="Поле 'Website' обязательно к заполнению!"
					text2="В поле 'Website' введен не корректный URL-адрес"
				/>

				<ContactField contactblock={style.contactblock8} labelSpanCSS={style.label} labelCSS={style.youtubeLbl}
					spanCSS={style.youtube} inpCSS1={style.input} inpCSS2={style.youtube}
					contact={props.profile.contacts.youtube}
					title="Youtube :" regName="youtube" pattern={pattern}
					text1="Поле 'Youtube' обязательно к заполнению!"
					text2="В поле 'Youtube' введен не корректный URL-адрес"
				/>
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
							onChange={chooseAvatarPhoto} onClick={activateEditMode}/>
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
				<input disabled={isActiveSend} type={"submit"} value='Send' className={`${style.submitBtn} button`} />
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