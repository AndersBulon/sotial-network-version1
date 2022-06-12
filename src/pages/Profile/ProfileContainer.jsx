import React from "react";
import Profile from "./Profile.jsx";
import { connect } from "react-redux";
import axios from "axios";
import { setProfile } from "../../redux/profile_reducer.js";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return (
			<Component
				{...props}
				router={{ location, navigate, params }}
			/>
		);
	}
	return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.router.params.userId;

		if (!userId) {
			userId = 2;
		}

		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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


let WithUrlDataProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setProfile })(WithUrlDataProfileContainer);
