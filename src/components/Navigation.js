import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap"

export default function Navigation() {
	return (
		<Navbar bg="dark" expand="md" variant="dark">
			<Container>
				<Navbar.Brand>
					<Link to="/">
						<img
							id="nav-image"
							src="https://raw.githubusercontent.com/bryanboey/react-movie-app/master/src/lib/images/movie-popcorn.png"
							alt=""
						/>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
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
				</Nav>
				</Navbar.Collapse>
			</Container>
			</Navbar>
	);
}


//  <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
// 			<div className="container">
// 				<button
// 					className="navbar-toggler"
// 					type="button"
// 					data-toggle="collapse"
// 					data-target="#navbar-pcdb"
// 					aria-controls="#navbar-pcdb"
// 					aria-expanded="false"
// 					aria-label="Toggle navigation"
// 				>
// 					<span className="navbar-toggler-icon"></span>
// 				</button>
// 				<div className="collapse navbar-collapse" id="navbar-pcdb">
// 					<Link to="/" className="navbar-brand brand-logo">
// 						<div>
// 							<img
// 								id="nav-image"
// 								src="https://raw.githubusercontent.com/bryanboey/react-movie-app/master/src/lib/images/movie-popcorn.png"
// 								alt=""
// 							/>
// 							PopcornDB
// 						</div>
// 					</Link>
// 					<ul className="navbar-nav mr-auto">
// 						<li className="nav-item">
// 							<NavLink className="nav-link" to="/search">
// 								Search Movies
// 							</NavLink>
// 						</li>
// 						<li className="nav-item">
// 							<NavLink className="nav-link" to="/watchlist">
// 								Watchlist
// 							</NavLink>
// 						</li>
// 						<li className="nav-item">
// 							<NavLink className="nav-link" to="/completedlist">
// 								Movies You've Watched
// 							</NavLink>
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 		</nav> 