import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
	faHeart,
	faComment,
	faPaperPlane,
	faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import Modal from "react-overlays/Modal";

export default function Posts() {
	const [showModal, setShowModal] = useState(false);
	var handleClose = () => setShowModal(false);

	var handleSave = () => {
		console.log("success");
	};

	const renderBackdrop = (props) => (
		<div
			className="backdrop"
			{...props}
		/>
	);

	return (
		<div className="flex flex-col w-full">
			<Modal
				className="modal"
				show={showModal}
				onHide={handleClose}
				renderBackdrop={renderBackdrop}
			>
				<div>
					<div className="modal-header">
						<div className="modal-title">Modal Heading</div>
						<div>
							<span
								className="close-button"
								onClick={handleClose}
							>
								x
							</span>
						</div>
					</div>
					<div className="modal-desc">
						<p>Modal body contains text.</p>
					</div>
					<div className="modal-footer">
						<button
							className="secondary-button"
							onClick={handleClose}
						>
							Close
						</button>
						<button
							className="primary-button"
							onClick={handleSave}
						>
							Success
						</button>
					</div>
				</div>
			</Modal>
			<div className="flex flex-col post">
				<div className="flex items-center justify-between py-4">
					<div className="flex gap-2 items-center">
						<div className="flex items-center justify-center flex-shrink">
							<img
								src={require("../assets/profile-picture.png")}
								className="img-small"
							/>
						</div>
						<p className="font-bold font-14">albertusrheza</p>
						<p className="text-defaultGrey font-14 font-extrabold">·</p>
						<p className="text-defaultGrey font-14">2d</p>
					</div>
					<div className="flex items-center">
						<FontAwesomeIcon
							icon={faEllipsis}
							className="sidebar-icon"
						/>
					</div>
				</div>
				<div className="w-full">
					<img
						src="https://image.shutterstock.com/z/stock-photo-gay-queer-african-man-wearing-makeup-smiling-at-camera-outdoor-nonbinary-and-transgender-lgbtq-2221331023.jpg"
						className="rounded-sm"
					/>
				</div>
				<div className="w-full flex justify-between py-4">
					<div className="flex gap-4">
						<div className="flex items-center">
							<FontAwesomeIcon
								icon={faHeart}
								className="sidebar-icon"
							/>
						</div>
						<div className="flex items-center">
							<FontAwesomeIcon
								icon={faComment}
								className="sidebar-icon"
							/>
						</div>
						<div className="flex items-center">
							<FontAwesomeIcon
								icon={faPaperPlane}
								className="sidebar-icon"
							/>
						</div>
					</div>
					<div className="flex items-center">
						<FontAwesomeIcon
							icon={faBookmark}
							className="sidebar-icon"
						/>
					</div>
				</div>
				<div>
					<p className="font-14 font-bold">100 likes</p>
				</div>
				<div className="flex">
					<p className="font-14 font-bold">
						albertusrheza<span> </span>
						<span className="font-14 font-normal">
							A bitter sweet goodbye, thank you for loving Nik’s Pick Hair
							Tonic!😩💘
						</span>
					</p>
				</div>
				<p
					className="font-14 text-defaultGrey"
					onClick={() => setShowModal(true)}
				>
					View all 100 comments
				</p>
			</div>
		</div>
	);
}
