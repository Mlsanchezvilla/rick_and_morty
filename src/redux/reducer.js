import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actions";

const initialState = {
    myFavorites:[]
}

const reducer = (state= initialState, action)=>{
    const {type,payload} = action;
    switch (type) {
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites: [...state.myFavorites,payload]
            }


        case REMOVE_FAVORITE:
            return {
                ...state,
                myFavorites:state.myFavorites.filter((char)=>char.id!==payload)
            }

            default:
                return {
                    ...state
                }
                
    }
}

export default reducer;