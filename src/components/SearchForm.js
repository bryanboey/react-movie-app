import React, { useState } from 'react'
import useFetch from './hooks/useFetch'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalState';

export default function SearchForm(props) {
    const [query, setQuery] = useState("");
    const { addToWatchList } = useGlobalContext();

    const handleChange = (e) => {
        setQuery(e.target.value)
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setQuery("")
    }

    const apiKey = "12539c194bffc611e17fac19ada9b424";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
    const posterUrl = "https://image.tmdb.org/t/p/w500"

    const { data, loading } = useFetch(url)
    
    return (
        <div className="container align-items-center justify-content-center">
            <div className="form-group row m-4">
                <form className="" onSubmit={handleSubmit}>
                    <input className="form-control w-75 mx-auto" 
                    onChange={handleChange} 
                    value={query} 
                    type="search" 
                    id="query" 
                    placeholder="Search for movies" 
                    />
                </form>
            </div>
            <div className="row">
                <div className="movies-container d-flex flex-wrap justify-content-center m3">
                    { loading && <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div> }
                    { data && data.results.map((movie) => {
                        return (
                            <div key={movie.id} className="card result-card m-2 my-2 bg-dark" style={{ width: "18%", minWidth: "150px" }}>
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
                                <button className="btn btn-sm overlay-btn btn-dark" onClick={() => addToWatchList(movie)}>
                                    <i className="fas fa-plus"></i>
                                </button>
                                <div className="card-body">
                                    <p className="">{movie.title}</p>
                                </div>
                            </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}