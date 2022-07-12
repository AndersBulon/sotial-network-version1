import { connect } from "react-redux";
import { getStatusThunkCreator, setProfileThunkCreator, updateStatusThunkCreator } from "../../redux/profile_reducer.js";
// import { WithAuthRediredct } from "../../components/HOC/WithAuthRedirect.js";
import { compose } from "redux";
import {Profile} from "./Profile.jsx";


const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		status:  state.profilePage.status,
		myId: state.auth.myId,
		resultOfCheckingId: state.profilePage.resultOfCheckingId,
		
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		setProfile: (id) => { dispatch(setProfileThunkCreator(id)) },
		getStatus: (userId) => {dispatch(getStatusThunkCreator(userId))},
		updateStatus: (status) => {dispatch(updateStatusThunkCreator(status))},
	}
}

const ProfileContainer = compose(
	connect(mapStateToProps, mapDispatchToProps),
	// WithAuthRediredct
)(Profile)

export default ProfileContainer;