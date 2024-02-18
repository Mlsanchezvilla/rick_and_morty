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
        <>   <div>
            <select className="handleOrder" onChange={handleOrder}>
                <option value="a">Ascendente</option>
                <option value="d">Descendente</option>
            </select>
            <select  className="handleFilter" onChange={handleFilter}>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="Unknown">Unknown</option>
            </select>
            </div>

            <div style={{
                width: "200%",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gridTemplateRows: "repeat(auto, 1fr)",
 
                


            }}>
                {favorites?.map(fav => (
                    <Card className = "card"
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





