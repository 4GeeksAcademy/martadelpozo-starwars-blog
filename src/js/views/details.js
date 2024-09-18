import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/home.css";
import { Character } from "../component/character.js";
import { Planet } from "../component/planet.js";
import { Vehicle } from "../component/vehicle.js";

export const Details = () => {
    const { type } = useParams();

    const renderComponent = () => {
        switch (type) {
            case "planets":
                return <Planet />;
            case "vehicles":
                return <Vehicle />;
            default:
                return <Character />;
        }
    };

    return <div className="mt-5">{renderComponent()}</div>;
};
