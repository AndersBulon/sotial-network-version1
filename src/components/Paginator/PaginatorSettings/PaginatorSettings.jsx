import React from "react";
import style from "./PaginatorSettings.module.css";
import { useForm } from "react-hook-form";

const PaginatorSettingsForm = (props) => {
	console.log(props);
	let [pSize, setPageSize] = React.useState(props.pageSize)
	let [pInBlock, setpagesInBlock] = React.useState(props.pagesInBlock)
	const {
		handleSubmit,
		reset,
		register,
		formState: { errors },
	} = useForm({ mode: "onBlur" })

	const onSubmit = () => {
		props.setNewPaginatorSettings(pSize, pInBlock);
		setPageSize("");
		setpagesInBlock("");
		reset()
	}


	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.paginatorSettingsForm} >
			<fieldset className={style.fieldset}>
				<legend>Settings</legend>
				<div className={style.block1}>
					<label className={style.pSizeLbl}>Размер странички (page size)</label>
					<input type="text" className={`${style.pSizeInput}`}
						value={pSize}
						{...register("pSizeInput",
							{
								required: "Поле 'page size' обязательно !!!",
								pattern: {
									value: /^([1-9]|[1][\d]|2[0])$/,
									message: `Корректно только числовое значение от 1 до 20`
								}
							})}
						onChange={(e) => { setPageSize(e.currentTarget.value) }}
					/>
					{errors.pSizeInput && <p className={`${style.pSizeErr} error`}>{errors.pSizeInput.message}</p>}
				</div>
				<div className={style.block2}>
					<label className={style.pInBlockLbl}>Блоков на странице (pages in block)</label>
					<input type="text" className={`${style.pInBlockInput} `}
						value={pInBlock}
						{...register("pInBlockInput",
							{
								required: "Поле 'pages in block' обязательно !!!",
								pattern: {
									value: /^([1-9]|[1][\d]|2[0])$/,
									message: `Корректно только числовое значение от 1 до 20`
								}
							})}
						onChange={(e) => { setpagesInBlock(e.currentTarget.value) }}
					/>
					{errors.pInBlockInput && <p className={`${style.pInBlockErr} error`}>{errors.pInBlockInput.message}</p>}
				</div>
				<div className={style.block3}>
					<input type="submit" value="Send" className={`${style.sendBtn} button`} />
				</div>
			</fieldset>

		</form>
	)
}

const PaginatorSettings = (props) => {
	return (
		<div className={style.contant}>
			<h2 className={style.title}>Settings for Paginator</h2>
			<div className={style.subtitle}>Текущее количество профилей на странице: {props.pageSize}</div>
			<div className={style.subtitle}>Текущее количество страниц в блоке: {props.pagesInBlock}</div>
			<PaginatorSettingsForm {...props} />
		</div>
	)
}
export { PaginatorSettings };