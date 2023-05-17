export const agregarFavorito = (character) => {
  return {
    type: "ADD_FAV",
    payload: character,
  };
};

export const eliminarFavorito = (id) => {
  return {
    type: "REMOVE_FAV",
    payload: id,
  };
};

export const filterCards = (gender) => {
  return {
    type: "FILTER",
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: "ORDER",
    payload: order,
  };
};
