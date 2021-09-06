import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalState'

export default function WatchList({ movies }) {
    const { 
        state, 
        removeFromWatchList,
        moveToCompletedList } = useGlobalContext();

    const posterUrl = "https://image.tmdb.org/t/p/w500"
    return (
        <div className="container align-items-center justify-content-center m-auto mt-3">
            { state.watchList.length > 0 ? (
                <div className="row">
                    <div className="movies-container d-flex flex-wrap justify-content-start m3 ">
                        { state.watchList.map((movie) => {
                            return (
                                <div key={movie.id} className="card watchlist-card m-2 my-2 bg-dark" style={{ width: "18%", minWidth: "150px" }}>
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
                                        className="btn btn-sm remove-btn overlay-btn btn-dark" 
                                        onClick={() => removeFromWatchList(movie.id)}
                                    >
                                        <i class="fas fa-minus"></i>
                                    </button>
                                    <button 
                                        className="btn btn-sm check-btn overlay-btn btn-dark" 
                                        onClick={() => moveToCompletedList(movie)}
                                    >
                                        <i class="fas fa-check"></i>
                                    </button>
                                
                                    <div className="card-body">
                                        <p className="">{movie.title}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
                : <h2>No movies added yet</h2>
            }
        
            
        </div>
    )
}