const initialState = {
  misFavoritos: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        misFavoritos: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case "REMOVE_FAV":
      return {
        ...state,
        misFavoritos: state.misFavoritos.filter(
          (char) => char.id !== action.payload
        ),
      };
    //se hace sobre los personajes que estan en favoritos
    case "FILTER":
      const allCharactersFiltered = state.allCharacters.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        misFavoritos: allCharactersFiltered,
      };
    case "ORDER":
      const allCharactersCopy = [...state.allCharacters];
      return {
        ...state,
        misFavoritos: action.payload === 'A'
        ? allCharactersCopy.sort((a, b)=> a.id - b.id)
        : allCharactersCopy.sort((a, b)=> b.id - a.id),
       };
    default:
      return { ...state };
  }
};

export default reducer;
