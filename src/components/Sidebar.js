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
import React, { useState } from "react";

export default function Sidebar() {
	const [openPanel, setOpenPanel] = useState(false);
	return (
		<div className="sidebar flex flex-col h-screen fixed">
			<div className="logo">
				<img
					className="h-full"
					src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Black-Logo.wine.svg"
				/>
			</div>
			<div className="sidebar-list flex flex-col flex-grow">
				<div className="flex items-center cursor-pointer">
					<FontAwesomeIcon
						icon={faHouse}
						className="sidebar-icon"
					/>

					<h1 className="">Home</h1>
				</div>
				<div
					className="flex items-center cursor-pointer"
				>
					<FontAwesomeIcon
						icon={faMagnifyingGlass}
						className="sidebar-icon"
					/>
					<h1>Search</h1>
				</div>
				<div className="flex items-center cursor-pointer">
					<FontAwesomeIcon
						icon={faCompass}
						className="sidebar-icon"
					/>
					<h1>Explore</h1>
				</div>
				<div className="flex items-center cursor-pointer">
					<FontAwesomeIcon
						icon={faClapperboard}
						className="sidebar-icon"
					/>
					<h1>Reels</h1>
				</div>
				<div className="flex items-center cursor-pointer">
					<FontAwesomeIcon
						icon={faFacebookMessenger}
						className="sidebar-icon"
					/>
					<h1>Messages</h1>
				</div>
				<div className="flex items-center cursor-pointer">
					<FontAwesomeIcon
						icon={faHeart}
						className="sidebar-icon"
					/>
					<h1>Notifications</h1>
				</div>
				<div className="flex items-center cursor-pointer">
					<FontAwesomeIcon
						icon={faSquarePlus}
						className="sidebar-icon"
					/>
					<h1>Create</h1>
				</div>
				<div className="flex items-center cursor-pointer">
					<img
						src={require("../assets/profile-picture.png")}
						className="profile-icon"
					/>
					<h1>Profile</h1>
				</div>
			</div>
			<div className="sidebar-list cursor-pointer">
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
