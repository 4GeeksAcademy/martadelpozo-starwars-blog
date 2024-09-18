import React, {useContext} from "react";
import { Card } from "./card";
import { Context } from "../store/appContext"
import "../../styles/home.css";


export const Characters = () => {

    const { store } = useContext(Context);

    const charactersMap = store.characters;


    return (
        <div className="m-5 card-container">
            <h2 className=" mb-4 d-flex justify-content-start mt-5 pt-4">
                Characters
            </h2>
            <div className="d-flex ">
                {charactersMap.map(item => (
                    <Card
                        type={"characters"}
                        id={item.uid}
                        key={item.uid}
                        name={item.name}
                        route={`/characters/${item.uid}`}
                    />
                ))}
            </div>


        </div>
    );
};


