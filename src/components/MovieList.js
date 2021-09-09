import React from 'react'
import useFetch from './hooks/useFetch'
import MovieCard from './MovieCard';

export default function MovieList({ url }) {
    const { data, loading, error } = useFetch(url)

    return (
        <div className="movies-container d-flex justify-content-start m3 pt-2 pb-4">
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
