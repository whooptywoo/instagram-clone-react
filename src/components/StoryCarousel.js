import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
	faChevronRight,
	faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function StoryCarousel() {
	return (
		<div className="story-carousel flex items-center gap-4 relative py-16">
			{/* <button className="absolute left-2">
				<FontAwesomeIcon
					icon={faChevronLeft}
					className="story-arrow-icon"
				/>
			</button> */}
			<button
				className="absolute right-2 btn-scroll"
				onclick="scrollHorizontally(1)"
			>
				<FontAwesomeIcon
					icon={faChevronRight}
					className="story-arrow-icon"
				/>
			</button>
			<div className="flex flex-col items-center">
				<div className="story-container flex items-center justify-center">
					<img
						src={require("../assets/profile-picture.png")}
						className="story-profile-picture"
					/>
				</div>
                <p className="story-username">albertusr...</p>
			</div>
            <div className="flex flex-col items-center">
				<div className="story-container flex items-center justify-center">
					<img
						src={require("../assets/profile-picture.png")}
						className="story-profile-picture"
					/>
				</div>
                <p className="story-username">albertusr...</p>
			</div>
            <div className="flex flex-col items-center">
				<div className="story-container flex items-center justify-center">
					<img
						src={require("../assets/profile-picture.png")}
						className="story-profile-picture"
					/>
				</div>
                <p className="story-username">albertusr...</p>
			</div>
		</div>
	);
}
