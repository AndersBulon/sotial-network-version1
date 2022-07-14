import { connect } from "react-redux";
import { getStatusThunkCreator, setProfileThunkCreator, updatePhotoThunkCreator, updateProfileThunkCreator, updateStatusThunkCreator } from "../../redux/profile_reducer.js";
// import { WithAuthRediredct } from "../../components/HOC/WithAuthRedirect.js";
import { compose } from "redux";
import { ProfileSettings } from "./ProfileSettings.jsx";


const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		status:  state.profilePage.status,
		myId: state.auth.myId,
		messages: state.profilePage.messages,
		isAuth: state.auth.isAuth,
		resultOfCheckingId: state.profilePage.resultOfCheckingId,
		
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		setProfile: (profile) => { dispatch(setProfileThunkCreator(profile)) },
		getStatus: (userId) => {dispatch(getStatusThunkCreator(userId))},
		updateProfile: (aboutMe, contacts, lookingForAJob, lookingForAJobDescription, fullName, myId) => {
			dispatch(updateProfileThunkCreator(aboutMe, contacts, lookingForAJob, lookingForAJobDescription, fullName, myId))},
		updateStatus: (status) => {dispatch(updateStatusThunkCreator(status))},
		updatePhotos: (photos) => {dispatch(updatePhotoThunkCreator(photos))},
	}
}

const ProfileSettingsContainer = compose(
	connect(mapStateToProps, mapDispatchToProps),
	// WithAuthRediredct
)(ProfileSettings)

export default ProfileSettingsContainer;