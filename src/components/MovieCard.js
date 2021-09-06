import React from "react";
import { Link } from 'react-router-dom'
import Button from "./Button";

export default function MovieCard({ movie }) {
	const posterUrl = "https://image.tmdb.org/t/p/w500";

	return (
		<>
			<Link to={`/movies/${movie.id}`}>
				{movie.poster_path ? (
					<img
						className="card-img-top"
						src={`${posterUrl}${movie.poster_path}`}
						alt={`${movie.title}`}
					/>
				) : (
					<img
						className="card-img-top"
						src="https://cinemaone.net/images/movie_placeholder.png"
						alt={`${movie.title}`}
					/>
				)}
			</Link>
			<Button movie={movie}/>
			<div className="card-body">
				<p>{movie.title}</p>
			</div>
		</>
	);
}
