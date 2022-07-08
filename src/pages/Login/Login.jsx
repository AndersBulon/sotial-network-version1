import style from "./Login.module.css"
import { useForm } from "react-hook-form"
import React from "react"
import { Navigate } from "react-router-dom"

function LoginForm(props) {
	
	let errRef = React.createRef();
	let handleClick=()=> {
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
				{<p ref={errRef} className={`${style.error}`}>{props.authdata.messages}</p>}
				<div>
					{!props.authdata.isAuth ?
						<input autoFocus={true} type="text" placeholder={"Login"}
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
					{!props.authdata.isAuth ?
						<input
							{...register('password', {
								required: "Поле PASSWORD обязательно !",
								pattern: {
									value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9@#$%!]).{8,40}$/,
									message: `Пароль 8 - 40 символов. Обязательны: цифра или спецсимол: "@, #, $, %, !", заглавная буква, 
										строчная буква. `
								}
							})}
							type="text"
							className={errors.password ? style.inputErr : style.input}
							placeholder={"Password"} />
						: <input disabled={true} className={style.inputDesable} />}
				</div>
				{errors.password ?
					<div className={style.error}>{errors.password.message}</div> :
					<div className={style.error}></div>}
				<div className={style.checkField}>
					{!props.authdata.isAuth ?
						<input className={style.check} type={"checkbox"} id="rememberCheck"
							{...register('remember_me')} />
						: <input className={style.check} type={"checkbox"} disabled={true} id="rememberCheck" />}
					<label className={style.labelCheck} htmlFor="rememberCheck">Remember me</label>
				</div>
			</fieldset>

			{props.authdata.captcha !== ""
				? <fieldset>
					<legend> Защита антибот </legend>
					<div className={style.captcha}>
						<img className={style.captchaImg} src={props.authdata.captcha} alt="" />
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

			<div>{props.authdata.isAuth ?
				<button type="button" className={`${style.submitBtn} button `}
					onClick={props.logOut}
					{...register("loginBtn")}>
					Unlogin
				</button>
				:
				<button className={`${style.submitBtn}`}
					onClick={()=>{handleClick()}}
					id="submBtn"
					{...register("loginBtn")}
				>Login</button>
			}
			</div>
		</form>
	)
}

function Login(props) {
	if (props.authdata.isAuth) {
		return <Navigate replace to='/profile' />
	}
	return (
		<div className={`${style.content} designe`} >
			<h1>Login</h1>
			<LoginForm
				loginThunkCreator={props.loginThunkCreator}
				logOut={props.logOut}
				authdata={props.authdata}
				getCaptcha={props.getCaptcha} />
		</div>
	)
}
export default Login;