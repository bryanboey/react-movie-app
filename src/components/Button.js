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

	const watchListMovie = state.watchList.find((el) => el.id === movie.id);
	const completedListMovie = state.completedList.find(
		(el) => el.id === movie.id
	);

	return (
		<>
			{watchListMovie ? (
				<>
					<button
						className="btn btn-sm remove-btn overlay-btn btn-dark"
						onClick={() => removeFromWatchList(movie.id)}
					>
						<i className="fas fa-minus"></i>
					</button>
					<button
						className="btn btn-sm check-btn overlay-btn btn-dark"
						onClick={() => moveToCompletedList(movie)}
					>
						<i className="fas fa-check"></i>
					</button>
				</>
			) : completedListMovie ? (
				<>
					<button
						className="btn btn-sm remove-btn overlay-btn btn-dark"
						onClick={() => removeFromCompletedList(movie.id)}
					>
						<i className="fas fa-minus"></i>
					</button>
				</>
			) : (
				<>
                    <button 
                        className="btn btn-sm overlay-btn btn-dark" 
                        onClick={() => addToWatchList(movie)}
                    >
                        <i className="fas fa-plus"></i>
                    </button>
					<button
						className="btn btn-sm check-btn overlay-btn btn-dark"
						onClick={() => addToCompletedList(movie)}
					>
						<i className="fas fa-check"></i>
					</button>
				</>
			)}
		</>
	);
}
