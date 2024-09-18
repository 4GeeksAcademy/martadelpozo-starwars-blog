import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/demo.css";

export const Character = () => {
    const { store, actions } = useContext(Context);
    const { id, type } = useParams();

    useEffect(() => {
        actions.getCharacter(id);
    }, [id, actions]);

    const character = store.character?.properties || {};
    const imageUrl = id === "1" ? "https://starwars-visualguide.com/assets/img/placeholder.jpg" : `https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`;

    return (
        <div className="container pt-5">
            <div className="d-flex justify-content-center mx-auto w-75">
                <div className="bg bg-secondary d-flex justify-content-evenly" style={{ width: "600px", height: "400px" }}>
                    <img src={imageUrl} alt={character.name} />
                </div>
                <div className="p-5">
                    <h1 className="text-center">{character.name}</h1>
                    <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nibh aliquam, mattis ligula eget, lobortis enim. Integer et nisi pharetra, fringilla libero sit amet, porttitor odio. Sed posuere tellus non viverra congue. Cras tempus tortor eu mi porta, quis facilisis nunc mollis. Cras diam enim, cursus in bibendum vel, blandit non sem. Cras a molestie enim. Sed finibus tempor nisl at tempus. Cras ultrices magna sed enim vestibulum suscipit.
                    </p>
                </div>
            </div>
            <hr style={{ border: "1px solid black" }} />
            <div className="container text-center w-75 p-4 py-5">
                <div className="row">
                    {["Name", "Birth Year", "Gender", "Height", "Skin Color", "Eye Color"].map((header, index) => (
                        <div key={index} className="col-2 fw-bold">{header}</div>
                    ))}
                </div>
                <div className="row">
                    {Object.values({
                        name: character.name,
                        birth_year: character.birth_year,
                        gender: character.gender,
                        height: character.height,
                        skin_color: character.skin_color,
                        eye_color: character.eye_color,
                    }).map((value, index) => (
                        <div key={index} className="col-2">{value}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

Character.propTypes = {
    name: PropTypes.string,
    gender: PropTypes.string,
    hair_color: PropTypes.string,
    eye_color: PropTypes.string,
    height: PropTypes.string,
    skin_color: PropTypes.string,
    id: PropTypes.string,
    route: PropTypes.string,
};
