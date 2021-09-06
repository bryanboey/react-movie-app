import React from 'react'
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
  return (
    <GlobalProvider>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/movies/:id" component={MovieDetails}/>
        <Route path="/search" component={SearchForm}/>
        <Route path="/watchlist" component={WatchList}/>
        <Route path="/completedlist" component={CompletedList}/>
      </Switch>
    </GlobalProvider>
  );
}

export default App;
