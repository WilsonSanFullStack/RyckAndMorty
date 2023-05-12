import axios from 'axios'
import { GET_CHARACTERS, CHARACTER_DETAIL } from './action-type'

export const getCharacters = () => { //getCharacters es la accion
  return async function (dispatch){ //dispatch es la envia la action 

    try {
      let response = await axios.get('https://rickandmortyapi.com/api/character/');
      return dispatch({type: GET_CHARACTERS, payload: response.data.results});
    } catch (error) {
      console.log(error)
    }
  };
};

export const getCharacterDetail = (id) => {
  return function(dispatch) {
    try {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => dispatch({type: CHARACTER_DETAIL, payload: data}))      
    } catch (error) {
      console.log(error);
    }
  }
};