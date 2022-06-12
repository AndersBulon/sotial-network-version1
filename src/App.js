import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import Homepage from "./pages/Homepage/Homepage";
import News from "./pages/News/News";
import Music from "./pages/Music/Music";
import Settings from "./pages/Settings/Settings";
import { Notfound } from "./pages/Notfound/Notfound";
import MessagesContainer from "./pages/Messages/MessagesContainer.jsx";
import UsersContainer from "./pages/Users/UsersContainer.jsx";
import ProfileContainer from "./pages/Profile/ProfileContainer.jsx";


//*----------------------------------------------------
function App() {
	return (
		<div className="app-wrapper grid">
			<Routes >
				<Route path="/" element={<Layout />}>
					<Route index element={<Homepage />} />
					<Route path="profile" element={<ProfileContainer />} />
					<Route path="messages/" element={<MessagesContainer />} />
					<Route path="users/" element={<UsersContainer />} />
					<Route path="news" element={<News />} />
					<Route path="music" element={<Music />} />
					<Route path="settings" element={<Settings />} />
					<Route path="*" element={<Notfound />} />
				</Route>
			</Routes>
		</div>
	);
}
//*--------------------------------------------------
export default App;
