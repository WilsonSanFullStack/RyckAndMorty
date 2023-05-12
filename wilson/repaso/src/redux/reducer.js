import { GET_CHARACTERS, CHARACTER_DETAIL } from "./action-type";


const initialState = {
  characters: [],
  characterDetail: {},
};

const reducer = (state = initialState, action) => {// creacion del estado global 
switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,//copia del estado
        characters: action.payload
      }
    case CHARACTER_DETAIL:
      return {
        ...state, 
        characterDetail: action.payload
      }

  default:
    return {...state}
}
};

export default reducer;