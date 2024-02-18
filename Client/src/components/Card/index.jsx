import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";



let { containerCard, containerFavorite, containerData, imageStyle, btn, nameStyle } = styles;

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   let dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
   console.log(myFavorites)

   const [isFav, setIsFav] = useState(false);

   // let char = {
   //    name:name,
   //    gender:gender,
   //    species:species,
   //    id:id,
   //    image:image,
   // }


   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav(id));
      } else {
         setIsFav(true);
         dispatch(addFav({ id, name, status, species, gender, origin, image}));
      }
   }


   return (
      <div className={containerCard}>
         <div className={containerFavorite}>
            {
               isFav ? (
                  <button className={btn} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button className={btn} onClick={handleFavorite}>🤍</button>
               )
            }
            <button onClick={() => onClose(id)} className={btn}>X</button>
         </div>
         <div className={containerData}>
            <Link to={`/detail/${id}`}>
               <h2 className={nameStyle}>{name}</h2>
            </Link>
            <h2 className={nameStyle}>{status}</h2>
            <h2 className={nameStyle}>{species}</h2>
            <h2 className={nameStyle}>{gender}</h2>
            <h2 className={nameStyle}>{origin}</h2>
         </div>
         <img src={image} alt="" className={imageStyle} />
      </div>
   )

}