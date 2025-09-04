import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div className="container py-5">
			<h1 className="mb-3">🌌 Star Wars Blog</h1>
			<p className="text-muted">
				Explora personajes, planetas y vehículos de la galaxia.  
				Guarda tus favoritos para leerlos más tarde ⭐
			</p>
			<div className="d-flex gap-2">
				<Link to="/people" className="btn btn-primary">People</Link>
				<Link to="/planets" className="btn btn-primary">Planets</Link>
				<Link to="/vehicles" className="btn btn-primary">Vehicles</Link>
			</div>
		</div>
	);
};
