import style from "./Login.module.css"
import { useForm } from "react-hook-form"
import React from "react"
import { Navigate } from "react-router-dom"
import eye from "../../assets/images/eye.svg"
import eyeClosed from "../../assets/images/eye-closed.svg"

function LoginForm(props) {
	let [passType, changePassType] = React.useState("password")
	let [eyeImg, changeEyeImg] = React.useState(eyeClosed)

	const toggleType = () => {
		if (passType === "password") {
			changePassType("text")
			changeEyeImg(eye)
		}
		else {
			changePassType("password")
			changeEyeImg(eyeClosed)
		}

	}

	let errRef = React.createRef();
	let handleClick = () => {
		const wrapper = errRef.current;
		wrapper.classList.add("err")
		setTimeout(() => {
			wrapper.classList.remove("err")
		}, 850);
	}
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onBlur" })

	const onSubmit = (data) => {
		props.loginThunkCreator(data.login, data.password, data.remember_me, data.captcha)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<fieldset>
				<legend> Логин и пароль </legend>
				{<p ref={errRef} className={`${style.error}`}>{props.messages}</p>}
				<div>
					{!props.isAuth ?
						<input autoFocus={true} type="text" placeholder={"Login"}
							size="20"
							className={errors.login ? style.inputErr : style.input}
							{...register('login', {
								required: "Поле LOGIN обязательно !",
							})}
						/>
						:
						<input disabled={true} className={style.inputDesable} />}
				</div>
				{errors.login ?
					<div className={style.error}>{errors.login.message}</div> :
					<div className={style.error}></div>}
				<div>
					{!props.isAuth ?
						<div className={style.passContainer}>
							<img onClick={toggleType} className={style.eyeImg} src={eyeImg} alt="" />
							<input maxlength="20" size="20"
								{...register('password', {
									required: "Поле PASSWORD обязательно !",
									pattern: {
										value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9@#$%!]).{8,20}$/,
										message: `Пароль 8 - 20 символов. Обязательны: цифра или спецсимол: "@, #, $, %, !", заглавная буква, 
										строчная буква. `
									}
								})}
								type={passType}
								className={`${errors.password ? style.inputErr : style.input} ${style.passInput}`}
								placeholder={"Password"} />
						</div>

						: <input disabled={true} className={style.inputDesable} />}
				</div>
				{errors.password ?
					<div className={style.error}>{errors.password.message}</div> :
					<div className={style.error}></div>}
				<div className={style.checkField}>
					{!props.isAuth ?
						<input className={style.check} type={"checkbox"} id="rememberCheck"
							{...register('remember_me')} />
						: <input className={style.check} type={"checkbox"} disabled={true} id="rememberCheck" />}
					<label className={style.labelCheck} htmlFor="rememberCheck">Remember me</label>
				</div>
			</fieldset>

			{props.captcha !== ""
				? <fieldset>
					<legend> Защита антибот </legend>
					<div className={style.captcha}>
						<img className={style.captchaImg} src={props.captcha} alt="" />
						{errors.captcha && <p className={style.error}>{errors.captcha.message}</p>}
						<input className={`${errors.captcha ? style.inputErr : style.input} ${style.captchaInput}`}
							{...register('captcha', {
								required: "Введите код с картинки !",
							})}
							type="text"
						/>
						<input type="submit" className={style.refresh} value='' />
					</div>
				</fieldset>
				: <div></div>}

			<div>{props.isAuth ?
				<button type="button" className={`${style.submitBtn} button `}
					onClick={props.logOut}>
					Unlogin
				</button>
				:
				<input type="submit" className={`${style.submitBtn} button`}
					onClick={handleClick}
					value="Login"
				/>
			}
			</div>
		</form>
	)
}

function Login(props) {
	if (props.isAuth) {
		return <Navigate replace to='/users' />
	}
	return (
		<div className={`${style.content} designe`} >
			<h3>Login</h3>
			<LoginForm
				{...props}
				loginThunkCreator={props.loginThunkCreator} logOut={props.logOut} getCaptcha={props.getCaptcha}
			/>
		</div>
	)
}
export default Login;