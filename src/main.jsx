import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Navbar } from "./components/Navbar";
import injectContext from "./appContext";

const App = () => (
	<>
		<Navbar />
		<AppRoutes />
	</>
);

const AppWithStore = injectContext(App);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<AppWithStore />
		</BrowserRouter>
	</React.StrictMode>
);
