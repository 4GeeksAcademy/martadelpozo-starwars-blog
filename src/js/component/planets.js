import React, { useContext } from "react";
import { Card } from "./card";
import { Context } from "../store/appContext";
import "../../styles/home.css";


export const Planets = () => {
    const { store } = useContext(Context);

    const planetsMap = store.planets;


    return (
        <div className="m-5 card-container ">
            <h2 className=" mb-4 d-flex justify-content-start">
                Planets
            </h2>
            <div className="d-flex overflow-x-auto">{planetsMap.map(item => (
                <Card
                    type={"planets"}
                    id={item.uid}
                    key={item.uid}
                    name={item.name}
                    route={`/planets/${item.uid}`}
                />
            ))}
            </div>
        </div>


    );
};