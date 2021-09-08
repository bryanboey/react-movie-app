import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import useGetVideo from "./hooks/useGetVideo";

export default function MovieDetails() {
	const { id } = useParams();

	const apiKey = process.env.REACT_APP_TMDB_API_KEY;

	const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
	const moviePosterUrl = "https://image.tmdb.org/t/p/w500";

	const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`
	const youtubeUrl = "https://www.youtube.com/watch?v=";

	const { data, loading, error } = useFetch(movieDetailsUrl);

	const videoData = useGetVideo(videoUrl);

	return (
		<div className="container">
			{error && <div>{error}</div>}
			{loading && (
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			)}
			<div className="d-flex align-items-center justify-content-end m-3">
				<Link to="/">
					<button className="btn btn-dark back-btn">
						Back to Home
					</button>
				</Link>
			</div>
			{data && (
				<div className="card details-card text-white bg-dark p-3">
					<div className="row g-0">
						<div className="col-sm-3 align-items-start">
							<img
								src={`${moviePosterUrl}${data.poster_path}`}
								className="img-fluid rounded-start"
								alt={data.title}
							/>
						</div>
						<div className="col-sm-9">
							<div className="card-body detail-card">
								<h1 className="card-title">{data.title}</h1>
								<p className="card-text">{data.overview}</p>
								<p className="card-text">
									<strong>Runtime: </strong>
									{data.runtime} minutes
								</p>
								<p className="card-text">
									<strong>Release date: </strong>
									{data.release_date
										? ( new Date(
												data.release_date
										  ).toLocaleDateString("en-gb", {
												day: "numeric",
												month: "long",
												year: "numeric",
										  })
										 ) : ( "-" )}
								</p>
								{data.imdb_id ? (
									<a href={`https://www.imdb.com/title/${data.imdb_id}`}>
										<img
											id="imdb-image"
											src="https://raw.githubusercontent.com/bryanboey/react-movie-app/a32ba52186a36b82d94e2b38e685b8375a3f005b/src/lib/images/imdb-logo.svg"
											alt="imdb"
											style={{ width: "45px" }}
										/>
									</a>
								) : ( "" )}
								{videoData ? <a href={`${youtubeUrl}${videoData.key}`}>Youtube</a> : ""}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
