const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			loadPeople: async () => {
				try {
					const resp = await fetch("https://www.swapi.tech/api/people?page=1&limit=10");
					const data = await resp.json();
					setStore({ people: data.results });
				} catch (err) {
					console.error("Error cargando people:", err);
				}
			},
			loadPlanets: async () => {
				try {
					const resp = await fetch("https://www.swapi.tech/api/planets?page=1&limit=10");
					const data = await resp.json();
					setStore({ planets: data.results });
				} catch (err) {
					console.error("Error cargando planets:", err);
				}
			},
			loadVehicles: async () => {
				try {
					const resp = await fetch("https://www.swapi.tech/api/vehicles?page=1&limit=10");
					const data = await resp.json();
					setStore({ vehicles: data.results });
				} catch (err) {
					console.error("Error cargando vehicles:", err);
				}
			},

			getDetail: async (type, uid) => {
				try {
					const resp = await fetch(`https://www.swapi.tech/api/${type}/${uid}`);
					const data = await resp.json();
					return data.result; 
				} catch (err) {
					console.error("Error cargando detalle:", err);
				}
			},


			addFavorite: (item) => {
				const store = getStore();

				if (store.favorites.some(f => f.uid === item.uid && f.type === item.type)) return;
				setStore({ favorites: [...store.favorites, item] });
			},
			removeFavorite: (type, uid) => {
				const store = getStore();
				const updated = store.favorites.filter(f => !(f.type === type && f.uid === uid));
				setStore({ favorites: updated });
			}
		}
	};
};

export default getState;
