import { connect } from "react-redux";
import { getStatusThunkCreator, setProfileThunkCreator, updatePhotoThunkCreator, updateProfileThunkCreator, updateStatusThunkCreator } from "../../redux/profile_reducer.js";
import { WithAuthRediredct } from "../../components/HOC/WithAuthRedirect.js";
import { compose } from "redux";
import { ProfileSettings } from "./ProfileSettings.jsx";
import { getSelected_MyId } from "../../redux/auth_selectors.js";
import { getSelected_ProfileMessages, getSelected_Profile } from "../../redux/profile_selectors.js";


const mapStateToProps = (state) => {
	return {
		myId: getSelected_MyId(state),
		profile: getSelected_Profile(state),
		messages: getSelected_ProfileMessages(state),
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		setProfile: (profile) => { dispatch(setProfileThunkCreator(profile)) },
		getStatus: (userId) => { dispatch(getStatusThunkCreator(userId)) },
		updateProfile: (fullName, aboutMe, lookingForAJobDescription, lookingForAJob, contacts, myId) => {
			dispatch(updateProfileThunkCreator(fullName, aboutMe, lookingForAJobDescription, lookingForAJob, contacts, myId))
		},
		updateStatus: (status) => { dispatch(updateStatusThunkCreator(status)) },
		updatePhotos: (photos) => { dispatch(updatePhotoThunkCreator(photos)) },
	}
}

const ProfileSettingsContainer = compose(
	connect(mapStateToProps, mapDispatchToProps),
	WithAuthRediredct
)(ProfileSettings)

export default ProfileSettingsContainer;