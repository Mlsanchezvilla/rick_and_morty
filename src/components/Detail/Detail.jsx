import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

const Detail = () => {
    let { detailId } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${detailId}`).then(
        ({ data }) => {
            console.log(data)
            if (data.name) {
            setCharacter(data);
            } else {
            window.alert("No hay personajes con ese ID");
            }
        }
        );
        return setCharacter({});
    }, [detailId]);

//     return (
//         <div className={styles.containerPrincipal} >
//             <div className={styles.containerInformation}></div>
//             <div className={styles.containerImage}>
//                 <img src={character.image} alt=""/>
//             </div>
//         </div>
//     );
 };

export default Detail;
