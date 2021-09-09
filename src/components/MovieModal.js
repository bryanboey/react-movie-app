import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

export default function MovieModal({ videoData, isOpen, setIsOpen }) {
	return (
		<>
			<ModalVideo
				channel="youtube"
				autoplay={1}
				isOpen={isOpen}
				videoId={videoData.key}
				onClose={() => setIsOpen(false)}
			/>
			<button
				className="btn-sm trailer-btn btn-light"
				onClick={() => setIsOpen(true)}
			>
				Watch trailer
			</button>
		</>
	);
}