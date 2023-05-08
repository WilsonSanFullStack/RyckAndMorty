import "./App.css";
import React, { useState } from "react";
import Cards from "./components/Cards.jsx";
import NavSearch from "./components/navsearch";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form";

function App() {
  const [characters, setCharacters] = useState([]);
  //al estado le puedo poner el nombre que quiera
  //set(nombre del estado) es la funcion encargada de modificar el estado
  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }
  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };

  return (
    <div className="App">
      <NavSearch onSearch={onSearch} />

      <Routes>
        <Route path="/" element={<Form/>} />
        <Route
          path="/Home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/About" element={<About />} />
        <Route path="/Detail/:id" element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;
