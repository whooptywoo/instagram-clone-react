import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function HeaderMobile() {
	return (
		<div className="header-mobile flex items-center justify-between">
			<div className="logo">
				<img
					className="h-full"
					src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Black-Logo.wine.svg"
				/>
			</div>
			<div className="flex items-center">
				<input
					type="search"
					placeholder="Search"
					className=""
				/>
				<FontAwesomeIcon
					icon={faHeart}
					className="sidebar-icon"
				/>
			</div>
		</div>
	);
}
