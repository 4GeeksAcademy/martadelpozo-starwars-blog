
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Card = props => {
    const { actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        if (!isFavorite) {
            actions.addFavorites(props.name);
        } else {
            actions.deleteFavorite(props.name);
        }
    };

    const imageUrl = props.id === "1" 
        ? "https://starwars-visualguide.com/assets/img/placeholder.jpg" 
        : `https://starwars-visualguide.com/assets/img/${props.type}/${props.id}.jpg`;

    return (
        <div className="me-3 my-3 rounded">
            <div className="card text-left" style={{ width: "18rem" }}>
                <img className="rounded-top" src={imageUrl} alt={props.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <div className="d-flex justify-content-between">
                        <Link className="btn btn-outline-primary" to={props.route}>Learn more!</Link>
                        <span className="btn favorite-button" onClick={toggleFavorite}>
                            <i id="favorite-heart" className={`fas fa-heart ${isFavorite ? "text-danger" : ""}`}></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};


