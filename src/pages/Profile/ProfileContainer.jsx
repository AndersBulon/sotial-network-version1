import React from "react";
import Profile from "./Profile.jsx";
import { connect } from "react-redux";
import axios from "axios";
import { setProfile } from "../../redux/profile_reducer.js";


class ProfileContainer extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/22`)
			.then(response => {
				this.props.setProfile(response.data)
			});
	}
	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} />
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile
})

export default connect(mapStateToProps, { setProfile })(ProfileContainer);
