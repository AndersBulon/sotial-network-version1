import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Preloader } from "../../components/Preloader/Preloader.jsx";
import Profileinfo from "./Profileinfo/Profileinfo"
import style from "./Profile.module.css";
import PostsContainer from "./Posts/PostsContainer.jsx";


function Profile()  {

	const { id=2 } = useParams()
	const [profile, setProfile] = useState({}) 
	
	useEffect(() => {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
		.then(response => setProfile(response.data) )
	}, [id]);


	if(!Object.keys(profile).length) {
		return <Preloader/>
	}
	return (
		<div className={style.content}>
		<Profileinfo profile={profile}/>
		<PostsContainer />
	</div>
	)

}

export { Profile };
