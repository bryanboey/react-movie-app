import React from "react";
import { useGlobalContext } from "../context/GlobalState";
import ReactTooltip from "react-tooltip";

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
					<ReactTooltip
						id="eye-slash"
						type="dark"
						effect="solid"
						delayShow={300}
					/>
					<button
						data-tip="remove from watchlist"
						data-for="eye-slash"
						className="btn btn-sm eye-slash-btn overlay-btn btn-dark"
						onClick={() => removeFromWatchList(movie.id)}
					>
						<i className="fas fa-eye-slash"></i>
					</button>
					<ReactTooltip
						id="check-circle"
						type="dark"
						effect="solid"
						delayShow={300}
					/>
					<button
						data-tip="move to completed"
						data-for="check-circle"
						className="btn btn-sm check-circle-btn overlay-btn btn-dark"
						onClick={() => moveToCompletedList(movie)}
					>
						<i className="fas fa-check-circle"></i>
					</button>
				</>
			) : completedListMovie ? (
				<>
					<ReactTooltip
						id="minus-circle"
						type="dark"
						effect="solid"
						delayShow={300}
					/>
					<button
						data-tip="remove from completed"
						data-for="minus-circle"
						className="btn btn-sm minus-circle-btn overlay-btn btn-dark"
						onClick={() => removeFromCompletedList(movie.id)}
					>
						<i className="fas fa-minus-circle"></i>
					</button>
				</>
			) : (
				<>
					<ReactTooltip
						id="eye"
						type="dark"
						effect="solid"
						delayShow={300}
					/>
					<button
						data-tip="want to watch"
						data-for="eye"
						className="btn btn-sm eye-btn overlay-btn btn-dark"
						onClick={() => addToWatchList(movie)}
					>
						<i className="fas fa-eye"></i>
					</button>
					<ReactTooltip
						id="check-circle-2"
						type="dark"
						effect="solid"
						delayShow={300}
					/>
					<button
						data-tip="add to completed"
						data-for="check-circle-2"
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
