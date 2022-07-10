import { connect } from "react-redux";
import { getStatusThunkCreator, setProfileThunkCreator, updateProfileThunkCreator, updateStatusThunkCreator } from "../../redux/profile_reducer.js";
// import { WithAuthRediredct } from "../../components/HOC/WithAuthRedirect.js";
import { compose } from "redux";
import { ProfileSettings } from "./ProfileSettings.jsx";


const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		status:  state.profilePage.status,
		myId: state.auth.myId,
		isAuth: state.auth.isAuth,
		resultOfCheckingId: state.profilePage.resultOfCheckingId,
		
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		setProfile: (profile) => { dispatch(setProfileThunkCreator(profile)) },
		getStatus: (userId) => {dispatch(getStatusThunkCreator(userId))},
		updateProfile: (aboutMe, contacts, lookingForAJob, lookingForAJobDescription, fullName) => {
			dispatch(updateProfileThunkCreator(aboutMe, contacts, lookingForAJob, lookingForAJobDescription, fullName))},
		updateStatus: (status) => {dispatch(updateStatusThunkCreator(status))},
	}
}

const ProfileSettingsContainer = compose(
	connect(mapStateToProps, mapDispatchToProps),
	// WithAuthRediredct
)(ProfileSettings)

export default ProfileSettingsContainer;