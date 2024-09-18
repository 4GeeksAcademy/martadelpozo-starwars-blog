const getState = ({ getStore, setStore }) => {
	const fetchData = async (url, key) => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			setStore({ ...getStore(), [key]: data.results || data.result });
		} catch (error) {
			console.log(error);
		}
	};

	return {
		store: {
			characters: [],
			character: {},
			planets: [],
			planet: {},
			vehicles: [],
			vehicle: {},
			favorites: [],
		},
		actions: {
			// GET Star Wars Characters
			getCharacters: () => {
				fetchData("https://www.swapi.tech/api/people/", "characters");
			},
			// GET Star Wars Character
			getCharacter: (id) => {
				fetchData(`https://www.swapi.tech/api/people/${id}`, "character");
			},
			// GET Star Wars Planets
			getPlanets: () => {
				fetchData("https://www.swapi.tech/api/planets/", "planets");
			},
			// GET Star Wars Planet
			getPlanet: (id) => {
				fetchData(`https://www.swapi.tech/api/planets/${id}`, "planet");
			},
			// GET Star Wars Vehicles
			getVehicles: () => {
				fetchData("https://www.swapi.tech/api/vehicles/", "vehicles");
			},
			// GET Star Wars Vehicle
			getVehicle: (id) => {
				fetchData(`https://www.swapi.tech/api/vehicles/${id}`, "vehicle");
			},
			// ADD Favorites
			addFavorites: (favorite) => {
				const favoritesState = [...getStore().favorites, favorite];
				setStore({ ...getStore(), favorites: favoritesState });
			},
			// DELETE Favorites
			deleteFavorite: (name) => {
				const newFavorites = getStore().favorites.filter((item) => item !== name);
				setStore({ ...getStore(), favorites: newFavorites });
			},
		},
	};
};

export default getState;
