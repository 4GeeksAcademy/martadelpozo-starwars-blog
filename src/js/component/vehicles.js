import React, {useContext } from "react";
import { Card } from "./card";
import { Context } from "../store/appContext";
import "../../styles/home.css";



export const Vehicles = () => {

    const { store } = useContext(Context);

    const vehiclesMap = store.vehicles;

    return (
        <div className="m-5 card-container">
            <h2 className=" mb-4 d-flex justify-content-start">
                Vehicles
            </h2>
            <div className="d-flex overflow-x-auto">{vehiclesMap.map(item => (
                <Card
                    type={"vehicles"}
                    id={item.uid}
                    key={item.uid}
                    name={item.name}
                    route={`/vehicles/${item.uid}`}
                />
            ))}
            </div>
        </div>


    );
};