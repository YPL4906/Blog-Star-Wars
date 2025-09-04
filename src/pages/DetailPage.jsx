import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const DetailPage = () => {
	const { type, id } = useParams();
	const { dispatch } = useGlobalReducer();
	const [data, setData] = useState(null);

	useEffect(() => {
		dispatch.getDetail(type, id).then(setData);
	}, [type, id]);

	if (!data) return <div className="container py-4">Cargando...</div>;

	const { properties = {}, description, uid } = data;

	const imageUrl = (type, id) => {
		const map = { people: "characters", planets: "planets", vehicles: "vehicles" };
		const folder = map[type] || type;
		return `https://starwars-visualguide.com/assets/img/${folder}/${id}.jpg`;
	};

	return (
		<div className="container py-4">
			<Link to={`/${type}`} className="btn btn-link">← Volver</Link>
			<div className="row mt-2 g-4">
				<div className="col-12 col-md-5">
					<img src={imageUrl(type, uid)} className="img-fluid rounded shadow" alt={properties.name} />
				</div>
				<div className="col-12 col-md-7">
					<div className="card">
						<div className="card-body">
							<h3>{properties.name}</h3>
							{description && <p>{description}</p>}
							<hr />
							<div className="row">
								{Object.entries(properties).map(([k, v]) => (
									<div className="col-12 col-md-6 mb-2" key={k}>
										<strong>{k}</strong>: {String(v)}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};