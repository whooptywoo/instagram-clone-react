import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEllipsis,
	faHeart as faHeartSolid,
	faBookmark as faBookmarkSolid,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import {
	faHeart,
	faComment,
	faPaperPlane,
	faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import Modal from "react-overlays/Modal";

export default function Posts() {
	const [showModal, setShowModal] = useState(false);
	const [posts, setPosts] = useState([]);
	const [isLiked, setIsLiked] = useState(false);
	const [isSaved, setIsSaved] = useState(false);
	const [newComment, setNewComment] = useState("");
	const [postById, setPostById] = useState({
		user: { username: null },
		images: { standard_resolution: { url: "" } },
		caption: { from: { username: null } },
		comments: [],
	});
	const handleClose = () => setShowModal(false);
	const isMobile = useMediaQuery({ query: "(max-width: 770px" });

	const getApiData = async () => {
		const response = await fetch(
			"https://private-479ce-instagramclone3.apiary-mock.com/posts"
		).then((response) => response.json());
		setPosts(response.record.data);
	};

	let likeButton;

	if (isLiked) {
		likeButton = (
			<FontAwesomeIcon
				icon={faHeart}
				className="sidebar-icon"
			/>
		);
	} else {
		likeButton = (
			<FontAwesomeIcon
				icon={faHeartSolid}
				className="sidebar-icon"
				color="red"
			/>
		);
	}

	let saveButton;

	if (isSaved) {
		saveButton = (
			<FontAwesomeIcon
				icon={faBookmark}
				className="sidebar-icon"
			/>
		);
	} else {
		saveButton = (
			<FontAwesomeIcon
				icon={faBookmarkSolid}
				className="sidebar-icon"
				color="red"
			/>
		);
	}

	const getPostById = async (id) => {
		const response = await fetch(
			`https://private-479ce-instagramclone3.apiary-mock.com/posts/${id}`
		).then((response) => response.json());
		setPostById(response);
		console.log(postById);
	};

	useEffect(() => {
		console.log("abcd");
		getApiData();
	}, []);

	function handleNewCommentChange(e) {
		setNewComment(e.target.value);
		console.log(newComment);
	}

	const renderBackdrop = (props) => (
		<div
			className="backdrop"
			{...props}
		/>
	);

	return (
		<div className="flex flex-col w-full">
			{/* {!isMobile && postById ? ( */}
			{!isMobile && postById ? (
				<Modal
					className="modal"
					show={showModal}
					onHide={handleClose}
					renderBackdrop={renderBackdrop}
				>
					<div className="flex w-full h-full">
						<div className="w-1/2 bg-black">
							<div className="w-full flex items-center h-full">
								<img
									// src="https://image.shutterstock.com/z/stock-photo-gay-queer-african-man-wearing-makeup-smiling-at-camera-outdoor-nonbinary-and-transgender-lgbtq-2221331023.jpg"
									src={postById.images.standard_resolution.url}
									className=""
								/>
							</div>
						</div>
						<div className="w-1/2 description relative flex flex-col">
							<div className="flex justify-between w-full px-4 modal-header sticky top-0">
								<div className="flex gap-2 items-center py-4 w-full cursor-pointer">
									<div className="flex items-center justify-center flex-shrink">
										<img
											src={postById.user.profile_picture}
											className="img-small"
										/>
									</div>
									<p className="font-bold font-14">
										{postById.user.username}
										{/* albertusrheza */}
									</p>
								</div>
								<div className="flex items-center cursor-pointer">
									<FontAwesomeIcon
										icon={faEllipsis}
										className="sidebar-icon"
									/>
								</div>
							</div>
							<div className="flex flex-col flex-grow h-auto">
								<div className="flex flex-col w-full px-4 pt-4 cursor-pointer">
									<div className="flex">
										<img
											src={postById.user.profile_picture}
											className="img-small mr-4"
										/>

										<p className="font-14 font-bold">
											{postById.user.username}
											{/* albertusrheza */}
											<span> </span>
											<span className="font-14 font-normal">
												{postById.caption.text}
											</span>
										</p>
									</div>
								</div>

								<div className="flex flex-col mt-8 w-full px-4 gap-8">
									{postById.comments.map((comment) => {
										return (
											<div
												className="flex"
												key={comment.id}
											>
												<img
													// src={require("../assets/profile-picture.png")}
													src={comment.user.profile_picture}
													className="img-small mr-4"
												/>

												<p className="font-14 font-bold">
													{comment.user.username}
													<span> </span>
													<span className="font-14 font-normal">
														{comment.content}
													</span>
												</p>
											</div>
										);
									})}
								</div>
							</div>
							<div className="flex flex-col w-full absolute bottom-0 modal-footer h-1/4">
								<div className="w-full flex justify-between py-4 px-4">
									<div className="flex gap-4">
										<div
											className="flex items-center"
											// onClick={() => {
											// 	setIsLiked(!isLiked);
											// }}
										>
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
									<div
										className="flex items-center"
										// onClick={() => setIsSaved(!isSaved)}
									>
										<FontAwesomeIcon
											icon={faBookmark}
											className="sidebar-icon"
										/>
									</div>
								</div>
								<div>
									<p className="font-14 font-extrabold px-4">
										{postById.likes} likes
									</p>
								</div>
								<div className="mb-5 px-4">
									<p className="font-14">2 days ago</p>
								</div>
								<form className="flex w-full comment-box items-center h-full">
									<input
										placeholder="Add a comment..."
										className="bg-white py-2 px-4 w-full h-full"
										name="newComment"
										onChange={handleNewCommentChange}
									></input>
									{newComment && (
										<input
											type="submit"
											value="Post"
											className="mr-6 text-defaultBlue font-bold font-14 cursor-pointer"
										></input>
									)}
								</form>
							</div>
						</div>
					</div>
				</Modal>
			) : (
				<Modal
					className="modal-mobile"
					show={showModal}
					onHide={handleClose}
					renderBackdrop={renderBackdrop}
				>
					<div className="flex flex-col w-full h-full">
						<div className="flex justify-between w-full px-4 modal-header sticky top-0">
							<div className="flex gap-2 items-center py-4 w-full">
								<div className="flex items-center justify-center flex-shrink">
									<img
										src={require("../assets/profile-picture.png")}
										className="img-small"
									/>
								</div>
								<p className="font-bold font-14">{postById.user.username}</p>
							</div>
							<div className="flex items-center">
								<FontAwesomeIcon
									icon={faEllipsis}
									className="sidebar-icon"
								/>
							</div>
						</div>
						<div className="w-full bg-black h-3/5">
							<div className="w-full flex items-center h-full">
								<img
									src={postById.images.standard_resolution.url}
									className=""
								/>
							</div>
						</div>

						<div className="flex flex-col w-full absolute bottom-0 modal-footer h-1/4">
							<div className="w-full flex justify-between py-4 px-4">
								<div className="flex gap-4">
									<div
										className="flex items-center"
										// onClick={() => setIsLiked(!isLiked)}
									>
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
								<div
									className="flex items-center"
									// onClick={() => setIsSaved(!isSaved)}
								>
									<FontAwesomeIcon
										icon={faBookmark}
										className="sidebar-icon"
									/>
								</div>
							</div>
							<div>
								<p className="font-14 font-extrabold px-4">
									{postById.likes} likes
								</p>
							</div>
							<div className="mb-5 px-4">
								<p className="font-14">2 days ago</p>
							</div>
							<form className="flex w-full comment-box items-center h-full">
								<input
									placeholder="Add a comment..."
									className="bg-white py-2 px-4 w-full h-full"
									onChange={handleNewCommentChange}
								></input>
								<input
									type="submit"
									value="Post"
									className="mr-6 text-defaultBlue font-bold font-14 cursor-pointer"
								></input>
							</form>
						</div>
					</div>
				</Modal>
			)}
			{posts.map((post) => {
				return (
					<div
						className="flex flex-col post"
						key={post.id}
					>
						<div className="flex items-center justify-between py-4">
							<div className="flex gap-2 items-center cursor-pointer">
								<div className="flex items-center justify-center">
									<img
										src={post.user.profile_picture}
										className="img-small"
									/>
								</div>
								<p className="font-bold font-14">{post.user.username}</p>
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
						<div className="w-full flex justify-center items-center bg-black">
							<img
								src={post.images.standard_resolution.url}
								className="rounded-sm"
							/>
						</div>
						<div className="w-full flex justify-between py-4">
							<div className="flex gap-4">
								<div
									className="flex items-center cursor-pointer"
									// onClick={() => setIsLiked(!isLiked)}
								>
									<FontAwesomeIcon
										icon={faHeart}
										className="sidebar-icon"
									/>
								</div>
								<div className="flex items-center cursor-pointer">
									<FontAwesomeIcon
										icon={faComment}
										className="sidebar-icon"
									/>
								</div>
								<div className="flex items-center cursor-pointer">
									<FontAwesomeIcon
										icon={faPaperPlane}
										className="sidebar-icon"
									/>
								</div>
							</div>
							<div
								className="flex items-center cursor-pointer"
								// onClick={() => setIsSaved(!isSaved)}
							>
								<FontAwesomeIcon
									icon={faBookmark}
									className="sidebar-icon"
								/>
							</div>
						</div>
						<div>
							<p className="font-14 font-bold cursor-pointer">{post.likes} likes</p>
						</div>
						<div className="flex">
							<p className="font-14 font-bold">
								{post.caption.from.username}
								<span> </span>
								<span className="font-14 font-normal">{post.caption.text}</span>
							</p>
						</div>
						<p
							className="font-14 text-defaultGrey cursor-pointer cursor-pointer"
							onClick={() => {
								getPostById(post.id);
								setShowModal(true);
							}} 
						>
							View all {post.comments.length} comments
						</p>
					</div>
				);
			})}
		</div>
	);
}
