import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Preloader } from "../../components/Preloader/Preloader.jsx";
import Profileinfo from "./Profileinfo/Profileinfo"
import style from "./Profile.module.css";
import PostsContainer from "./Posts/PostsContainer.jsx";
import {usersAPI } from "../../api/api.js";


function Profile() {

	const { id = 24479 } = useParams()
	const [profile, setProfile] = useState({})

	useEffect(() => {
		usersAPI.getUser(id)
			.then(data => setProfile(data))
	}, [id]);


	if (!Object.keys(profile).length) {
		return <Preloader />
	}
	return (
		<div className={style.content}>
			<Profileinfo profile={profile} />
			<PostsContainer />
		</div>
	)

}

export { Profile };
