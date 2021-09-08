import React from "react";
import { useGlobalContext } from "../context/GlobalState";

export default function Button({ movie }) {
	const {
		state,
		addToWatchList,
		removeFromWatchList,
		moveToCompletedList,
		addToCompletedList,
		removeFromCompletedList,
	} = useGlobalContext();

	const watchListMovie = state.watchList.find(
		(el) => el.id === movie.id);
	const completedListMovie = state.completedList.find(
		(el) => el.id === movie.id);

	return (
		<>
			{watchListMovie ? (
				<>
					<button
						className="btn btn-sm eye-slash-btn overlay-btn btn-dark"
						onClick={() => removeFromWatchList(movie.id)}
					>
						<i className="fas fa-eye-slash"></i>
					</button>
					<button
						className="btn btn-sm check-circle-btn overlay-btn btn-dark"
						onClick={() => moveToCompletedList(movie)}
					>
						<i className="fas fa-check-circle"></i>
					</button>
				</>
			) : completedListMovie ? (
				<>
					<button
						className="btn btn-sm minus-circle-btn overlay-btn btn-dark"
						onClick={() => removeFromCompletedList(movie.id)}
					>
						<i className="fas fa-minus-circle"></i>
					</button>
				</>
			) : (
				<>
                    <button 
                        className="btn btn-sm eye-btn overlay-btn btn-dark" 
                        onClick={() => addToWatchList(movie)}
                    >
                        <i className="fas fa-eye"></i>
                    </button>
					<button
						className="btn btn-sm check-circle-btn overlay-btn btn-dark"
						onClick={() => addToCompletedList(movie)}
					>
						<i className="fas fa-check-circle"></i>
					</button>
				</>
			)}
		</>
	);
}
