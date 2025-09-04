import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { ListPage } from "./pages/ListPage";
import { DetailPage } from "./pages/DetailPage";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />

			<Route path="/people" element={<ListPage type="people" title="People" />} />
			<Route path="/planets" element={<ListPage type="planets" title="Planets" />} />
			<Route path="/vehicles" element={<ListPage type="vehicles" title="Vehicles" />} />

			<Route path="/:type/:id" element={<DetailPage />} />

			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
};
