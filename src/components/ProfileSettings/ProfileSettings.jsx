import React from "react";
import style from "./ProfileSettings.module.css";
import { useForm } from "react-hook-form";
import upload from "../../assets/images/upload.png";
import spinner from "../../assets/images/spinner.svg";
import { Preloader } from "../Preloader/Preloader.jsx";

const SettingsForm = (props) => {
	let [editMode, setEditMode] = React.useState(false)
	let [title, sendFileControl] = React.useState("Выберите файл")
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
			sendFileControl("Выберите файл")
			addPhotos(spinner)
		}
		props.updateProfile(data.fullName, data.aboutMe, data.jobDescription, jobCheck,
			{
				facebook: data.facebook, github: data.github,
				instagram: data.instagram, mainLink: data.mainLink, twitter: data.twitter,
				vk: data.vk, website: data.website, youtube: data.youtube
			}, props.myId)
		deActivateEditMode()
	}
	const chooseAvatarPhoto = (e) => {
		let reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0])
			reader.onload = () => {
				choosePhoto(reader.result)
				sendFileControl("Файл успешно выбран")
			}
		}
	}

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
	const controlFileSendButton =()=> {
		choosePhoto(upload)
		sendFileControl("Файл не выбран")
	}

	const errGenerate = () => {
		let arr = []
		Object.entries(errors).forEach((entry) => {
			const [, value] = entry;
			arr.push(value.message)
		});
		return arr;
	}
	// eslint-disable-next-line
	const pattern = /^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/
	const ContactField = (props) => {
		let [value, setContact] = React.useState(props.element)
		React.useEffect(() => {
			setContact(props.element)
		}, [props.element])
		const changeFunc = (e) => {
			setContact(e.currentTarget.value)
		};
		function textAreaAdjust(e) {
			e.target.style.height = "1px";
			e.target.style.height = (10 + e.target.scrollHeight) + "px";
			// e.target.style.backgroundColor = "#e4ffe4";
			// if (props.err) {e.target.style.backgroundColor = "#ffcccc"}
		}
		function textAreaDeljust(e) {
			e.target.style.height = "33px";
			// e.target.style.backgroundColor = "#ffffff";
			// if (props.err) {e.target.style.backgroundColor = "#ffcccc"}
		}
		return (
			<div className={`${props.contactblock}`}>
				<label
					className={`${props.labelSpanCSS} ${props.labelCSS}`}>
					{props.title}
				</label>
				{!editMode
					? <span className={`${props.labelSpanCSS} ${props.fieldCSS}`}>{
						value.slice(0,25)+"..."}</span>
					: <textarea value={value ? value : ""}
						autoFocus={props.err}
						onFocus={textAreaAdjust}
						onBlurCapture={textAreaDeljust}
						className={`${props.err ? style.inputErr : style.input} ${props.fieldCSS} `}
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
					fieldCSS={style.fullName} err={errors.fullName}
					regName="fullName" element={props.profile.fullName} func="changeFunc"
					text1="Поле 'Full name' обязательно к заполнению!" title="Full name :"
				/>
				<ContactField contactblock={style.informblock2} labelSpanCSS={style.label} labelCSS={style.aboutMeLbl}
					fieldCSS={style.aboutMe} err={errors.aboutMe}
					regName="aboutMe" element={props.profile.aboutMe}
					text1="Поле 'Поле 'About me' обязательно к заполнению!" title="About me :"
				/>
				<ContactField contactblock={style.informblock3} labelSpanCSS={style.label} labelCSS={style.jobDescriptionLbl}
					fieldCSS={style.jobDescription} err={errors.jobDescription}
					regName="jobDescription" element={props.profile.lookingForAJobDescription}
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
							onChange={onJobCheck}
						/>
					}
				</div>
			</fieldset>

			<fieldset className={style.block2}>
				<legend>Contacts</legend>
				<ContactField contactblock={style.contactblock1} labelSpanCSS={style.label} labelCSS={style.facebookLbl}
					fieldCSS={style.facebook}
					element={props.profile.contacts.facebook} title="Facebook :" regName="facebook"
					pattern={pattern} err={errors.facebook}
					text1="Поле 'Facebook' обязательно к заполнению!"
					text2="В поле 'Facebook' введен не корректный URL-адрес"
				/>

				<ContactField contactblock={style.contactblock2} labelSpanCSS={style.label} labelCSS={style.githubLbl}
					fieldCSS={style.github}
					element={props.profile.contacts.github}
					pattern={pattern} err={errors.github}
					title="Github :" regName="github"
					text1="Поле 'Github' обязательно к заполнению!"
					text2="В поле 'Github' введен не корректный URL-адрес"
				/>

				<ContactField contactblock={style.contactblock3} labelSpanCSS={style.label} labelCSS={style.instagramLbl}
					fieldCSS={style.instagram}
					element={props.profile.contacts.instagram}
					pattern={pattern} err={errors.instagram}
					title="Instagram :" regName="instagram"
					text1="Поле 'Instagram' обязательно к заполнению!"
					text2="В поле 'Instagram' введен не корректный URL-адрес"
				/>

				<ContactField contactblock={style.contactblock4} labelSpanCSS={style.label} labelCSS={style.mainLinkLbl}
					fieldCSS={style.mainLink}
					element={props.profile.contacts.mainLink}
					pattern={pattern} err={errors.mainLink}
					title="MainLink :" regName="mainLink"
					text1="Поле 'MainLink' обязательно к заполнению!"
					text2="В поле 'MainLink' введен не корректный URL-адрес"
				/>

				<ContactField contactblock={style.contactblock5} labelSpanCSS={style.label} labelCSS={style.twitterLbl}
					fieldCSS={style.twitter}
					element={props.profile.contacts.twitter}
					pattern={pattern} err={errors.twitter}
					title="Twitter :" regName="twitter"
					text1="Поле 'Twitter' обязательно к заполнению!"
					text2="В поле 'Twitter' введен не корректный URL-адрес"
				/>

				<ContactField contactblock={style.contactblock6} labelSpanCSS={style.label} labelCSS={style.vkLbl}
					fieldCSS={style.vk}
					element={props.profile.contacts.vk}
					pattern={pattern} err={errors.vk}
					title="VK :" regName="vk"
					text1="Поле 'VK' обязательно к заполнению!"
					text2="В поле 'VK' введен не корректный URL-адрес"
				/>

				<ContactField contactblock={style.contactblock7} labelSpanCSS={style.label} labelCSS={style.websiteLbl}
					fieldCSS={style.website}
					element={props.profile.contacts.website}
					pattern={pattern} err={errors.website}
					title="Website :" regName="website"
					text1="Поле 'Website' обязательно к заполнению!"
					text2="В поле 'Website' введен не корректный URL-адрес"
				/>

				<ContactField contactblock={style.contactblock8} labelSpanCSS={style.label} labelCSS={style.youtubeLbl}
					fieldCSS={style.youtube}
					element={props.profile.contacts.youtube}
					pattern={pattern} err={errors.youtube}
					title="Youtube :" regName="youtube"
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
							onChange={chooseAvatarPhoto} onClick={controlFileSendButton} />
						<label htmlFor="file-input" className={`${style.fileBtn}`}>{title}</label>
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
			<h3 className={style.blockTitle}>Settings / Profile</h3>
			<SettingsForm
				{...props}
				updateProfile={props.updateProfile}
				updatePhotos={props.updatePhotos}
			/>
		</div>
	)
}
export { ProfileSettings };