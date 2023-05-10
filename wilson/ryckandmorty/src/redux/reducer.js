import { ADD_FAV, REMOVE_FAV } from "./action-type";

const initialState = {
  misFavoritos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        misFavoritos: [...state.misFavoritos, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        misFavoritos: state.misFavoritos.filter(
          (char) => char.id !== action.payload
        )
      };

    default:
      return { ...state };
  }
};

export default reducer;
