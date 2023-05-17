import "./App.css";
import { useState, useEffect} from "react";
import Cards from "./components/Cards.jsx";
import NavSearch from "./components/navsearch";
import axios from "axios";
import { Route, Routes,  useLocation, useNavigate} from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form";
import { Favoritos } from "./components/Favoritos";

const EMAIL = 'ejemplo@gmail.com';
const PASSWORD = 'unaPassword1';
//-----------------------------------------------------------------------
function App() {
  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation();

  const navigate = useNavigate();
const [access, setAccess] = useState(false);

//------------------------------------------------------------------------
function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}
//--------------------------------------------------------------------
useEffect(() => {
  !access && navigate('/');
}, [access]);
  
  //al estado le puedo poner el nombre que quiera
  //set(nombre del estado) es la funcion encargada de modificar el estado
  //-------------------------------------------------------------------------------------------
  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }
  //------------------------------------------------------------------------
  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };
//-------------------------------------------------------------------------
  return (
    <div className="App">
      {pathname !== '/' && <NavSearch onSearch={onSearch} />}

      <Routes>
        <Route path="/" element={<Form login={login}/>} />
        <Route
          path="/Home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/About" element={<About />} />
        <Route path="/Detail/:id" element={<Detail onClose={onClose}/>} />
        <Route path="/favoritos" element={<Favoritos/>}/>
      </Routes>
    </div>
  );
}

export default App;
