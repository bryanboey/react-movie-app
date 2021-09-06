import React from 'react'
import MovieList from './MovieList'

export default function Dashboard() {
	const apiKey = "12539c194bffc611e17fac19ada9b424";
	const trendingUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
	const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`

    return (
        <div className='container-fluid movie-app px-5'>
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <h5>Trending</h5>
			</div>
			<div className='row'>
				<MovieList url={trendingUrl} />
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
                <h5>Popular Now</h5>
			</div>
			<div className='row'>
				<MovieList url={popularUrl} />
			</div>
			<div className="row">
				
			</div>
		</div>
    )
}