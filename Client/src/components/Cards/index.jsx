import Card from '../Card';
import styles from './cards.module.css'



export default function Cards({characters, onClose}) {
   console.log("Cards")
   return (
      <div className={styles.container}>
         {characters.map((character)=>(
           <Card 
               key = {character.id}
               id = {character.id} 
               name = {character.name}
               status = {character.status}
               species = {character.species}
               gender = {character.gender}
               origin = {character.origin.name}
               image = {character.image}
               onClose = {onClose}
            />
         ))} 
      </div>
   )  
}
