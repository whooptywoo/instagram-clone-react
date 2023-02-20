import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHouse,
	faMagnifyingGlass,
	faClapperboard,
	faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
	faCompass,
	faHeart,
	faSquarePlus,
} from "@fortawesome/free-regular-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

export default function Sidebar() {
	return (
		<div className="sidebar flex flex-col h-screen">
			<div className="logo">
				<img
					className="h-full"
					src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Black-Logo.wine.svg"
				/>
			</div>
			<div className="sidebar-list flex flex-col flex-grow">
				<div className="flex items-center">
					<FontAwesomeIcon
						icon={faHouse}
						className="sidebar-icon"
					/>

					<h1 className="">Home</h1>
				</div>
				<div className="flex items-center">
					<FontAwesomeIcon
						icon={faMagnifyingGlass}
						className="sidebar-icon"
					/>
					<h1>Search</h1>
				</div>
				<div className="flex items-center">
					<FontAwesomeIcon
						icon={faCompass}
						className="sidebar-icon"
					/>
					<h1>Explore</h1>
				</div>
				<div className="flex items-center">
					<FontAwesomeIcon
						icon={faClapperboard}
						className="sidebar-icon"
					/>
					<h1>Reels</h1>
				</div>
				<div className="flex items-center">
					<FontAwesomeIcon
						icon={faFacebookMessenger}
						className="sidebar-icon"
					/>
					<h1>Messages</h1>
				</div>
				<div className="flex items-center">
					<FontAwesomeIcon
						icon={faHeart}
						className="sidebar-icon"
					/>
					<h1>Notifications</h1>
				</div>
				<div className="flex items-center">
					<FontAwesomeIcon
						icon={faSquarePlus}
						className="sidebar-icon"
					/>
					<h1>Create</h1>
				</div>
				<div className="flex items-center">
					<img
						src={require("../assets/profile-picture.png")}
						className="profile-icon"
					/>
					<h1>Profile</h1>
				</div>
			</div>
			<div className="sidebar-list">
				<div className="flex items-center ">
					<FontAwesomeIcon
						icon={faBars}
						className="sidebar-icon"
					/>
					<h1>More</h1>
				</div>
			</div>
		</div>
	);
}
