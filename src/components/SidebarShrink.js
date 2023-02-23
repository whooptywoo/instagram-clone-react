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
import {
	faFacebookMessenger,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function SidebarShrink() {
	return (

		<div className="sidebar-shrink flex flex-col h-screen items-center">
			<div className="flex items-center sidebar-header my-4 cursor-pointer">
				<FontAwesomeIcon
					icon={faInstagram}
					className="sidebar-icon"
				/>

				{/* <h1 className="">Home</h1> */}
			</div>
			<div className="sidebar-list flex flex-col flex-grow mt-7">
				<div className="flex items-center cursor-pointer">
					<FontAwesomeIcon
						icon={faHouse}
						className="sidebar-icon"
					/>

					{/* <h1 className="">Home</h1> */}
				</div>
				<div className="flex items-center cursor-pointer">
					<FontAwesomeIcon
						icon={faMagnifyingGlass}
						className="sidebar-icon"
					/>
					{/* <h1>Search</h1> */}
				</div>
				<div className="flex items-center cursor-pointer">
					<FontAwesomeIcon
						icon={faCompass}
						className="sidebar-icon"
					/>
					{/* <h1>Explore</h1> */}
				</div>
				<div className="flex items-center cursor-pointer">
					<FontAwesomeIcon
						icon={faClapperboard}
						className="sidebar-icon"
					/>
					{/* <h1>Reels</h1> */}
				</div>
				<div className="flex items-center cursor-pointer">
					<FontAwesomeIcon
						icon={faFacebookMessenger}
						className="sidebar-icon"
					/>
					{/* <h1>Messages</h1> */}
				</div>
				<div className="flex items-center cursor-pointer">
					<FontAwesomeIcon
						icon={faHeart}
						className="sidebar-icon"
					/>
					{/* <h1>Notifications</h1> */}
				</div>
				<div className="flex items-center cursor-pointer">
					<FontAwesomeIcon
						icon={faSquarePlus}
						className="sidebar-icon"
					/>
					{/* <h1>Create</h1> */}
				</div>
				<div className="flex items-center cursor-pointer">
					<img
						src={require("../assets/profile-picture.png")}
						className="profile-icon"
					/>
					{/* <h1>Profile</h1> */}
				</div>
			</div>
			<div className="sidebar-list">
				<div className="flex items-center cursor-pointer">
					<FontAwesomeIcon
						icon={faBars}
						className="sidebar-icon"
					/>
					{/* <h1>More</h1> */}
				</div>
			</div>
		</div>
	);
}
