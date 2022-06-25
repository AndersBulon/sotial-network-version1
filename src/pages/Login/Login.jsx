import React, { useEffect } from "react";
import style from "./Login.module.css"
import { useForm } from "react-hook-form"

function LoginForm(props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		watch,
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = (data) => {
		reset()
		if (props.isAuth === false) {
			props.setMyLoginThunkCreator(data.login, data.password, data.remember_me)
		}
		else if (props.isAuth) {
			props.unLoginThunkCreator()
		}
		setTimeout(() => {
			window.location.reload();
		}, 200);
		
	}

	useEffect(() => {
		const subscription = watch((value, { name, type }) => {
			props.setMyLogin(value.login, value.password, value.remember_me)
		});
		return () => subscription.unsubscribe();
		// eslint-disable-next-line
	}, [watch, props.isAuth]
	);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				{!props.isAuth ?
					<input className={style.input}
						{...register('login', {
							required: "Поле LOGIN обязательно !",
						})}
						type="text"
						placeholder={"Login"} />
					: <input disabled={true} className={style.input} />}
			</div>
			{errors.login ?
				<div className={style.loginError}>{errors.login.message}</div> :
				<div className={style.loginError}></div>}

			<div>
				{!props.isAuth ?
					<input className={style.input}
						{...register('password', {
							required: "Поле PASSWORD обязательно !",
							pattern: {
								value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9@#$%!]).{8,40}$/,
								message: `Пароль 8 - 40 символов. Обязательны: цифра или спецсимол: "@, #, $, %, !", заглавная буква, 
										строчная буква. `
							}
						})}
						type="text"
						placeholder={"Password"} />
					: <input disabled={true} className={style.input} />}
			</div>
			{errors.password ?
				<div className={style.passwordError}>{errors.password.message}</div> :
				<div className={style.passwordError}></div>}

			<div>
				{!props.isAuth ?
					<input className={style.check} {...register('remember_me')} type={"checkbox"} />
					: <input className={style.check} disabled={true} type={"checkbox"} />}

				<label className={style.labelCheck}>Remember me</label>
			</div>

			<div>{props.isAuth ?
				<button className={`${style.submitBtn} button`}>Unlogin</button>
				:
				<button className={`${style.submitBtn} button`}>Login</button>
			}

			</div>
		</form>

	)
}
function Login(props) {

	return (

		<div className={`${style.content} designe`} >
			<h1>Login</h1>
			<LoginForm
				setMyLogin={props.setMyLogin}
				setMyLoginThunkCreator={props.setMyLoginThunkCreator}
				unLoginThunkCreator={props.unLoginThunkCreator}
				isAuth={props.isAuth} />
		</div>
	)
}
export default Login;