import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Preloader } from "../../components/Preloader/Preloader.jsx";
import Profileinfo from "./Profileinfo/Profileinfo"
import style from "./Profile.module.css";
import PostsContainer from "./Posts/PostsContainer.jsx";


export function Profile(props) {
	console.log(props);
	const { id = 24479 } = useParams()

	useEffect(() => {
		props.setProfile(id)
		props.getStatus(id)
		// eslint-disable-next-line 
	}, [id]);

	if (!Object.keys(props.profile).length) {
		return <Preloader />
	}

	return (
		<div className={style.content}>
			<Profileinfo profile={props.profile} 
				status={props.status} 
				updateStatus = {props.updateStatus}
				 />
			<PostsContainer />
		</div>
	)
}