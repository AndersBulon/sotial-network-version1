import { connect } from "react-redux";
import { setProfileThunkCreator } from "../../redux/profile_reducer.js";
import { WithAuthRediredct } from "../../components/HOC/WithAuthRedirect.js";
import { compose } from "redux";
import {Profile} from "./Profile.jsx";


const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		isLoadingState: state.profilePage.isLoadingState,
		
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		setProfileThunkCreator: (profile) => { dispatch(setProfileThunkCreator(profile)) },
	}
}

const ProfileContainer = compose(
	connect(mapStateToProps, mapDispatchToProps),
	WithAuthRediredct
)(Profile)

export default ProfileContainer;