import React from 'react'
import useFetch from './hooks/useFetch'
import { Link } from 'react-router-dom'

export default function MovieList({ url }) {
    const { data, loading, error } = useFetch(url)
    const posterUrl = "https://image.tmdb.org/t/p/w500";

    return (
        <div className="movies-container d-flex justify-content-start m3 pb-5">
            { error && <div>{error}</div> }
            { loading && <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div> }
            { data && data.results.map((movie) => {
                return (
                    <div className="card home-card m-2 bg-transparent border-transparent" style={{ width: "25%", minWidth: "200px" }}>
                        <Link to={`/movies/${movie.id}`}>
                            {movie.poster_path 
                            ? <img
                                className="card-img-top"
                                src={`${posterUrl}${movie.poster_path}`} 
                                alt="mov"
                            /> 
                            : <img 
                                className="card-img-top" 
                                src="https://cinemaone.net/images/movie_placeholder.png" 
                                alt=""
                            />}
                        </Link>
                        <div className="card-body">
                            <p>{movie.title}</p>
                        </div>
                    </div>
                    )
                })}
        </div>
    )
}
