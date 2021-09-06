import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import MovieDetails from './components/MovieDetails'
import SearchForm from './components/SearchForm';
import WatchList from './components/WatchList';
import CompletedList from './components/CompletedList';
import './lib/font-awesome/css/all.min.css'
import GlobalProvider from './context/GlobalState';

function App() {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = (newItem) => {
    setMovies([newItem,...movies])
    console.log(movies)
  }

  return (
    <GlobalProvider>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Dashboard movies={movies} setMovies={setMovies} handleAddMovie/>
        </Route>
        <Route path="/movies/:id" component={MovieDetails}/>
        <Route path="/search">
          <SearchForm handleAddMovie={handleAddMovie}/>
        </Route>
        <Route path="/watchlist">
          <WatchList movies={movies}/>
        </Route>
        <Route path="/completedlist" component={CompletedList}/>
      </Switch>
    </GlobalProvider>
  );
}

export default App;
