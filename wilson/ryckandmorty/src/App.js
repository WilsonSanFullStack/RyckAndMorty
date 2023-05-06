import "./App.css";
import React, { useState } from "react";
import Cards from "./components/Cards.jsx";
import NavSearch from "./components/navsearch";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  //al estado le puedo poner el nombre que quiera
  //set(nombre del estado) es la funcion encargada de modificar el estado
  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    });
 };
 const onClose = (id) => {
  setCharacters(
    characters.filter((char) => {
      return char.id !== Number(id)
    })
  )
 };

  return (
    <div className="App">
      <NavSearch onSearch = {onSearch}/>
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
