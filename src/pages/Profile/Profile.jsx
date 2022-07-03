import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Preloader } from "../../components/Preloader/Preloader.jsx";
import Profileinfo from "./Profileinfo/Profileinfo"
import style from "./Profile.module.css";
import PostsContainer from "./Posts/PostsContainer.jsx";


export function Profile(props) {

	const { id = props.myId } = useParams()

	useEffect(() => {
		if (id) 
	 {
			props.setProfile(id)
			props.getStatus(id)
		}
		// eslint-disable-next-line 
	}, [id]);

	if (!id ) return <Navigate replace to='/login' />
	if (!Object.keys(props.profile).length) {
		return <Preloader />
	}
	return (
		<div className={style.content}>
			<Profileinfo profile={props.profile}
				status={props.status}
				updateStatus={props.updateStatus}
				myId={props.myId}
			/>
			<PostsContainer />
		</div>
	)
}