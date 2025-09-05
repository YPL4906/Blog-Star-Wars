import React, { useEffect, useContext } from "react";
import { Context } from "../appContext";
import { ItemCard } from "../components/Card";

export const ListPage = ({ type, title }) => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		if (type === "people") actions.loadPeople();
		if (type === "planets") actions.loadPlanets();
		if (type === "vehicles") actions.loadVehicles();
	}, [type]);

	const items = store[type] || [];

	return (
		<div className="container py-4">
			<h2>{title}</h2>
			<div className="row g-3">
				{items.map(it => (
					<div className="col-12 col-sm-6 col-md-4 col-lg-3" key={it.uid}>
						<ItemCard type={type} item={it} />
					</div>
				))}
			</div>
		</div>
	);
};
