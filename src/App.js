// import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Posts from "./components/Posts/Posts";
import Profile from "./components/Profile/Profile";
import TopImage from "./components/TopImage/TopImage";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

//*----------------------------------------------------
function App() {
  return (
	<BrowserRouter>
	      <div className="app-wrapper grid">
        <Header />
        <TopImage />
        <NavBar />
        <div className="appcontent designe">
				 <Routes>
					 <Route path="/profile" element={<Profile />} />
            	<Route path="/messages" element={<Posts />} />
            	<Route path="/news" element={<News />} />
            	<Route path="/music" element={<Music />} />
            	<Route path="/settings" element={<Settings />} />
				 </Routes> 
        </div>
        <Footer />
      </div>
	</BrowserRouter>
  );
}
//*--------------------------------------------------
export default App;
