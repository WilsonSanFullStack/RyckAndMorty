import { ADD_FAV, REMOVE_FAV } from "./action-type";


export const agregarFavorito = (character) => {
  return {type: ADD_FAV, payload: character};
};

export const eliminarFavorito = (id) => {
  return {type: REMOVE_FAV, payload: id};
};