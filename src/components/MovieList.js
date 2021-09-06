import React from 'react'
import useFetch from './hooks/useFetch'
// import { Link } from 'react-router-dom'
// import { useGlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';

export default function MovieList({ url }) {
    // const { addToWatchList, addToCompletedList } = useGlobalContext();
    const { data, loading, error } = useFetch(url)
    // const posterUrl = "https://image.tmdb.org/t/p/w500";

    return (
        <div className="movies-container d-flex justify-content-start m3 pb-5">
            { error && <div>{error}</div> }
            { loading && <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div> }
            { data && data.results.map((movie) => {
                return (
                    <div key={movie.id} className="card home-card m-2 bg-transparent border-transparent" style={{ width: "25%", minWidth: "200px" }}>
                        <MovieCard movie={movie}/>
                    </div>
                    )
                })}
        </div>
    )
}
