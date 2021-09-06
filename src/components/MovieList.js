import React from 'react'
import useFetch from './hooks/useFetch'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalState';

export default function MovieList({ url }) {
    const { addToWatchList, addToCompletedList } = useGlobalContext();
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
                    <div key={movie.id} className="card home-card m-2 bg-transparent border-transparent" style={{ width: "25%", minWidth: "200px" }}>
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
                        <div className="card-body">
                            <p>{movie.title}</p>
                        </div>
                    </div>
                    )
                })}
        </div>
    )
}
