import HorizontalScroll from "react-scroll-horizontal";
import React, { useState, useEffect } from "react";

export default function StorySlider() {
	const [stories, setStories] = useState([]);

	const getApiData = async () => {
		const response = await fetch(
			"https://private-479ce-instagramclone3.apiary-mock.com/stories"
		).then((response) => response.json());
		setStories(response.stories);
		console.log(stories, "<<<");
	};

	useEffect(() => {
		getApiData();
	}, []);

	return (
		<>
			{stories && (
				<HorizontalScroll
					className="story-carousel flex items-center py-16 mt-4"
					reverseScroll={true}
				>
					<div className="flex flex-col items-center mr-6">
						<div className="story-container flex items-center justify-center">
							<img
								src={require("../assets/profile-picture.png")}
								className="story-profile-picture"
							/>
						</div>
						<p className="story-username">You</p>
					</div>
					{stories.map((story) => {
						return (
							<div className="flex flex-col items-center mr-6 cursor-pointer">
								<div className="story-container flex items-center justify-center object-contain">
									<img
										src={story.profilePicture}
										className="story-profile-picture"
									/>
								</div>
								<p className="story-username">{story.username}</p>
							</div>
						);
					})}

					{/* <div
				className="flex flex-col items-center mr-6"
				// reverseScroll={true}
			>
				<div className="story-container flex items-center justify-center">
					<img
						src={require("../assets/profile-picture.png")}
						className="story-profile-picture"
					/>
				</div>
				<p className="story-username">albertusr...</p>
			</div>
			<div
				className="flex flex-col items-center mr-6"
				// reverseScroll={true}
			>
				<div className="story-container flex items-center justify-center">
					<img
						src={require("../assets/profile-picture.png")}
						className="story-profile-picture"
					/>
				</div>
				<p className="story-username">albertusr...</p>
			</div>
			<div
				className="flex flex-col items-center mr-8"
				// reverseScroll={true}
			>
				<div className="story-container flex items-center justify-center">
					<img
						src={require("../assets/profile-picture.png")}
						className="story-profile-picture"
					/>
				</div>
				<p className="story-username">albertusr...</p>
			</div>
			<div
				className="flex flex-col items-center mr-6"
				// reverseScroll={true}
			>
				<div className="story-container flex items-center justify-center">
					<img
						src={require("../assets/profile-picture.png")}
						className="story-profile-picture"
					/>
				</div>
				<p className="story-username">albertusr...</p>
			</div>
			<div
				className="flex flex-col items-center mr-6"
				// reverseScroll={true}
			>
				<div className="story-container flex items-center justify-center">
					<img
						src={require("../assets/profile-picture.png")}
						className="story-profile-picture"
					/>
				</div>
				<p className="story-username">albertusr...</p>
			</div>
			<div
				className="flex flex-col items-center mr-6"
				// reverseScroll={true}
			>
				<div className="story-container flex items-center justify-center">
					<img
						src={require("../assets/profile-picture.png")}
						className="story-profile-picture"
					/>
				</div>
				<p className="story-username">albertusr...</p>
			</div> */}
				</HorizontalScroll>
			)}
		</>
	);
}
