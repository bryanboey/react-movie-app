import React, { useState, useEffect, useRef } from "react";
import useFetch from "./hooks/useFetch";
import MovieCard from "./MovieCard";
import ResultsPagination from "./ResultsPagination";
import QueryForm from "./QueryForm";

export default function MovieSearch() {
	const [query, setQuery] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [url, setUrl] = useState(null);
	const isInitialMount = useRef(true);

	useEffect(() => {
		const apiKey = process.env.REACT_APP_TMDB_API_KEY;
		const queryUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${currentPage}`;
		if (isInitialMount.current) {
			isInitialMount.current = false;
		} else {
			setUrl(queryUrl);
		}
	}, [query, currentPage]);

	const { data, loading } = useFetch(url);

	return (
		<div className="container align-items-center justify-content-center">
			<div className="form-group row m-4">
				<QueryForm setQuery={setQuery} />
			</div>
			<div className="movies-container d-flex flex-wrap justify-content-center m3">
				{loading && (
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				)}
				{data && data.total_results === 0 ? <p>No matching results. Search again?</p> : "" }
				{data &&
					data.results.map((movie) => {
						return (
							<div
								key={movie.id}
								className="card result-card m-2 my-2 bg-dark"
								style={{ width: "18%", minWidth: "150px" }}
							>
								<MovieCard movie={movie} />
							</div>
						);
					})}
			</div>
			{data && data.total_pages > 1 ? (
				<div className="row m-3">
					<div className="d-flex justify-content-center">
						<ResultsPagination
							totalPages={data.total_pages}
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
						/>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
}
