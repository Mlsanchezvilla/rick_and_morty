import { useSelector, connect, useDispatch } from "react-redux";
import Card from '../Card';
import { useState, useEffect } from "react";
import { filterCards, orderCards } from "../../redux/actions";

const Favorites = (props) => {

    const [aux, setAux] = useState(false)
    const { orderCards, filterCards } = props;

    const favorites = useSelector(state => state.myFavorites);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(orderCards("a"));
    }, []);
    
    const handleOrder = (e) => {

        setAux(!aux)
        dispatch(orderCards(e.target.value));
    }


    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value));
    }
    return (
        <>
            <select onChange={handleOrder}>
                <option value="a">Ascendente</option>
                <option value="d">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="Unknown">Unknown</option>
            </select>


            <div style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
            }}>
                {favorites?.map(fav => (
                    <Card
                        name={fav.name}
                        id={fav.id}
                        key={fav.id}
                        gender={fav.gender}
                        status={fav.status}
                        origin={fav.origin}
                        image={fav.image}
                    />
                   
                ))}
            </div>
            
        </>
    )
}


         
const mapStateToProps = (state) => {
    return {
        favorites: state.myFavorites,
    };

};

export default connect(mapStateToProps, { filterCards, orderCards })(Favorites);





