import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
			<div className="container">
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<Link to="/" className="navbar-brand brand-logo">
						PopcornDB
					</Link>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<NavLink className="nav-link" to="/search">
								Search Movies
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/watchlist">
								Watchlist
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/completedlist">
								Movies You've Watched
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
