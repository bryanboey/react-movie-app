import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import MovieDetails from './components/MovieDetails'
import SearchForm from './components/SearchForm';
import WatchList from './components/WatchList';
import CompletedList from './components/CompletedList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/search" component={SearchForm} />
        <Route path="/watchlist" component={WatchList} />
        <Route path="/completedlist" component={CompletedList} />
      </Switch>
    </div>
  );
}

export default App;
