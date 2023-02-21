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

export default function Bottombar() {
	return (
		<div className="flex bottombar justify-around bottom-0 w-full sticky bg-white py-4 overscroll-none">
			<div className="flex items-center">
				<FontAwesomeIcon
					icon={faHouse}
					className="sidebar-icon"
				/>

				{/* <h1 className="">Home</h1> */}
			</div>
			<div className="flex items-center">
				<FontAwesomeIcon
					icon={faCompass}
					className="sidebar-icon"
				/>
				{/* <h1>Explore</h1> */}
			</div>
			<div className="flex items-center">
				<FontAwesomeIcon
					icon={faClapperboard}
					className="sidebar-icon"
				/>
				{/* <h1>Reels</h1> */}
			</div>
			<div className="flex items-center">
				<FontAwesomeIcon
					icon={faSquarePlus}
					className="sidebar-icon"
				/>
				{/* <h1>Create</h1> */}
			</div>
			<div className="flex items-center">
				<FontAwesomeIcon
					icon={faFacebookMessenger}
					className="sidebar-icon"
				/>
				{/* <h1>Messages</h1> */}
			</div>
			<div className="flex items-center">
				<img
					src={require("../assets/profile-picture.png")}
					className="profile-icon"
				/>
				{/* <h1>Profile</h1> */}
			</div>
		</div>
	);
}
