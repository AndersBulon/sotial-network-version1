import { Outlet } from "react-router-dom"
import Footer from "./Footer/Footer.jsx"
import Header from "./Header/Header.jsx"
import { NavBar } from "./NavBar/NavBar.jsx"
import TopImage from "./TopImage/TopImage.jsx"

const Layout = () => {
	return (
		<>
			<Header />
			<TopImage />
			<NavBar />
			<div className="outletcontainer designe">
				<Outlet />
			</div>
			<Footer />
		</>
	)
}

export { Layout };