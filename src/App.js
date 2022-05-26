// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout.jsx";

import Homepage from "./pages/Homepage/Homepage";
import Profile from "./pages/Profile/Profile";
import Posts from "./pages/Posts/Posts";
import News from "./pages/News/News";
import Music from "./pages/Music/Music";
import Settings from "./pages/Settings/Settings";
import { Notfound } from "./pages/Notfound/Notfound";


//*----------------------------------------------------
function App() {
	return (
		<div className="app-wrapper grid">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Homepage />} />
					<Route path="profile" element={<Profile />} />
					<Route path="messages" element={<Posts />} />
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
