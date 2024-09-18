import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Characters } from "../component/characters";
import { Planets } from "../component/planets";
import { Vehicles } from "../component/vehicles"



export const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharacters(),
		actions.getPlanets(),
		actions.getVehicles()

	}, []);

	return (
		<div className="text-center mt-5">
			<Characters />
			<Planets />
			<Vehicles />
		</div>
	);

	};
