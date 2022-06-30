import style from "./Login.module.css"
import { useForm } from "react-hook-form"
import { authAPI } from "../../api/api.js"
import React from "react"
import { Navigate } from "react-router-dom"

function LoginForm(props) {
	const {
		register,
		handleSubmit,
		setError,
		reset,
		getValues,
		formState: { errors },
	} = useForm({mode: "onBlur"})

	const onSubmit = (data) => {
		props.loginThunkCreator(data.login, data.password, data.remember_me)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				{!props.authdata.isAuth ?

					<input autoFocus ={true}
						{...register('login', {
							required: "Поле LOGIN обязательно !",
						})}
						type="text"
						className={errors.login ? style.inputErr : style.input}
						placeholder={"Login"} />
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
			<div>
				{!props.authdata.isAuth ?
					<input className={style.check} {...register('remember_me' )} type={"checkbox"} />
					: <input className={style.check} disabled={true} type={"checkbox"} />}

				<label className={style.labelCheck}>Remember me</label>
			</div>
			<div>{props.authdata.isAuth ?
				<button type="button" className={`${style.submitBtn} button `}
					onClick={props.logOut}
					{...register("loginBtn")}>
					Unlogin
				</button>
				:
				<button className={`${style.submitBtn} button`}
					{...register("loginBtn", {
						validate: {
							checkUrl: async () => {
								const response = await authAPI.setLogin(getValues("login"),
									getValues("password"), getValues("remember_me"));
								if (response.data.resultCode !== 0) {
									setError("remember_me", { types: { custom: "Неверный логин и/или пароль" } });
								}
								else {
									reset()
								}
							}
						}
					})}
				>Login</button>
			}
			</div>
			{ errors.remember_me && <p className={style.error}>{errors.remember_me.types.custom}</p>}
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
				authdata={props.authdata} />
		</div>
	)
}
export default Login;