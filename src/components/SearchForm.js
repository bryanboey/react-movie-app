import React, { useState } from "react";
import useFetch from "./hooks/useFetch";
import MovieCard from "./MovieCard";
import ResultsPagination from "./ResultsPagination";

export default function SearchForm() {
	const [query, setQuery] = useState("");
	const [prevQuery, setPrevQuery] = useState("");
	const [currentPage, setCurrentPage] = useState(1);

	const apiKey = process.env.REACT_APP_TMDB_API_KEY;
	const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${prevQuery}&page=${currentPage}`;

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setPrevQuery(query);
		setCurrentPage(1);
		setQuery("");
	};

	const { data, loading } = useFetch(url);

	return (
		<div className="container align-items-center justify-content-center">
			<div className="form-group row m-4">
				<form className="" onSubmit={handleSubmit}>
					<input
						className="form-control w-75 mx-auto"
						onChange={handleChange}
						value={query}
						type="search"
						id="query"
						placeholder="Search for movies"
					/>
				</form>
			</div>
			<div className="movies-container d-flex flex-wrap justify-content-center m3">
				<div className="row">
					{loading && (
						<div className="spinner-border" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					)}
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
						<ResultsPagination
							totalPages={data.total_pages}
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
						/>
					</div>
				) : ( "" )}
			</div>
		</div>
	);
}
