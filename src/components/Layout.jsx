import {Outlet } from "react-router-dom"
import Footer from "./Footer/Footer.jsx"
import Header from "./Header/Header.jsx"
import { NavBar } from "./NavBar/NavBar.jsx"
import TopImage from "./TopImage/TopImage.jsx"

const Layout = (props) => {
	return (
		<>
			<Header />
			<TopImage />
			<NavBar />
			<main className="outletcontainer">
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export { Layout };