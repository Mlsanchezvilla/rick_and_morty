import axios from "axios";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FILTER_CARDS = "FILTER_CARDS";
export const ORDER_CARDS = "ORDER_CARDS";



export const addFav =  (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, character);
      dispatch({
        type: ADD_FAVORITE,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    
    }
  };
};
export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return (dispatch) => {
    try {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAVORITE,
        payload: data,
      });
    });
    } catch (error) {
     console.log(error);
    };
  };
};


export const filterCards = (gender) => {
  return {
    type: FILTER_CARDS,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER_CARDS,
    payload: order,
  };
};
