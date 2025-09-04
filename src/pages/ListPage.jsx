import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { ItemCard } from "../components/Card";

export const ListPage = ({ type, title }) => {
	const { store, dispatch } = useGlobalReducer();

	useEffect(() => {
		if (type === "people") dispatch.loadPeople();
		if (type === "planets") dispatch.loadPlanets();
		if (type === "vehicles") dispatch.loadVehicles();
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