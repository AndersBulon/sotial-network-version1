import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Preloader } from "../../components/Preloader/Preloader.jsx";
import Profileinfo from "./Profileinfo/Profileinfo"
import style from "./Profile.module.css";
import PostsContainer from "./Posts/PostsContainer.jsx";
import { connect } from "react-redux";
import { setProfileThunkCreator } from "../../redux/profile_reducer.js";


function Profile(props) {
	const { id = 24479 } = useParams()

	useEffect(() => {
		props.setProfileThunkCreator(id)
		// eslint-disable-next-line 
	}, [id]);

	if (!Object.keys(props.profile).length) {
		return <Preloader />
	}

	return (
		<div className={style.content}>
			<Profileinfo profile={props.profile} />
			<PostsContainer />
		</div>
	)

}
const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		isLoadingState: state.profilePage.isLoadingState
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		setProfileThunkCreator: (profile) => { dispatch(setProfileThunkCreator(profile)) },
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
