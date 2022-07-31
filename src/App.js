
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import News from "./pages/News/News";
import Music from "./pages/Music/Music";
import Settings from "./pages/Settings/Settings";
import { Notfound } from "./pages/Notfound/Notfound";
import MessagesContainer from "./pages/Messages/MessagesContainer.jsx";
import UsersContainer from "./pages/Users/UsersContainer.jsx";
import { NewsSport } from "./pages/News/NewsSport.jsx";
import ProfileContainer from "./pages/Profile/ProfileContainer.jsx";
import LoginContainer from "./pages/Login/LoginContainer.jsx";
import { Component } from "react";
import { connect } from "react-redux";
import { initializeAppThunkCreator } from "./redux/app_reducer.js";
import { Preloader } from "./components/Preloader/Preloader.jsx";
import ProfileSettingsContainer from "./components/ProfileSettings/ProfileSettingsContainer.jsx";
import PaginatorSettingsContainer from "./components/Paginator/PaginatorSettings/PaginatorSettingsContainer.jsx";
import { Layout } from "./components/Layout/Layout.jsx";



//*----------------------------------------------------
class App extends Component {

	componentDidMount() {
		this.props.initializeAppThunkCreator()
	}
	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		
		return (
			<div className="app-wrapper grid">
				<Routes >
					<Route path="/" element={<Layout />}>
						<Route index element={<Homepage />} />
						<Route path="profile" element={<ProfileContainer />} />
						<Route path="profile/:id" element={<ProfileContainer />} />
						<Route path="messages" element={<MessagesContainer />} />
						<Route path="users" element={<UsersContainer />} />
						<Route path="news" element={<News />} />
						<Route path="news/:id" element={<NewsSport />} />
						<Route path="login" element={<LoginContainer />} />
						<Route path="music" element={<Music />} />
						<Route path="settings" element={<Settings />} />
						<Route path="settings/profile" element={<ProfileSettingsContainer />} />
						<Route path="settings/paginator" element={<PaginatorSettingsContainer />} />
						<Route path="*" element={<Notfound />} />
					</Route>
				</Routes>
			</div>
		);
	}

}
const mapDispatchToProps = (dispatch) => {
	return {
		initializeAppThunkCreator: () => dispatch(initializeAppThunkCreator())
	}
}
const mapStateToProps = (state) => {
	return {
		initialized: state.app.initialized
	}
}


//*--------------------------------------------------
export default connect(mapStateToProps, mapDispatchToProps)(App);
