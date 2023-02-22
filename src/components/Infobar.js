import { useMediaQuery } from "react-responsive";

export default function Infobar() {
	const isShrunkDesktop = useMediaQuery({ query: "(max-width: 1263px" });
	const isFullDesktop = useMediaQuery({ query: "(min-width: 1264px" });

	return (
		<div className="infobar flex flex-col">
			<div className="flex items-center m-4">
				<img
					src={require("../assets/profile-picture.png")}
					className="infobar-profile-picture"
				/>
				<div className="ml-10">
					<p className="font-bold font-14">albertusrheza</p>
					<p className="text-defaultGrey font-14">Albertus Rheza</p>
				</div>
			</div>
			<div className="flex flex-col suggestions w-full m-4">
				<div className="flex justify-between items-center">
					<p className="text-defaultGrey font-bold font-14">
						Suggestions for you
					</p>
					<p className="text-defaultBlack font-bold font-14">See All</p>
				</div>
				<div className="flex flex-col w-full my-4 gap-4">
					<div className="flex items-center suggestion-card w-full">
						<div className="flex w-full items-center">
							<img
								src={require("../assets/profile-picture.png")}
								className="mr-5 img-small"
							/>
							<div className="">
								<p className="font-bold font-14">albertusrheza</p>
							</div>
						</div>
						<div className="">
							<p className="text-defaultBlue font-bold font-14">Follow</p>
						</div>
					</div>
					<div className="flex items-center w-full">
						<div className="flex w-full items-center">
							<img
								src={require("../assets/profile-picture.png")}
								className="mr-5 img-small"
							/>
							<div className="">
								<p className="font-bold font-14">albertusrheza</p>
							</div>
						</div>
						<div className="">
							<p className="text-defaultBlue font-bold font-14">Follow</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
