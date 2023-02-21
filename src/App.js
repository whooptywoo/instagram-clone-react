import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import SidebarShrink from "./components/SidebarShrink";
import { useMediaQuery } from "react-responsive";
import Bottombar from "./components/Bottombar";
import HeaderMobile from "./components/HeaderMobile";
import Infobar from "./components/Infobar";
import StoryCarousel from "./components/StoryCarousel";
import Posts from "./components/Posts";

function App() {
	const isShrunkDesktop = useMediaQuery({ query: "(max-width: 1263px" });
	const isFullDesktop = useMediaQuery({ query: "(min-width: 1264px" });
	const isMobile = useMediaQuery({ query: "(max-width: 770px" });

	let marginMain = "";

	if (isFullDesktop) {
		marginMain = "171.5px";
	}

	if (isShrunkDesktop) {
		marginMain = "39.5px";
	}

	return (
		<div>
			{isMobile && (
				<div className="flex flex-col h-screen w-screen relative">
					<HeaderMobile />
					<div className="px-5 overscroll-none">
						<StoryCarousel />
						<Posts />
					</div>
					<Bottombar />
				</div>
			)}
			{!isMobile && (
				<div className="flex h-screen w-screen justify-between">
					{isShrunkDesktop && <SidebarShrink />}
					{isFullDesktop && <Sidebar />}
					<div
						className="main flex flex-grow"
						style={{ margin: `0px ${marginMain}` }}
					>
						<div className="content flex flex-col flex-grow">
							<StoryCarousel />
							<Posts />
						</div>
						<Infobar />
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
