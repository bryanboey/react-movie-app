import React from "react";
import { useGlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

export default function WatchList() {
	const { state } = useGlobalContext();

	return (
		<div className="container align-items-center justify-content-center m-auto mt-3 pb-3">
			{state.watchList.length > 0 ? (
				<div className="row">
					<div className="movies-container d-flex flex-wrap justify-content-start m3">
						{state.watchList.map((movie) => {
							return (
								<div
									key={movie.id}
									className="card watchlist-card m-2 my-2"
									style={{ width: "18%", minWidth: "150px" }}
								>
									<MovieCard movie={movie} />
								</div>
							);
						})}
					</div>
				</div>
			) : (
				<h2>No movies added yet. Add some!</h2>
			)}
		</div>
	);
}
