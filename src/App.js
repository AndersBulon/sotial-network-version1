// import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Posts from "./components/Posts/Posts";
import Profile from "./components/Profile/Profile";
import TopImage from "./components/TopImage/TopImage";

//*----------------------------------------------------
function App() {
  return (
    <div className="app-wrapper grid">
       <Header />
       <NavBar />  
       <TopImage />
       <Profile />
       <Posts />
       <Footer />
    </div>
  );
}
//*--------------------------------------------------
export default App;
