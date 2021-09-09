import React from "react";
import { useGlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

export default function WatchList() {
	const { state } = useGlobalContext();

	return (
		<div className="container align-items-center justify-content-center m-auto py-3">
			{state.completedList.length > 0 ? (
				<div className="row">
					<div className="movies-container d-flex flex-wrap justify-content-start m3">
						{state.completedList.map((movie) => {
							return (
								<div
									key={movie.id}
									className="card completedlist-card m-2 my-2 bg-dark"
									style={{ width: "18%", minWidth: "150px" }}
								>
									<MovieCard movie={movie} />
								</div>
							);
						})}
					</div>
				</div>
			) : (
				<h2>Add movies you've watched here!</h2>
			)}
		</div>
	);
}
