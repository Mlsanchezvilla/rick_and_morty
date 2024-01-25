import { useSelector } from "react-redux";
import Card from '../Card';

export default function Favorites() {
    const favorites = useSelector(state => state.myFavorites);
    console.log(favorites)
    return (
        <>
            {favorites?.map(fav => (
                <Card
                    name={fav.name}
                    id={fav.id}
                    key={fav.id}
                    gender={fav.gender}
                    image={fav.image}
                />
            ))}
        </>
    );

}
