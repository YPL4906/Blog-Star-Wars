import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<div className="container">
				<Link to="/" className="navbar-brand">Star Wars Blog</Link>

				<div className="dropdown">
					<button className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown">
						Read later ({store.favorites.length})
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.favorites.length === 0 && <li className="px-3 py-2 text-muted">Vacío</li>}
						{store.favorites.map(f => (
							<li key={`${f.type}-${f.uid}`} className="d-flex justify-content-between align-items-center px-3 py-2">
								<Link to={`/${f.type}/${f.uid}`}>{f.name}</Link>
								<button
									className="btn btn-sm btn-outline-danger"
									onClick={() => actions.removeFavorite(f.type, f.uid)}>
									&times;
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
