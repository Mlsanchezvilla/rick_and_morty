import React from "react";
import "./About.module.css"
import styles from "./About.module.css";

const About = () => {
    return (
        <div>

            <h1 className={styles.h1} > PROYECTO RICK AND MORTY</h1>
            <p className={styles.p} > Me llamo Mónica Sánchez y hoy estoy emocionada
                de presentarles mi nuevo proyecto virtual
                inspirado en la increíble serie "Rick y Morty" </p>

            <h3 className={styles.h3}> Te imaginas interactuar con tus personajes favoritos de la serie?</h3>
            <p className={styles.p}> En nuestro proyecto, tendrás la oportunidad de encontrarte con personajes
                icónicos como Rick, Morty, Summer, Bird Person y muchos más. El
                proyecto virtual de Rick y Morty es una experiencia emocionante que combina
                exploración, interacción y diversión en el universo multicolor de esta increíble
                serie animada </p>
            <img className={styles.img} src="https://hips.hearstapps.com/hmg-prod/images/rick-y-morty-2-4-1626109423.jpg?crop=0.9968253968253968xw:1xh;center,top&resize=1200:*" alt="Rick and Morty" />
        </div>


    )
}

export default About;