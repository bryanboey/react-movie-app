import React from "react";
import MovieList from "./MovieList";

export default function Dashboard() {
	const apiKey = process.env.REACT_APP_TMDB_API_KEY;
	const trendingUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;
	const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
	const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`

	return (
		<div className="container-fluid movie-app mb-4">
			<div className="row d-flex mt-3 ms-2">
				<h5>Trending Now</h5>
			</div>
			<div className="row mx-3">
				<MovieList url={trendingUrl} />
			</div>
			<div className="row d-flex mt-3 ms-2">
				<h5>Most Popular</h5>
			</div>
			<div className="row mx-3">
				<MovieList url={popularUrl} />
			</div>
			<div className="row d-flex mt-3 ms-2">
				<h5>Upcoming</h5>
			</div>
			<div className="row mx-3">
				<MovieList url={upcomingUrl} />
			</div>
		</div>
	);
}
