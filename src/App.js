import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import MovieDetails from "./components/MovieDetails";
import MovieSearch from "./components/MovieSearch";
import WatchList from "./components/WatchList";
import CompletedList from "./components/CompletedList";
import "./lib/font-awesome/css/all.min.css";
import GlobalProvider from "./context/GlobalState";

function App() {
	return (
		<GlobalProvider>
			<Navigation />
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route path="/movies/:id" component={MovieDetails} />
				<Route path="/search" component={MovieSearch} />
				<Route path="/watchlist" component={WatchList} />
				<Route path="/completedlist" component={CompletedList} />
			</Switch>
		</GlobalProvider>
	);
}

export default App;
