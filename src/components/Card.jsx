import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../appContext";

export const ItemCard = ({ type, item }) => {
	const { actions } = useContext(Context);

	const uid = item.uid;
	const name = item.name;

	const imageUrl = (type, id) => {
		const map = { people: "characters", planets: "planets", vehicles: "vehicles" };
		const folder = map[type] || type;
		return `https://starwars-visualguide.com/assets/img/${folder}/${id}.jpg`;
	};

	return (
		<div className="card h-100">
			<img src={imageUrl(type, uid)} className="card-img-top" alt={name} />
			<div className="card-body d-flex flex-column">
				<h5 className="card-title">{name}</h5>
				<div className="mt-auto d-flex gap-2">
					<Link to={`/${type}/${uid}`} className="btn btn-primary">Ver más</Link>
					<button
						className="btn btn-outline-warning"
						onClick={() => actions.addFavorite({ type, uid, name })}>
						⭐ Guardar
					</button>
				</div>
			</div>
		</div>
	);
};
