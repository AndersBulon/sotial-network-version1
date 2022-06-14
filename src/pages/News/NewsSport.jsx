import React, { useEffect, useState } from "react";
import style from "./News.module.css"
import { useParams } from 'react-router-dom'


function NewsSport() {

	const { id } = useParams()
	const [data1, setSport] = useState([])
	useEffect(() => {
		fetch(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
		.then(res => res.json() )
		.then(data => setSport(data))
	}, [id]);
	console.log(data1);
	return (
		<>
			<div className={`${style.content} designe`} >
				<h3>Это новости СПОРТА</h3>
				<div className={style.news}>
					ID пользователя: {id}
					<div>{data1.fullName}</div>
					
				</div>
			</div>

		</>

	)
}

export { NewsSport };