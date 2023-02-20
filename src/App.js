import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import SidebarShrink from "./components/SidebarShrink";
import { useMediaQuery } from "react-responsive";
import Bottombar from "./components/Bottombar";
import HeaderMobile from "./components/HeaderMobile";

function App() {
	const isShrunkDesktop = useMediaQuery({ query: "(max-width: 1263px" });
	const isFullDesktop = useMediaQuery({ query: "(min-width: 1264px" });
	const isMobile = useMediaQuery({ query: "(max-width: 770px" });

	return (
		isMobile && 
			<div className="flex flex-col h-screen w-screen">
				<HeaderMobile />
				<div className="flex-grow"></div>
				<Bottombar />
			</div>
	// <div className="flex h-screen w-screen justify-between">
	// 	{isShrunkDesktop && <SidebarShrink />}
	// 	{isFullDesktop && <Sidebar />}
	// 	<div className="main flex">
	// 		<div className="content flex-grow"></div>
	// 		<div className="infobar border-2"></div>
	// 	</div>
	// </div>
}

export default App;
