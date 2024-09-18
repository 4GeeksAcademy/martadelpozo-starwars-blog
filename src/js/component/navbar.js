import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import starwarsLogo from "../../img/star-wars-logo-black.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const favoritesMap = store.favorites;

	const handleDeleteFavorite = (item) => {
		actions.deleteFavorite(item);
	};

	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/" className="navbar-brand mb-0 h1">
				<img className="p-1 ms-5" style={{ height: "55px" }} src={starwarsLogo} alt="Star Wars Logo" />
			</Link>
			<div className="me-5">
				<div className="dropdown me-5">
					<button className="btn favorite-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						My Favorites
						<span className="btn favorite-number">{favoritesMap.length > 0 ? favoritesMap.length : "0"}</span>
					</button>
					<ul className="dropdown-menu">
						{favoritesMap.length > 0 ? (
							favoritesMap.map((item, index) => (
								<li key={index} className="dropdown-item d-flex justify-content-between">
									{item}
									<span onClick={() => handleDeleteFavorite(item)}>
										<i className="fas fa-trash"></i>
									</span>
								</li>
							))
						) : (
							<li className="dropdown-item text-center">Add some Favorites</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
