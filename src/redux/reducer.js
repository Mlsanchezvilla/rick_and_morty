import {
  ADD_FAVORITE,
  FILTER_CARDS,
  ORDER_CARDS,
  REMOVE_FAVORITE,
} from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  charactersOrder: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        allCharacters: [...state.allCharacters, payload],
        myFavorites: [...state.myFavorites, payload],
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((char) => char.id !== payload),
      };

    case FILTER_CARDS:
      if (payload.toUpperCase() === "ALL") {
        return {
          ...state,
          myFavorites: state.allCharacters
        };
      }
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (char) => char.gender.toUpperCase() === payload.toUpperCase()
        ),
      };

    case ORDER_CARDS:
      if (payload.toUpperCase() === "A") {
        return {
          ...state,
          myFavorites: state.allCharacters.sort((a, b) =>
            a.name > b.name ? 1 : -1
          ),
        };
      } else {
        return {
          ...state,
          myFavorites: state.allCharacters.sort((a, b) =>
            a.name < b.name ? 1 : -1
          ),
        };
      }

    default:
      return state;
  }
};

let a = [
  {
    saludo: "andres",
  },
  {
    saludo: "andrez",
  },
];

a.sort((a, b) => a.saludo - b.saludo);

export default reducer;
