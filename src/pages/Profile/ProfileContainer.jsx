import { connect } from "react-redux";
import { getStatusThunkCreator, setProfileThunkCreator, updateStatusThunkCreator } from "../../redux/profile_reducer.js";
import { WithAuthRediredct } from "../../components/HOC/WithAuthRedirect.js";
import { compose } from "redux";
import {Profile} from "./Profile.jsx";


const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		isLoadingState: state.profilePage.isLoadingState,
		status:  state.profilePage.status,
		myId: state.auth.myId
		
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		setProfile: (profile) => { dispatch(setProfileThunkCreator(profile)) },
		getStatus: (userId) => {dispatch(getStatusThunkCreator(userId))},
		updateStatus: (status) => {dispatch(updateStatusThunkCreator(status))}
	}
}

const ProfileContainer = compose(
	connect(mapStateToProps, mapDispatchToProps),
	WithAuthRediredct
)(Profile)

export default ProfileContainer;