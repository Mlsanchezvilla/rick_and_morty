export const ADD_FAVORITE="ADD_FAVORITE";
export const REMOVE_FAVORITE="REMOVE_FAVORITE";

export const addFav= (id)=>{
    return {
        type:ADD_FAVORITE,
        payload: id,

    }
}

export const removeFav=(id)=>{
    return {
        type:REMOVE_FAVORITE,
        payload: id,
    }
}