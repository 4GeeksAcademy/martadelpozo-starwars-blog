import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/demo.css";

export const Vehicle = () => {
    const { store, actions } = useContext(Context);
    const { id, type } = useParams();

    useEffect(() => {
        actions.getVehicle(id);
    }, [id, actions]);

    const vehicle = store.vehicle?.properties || {};
    const imageUrl = id === "1" ? "https://starwars-visualguide.com/assets/img/placeholder.jpg" : `https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`;

    return (
        <div className="container pt-5">
            <div className="d-flex justify-content-center mx-auto w-75">
                <div className="bg bg-secondary d-flex justify-content-evenly" style={{ width: "600px", height: "400px" }}>
                    <img src={imageUrl} alt={vehicle.name} />
                </div>
                <div className="p-5">
                    <h1 className="text-center">{vehicle.name}</h1>
                    <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nibh aliquam, mattis ligula eget, lobortis enim. Integer et nisi pharetra, fringilla libero sit amet, porttitor odio. Sed posuere tellus non viverra congue. Cras tempus tortor eu mi porta, quis facilisis nunc mollis. Cras diam enim, cursus in bibendum vel, blandit non sem. Cras a molestie enim. Sed finibus tempor nisl at tempus. Cras ultrices magna sed enim vestibulum suscipit.
                    </p>
                </div>
            </div>
            <hr style={{ border: "1px solid black" }} />
            <div className="container text-center w-75 p-4 py-5">
                <div className="row">
                    {["Name", "Model", "Cargo Capacity", "Consumables", "Passengers", "Crew"].map((header, index) => (
                        <div key={index} className="col-2 fw-bold">{header}</div>
                    ))}
                </div>
                <div className="row">
                    {Object.values({
                        name: vehicle.name,
                        model: vehicle.model,
                        cargo_capacity: vehicle.cargo_capacity,
                        consumables: vehicle.consumables,
                        passengers: vehicle.passengers,
                        crew: vehicle.crew,
                    }).map((value, index) => (
                        <div key={index} className="col-2">{value}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

Vehicle.propTypes = {
    name: PropTypes.string,
    model: PropTypes.string,
    cargo_capacity: PropTypes.string,
    consumables: PropTypes.string,
    passengers: PropTypes.string,
    crew: PropTypes.string,
    id: PropTypes.string,
    route: PropTypes.string,
};
