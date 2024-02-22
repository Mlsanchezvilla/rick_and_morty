import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

const Detail = () => {
    let { detailId } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${detailId}`).then(
        ({ data }) => {
            if (data.name) {
            setCharacter(data);
            } else {
            window.alert("No hay personajes con ese ID");
            }
        }
        );
        return setCharacter({});
    }, [detailId]);

    return (
        <div className={styles.containerPrincipal} >
            <div className={styles.containerInformation}>
                <h1>{character.name}</h1>
                <h2>{character.status}</h2>
                <h2>{character.species}</h2>
                <h2>{character.gender}</h2>
                <h2>{character.origin?.name}</h2>
            </div>
            <div className={styles.containerImage}>
                <img className={styles.image} src={character.image} alt=""/>
            </div>

        </div>
);
};

            


export default Detail;
