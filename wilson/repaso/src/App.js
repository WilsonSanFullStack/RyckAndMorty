import './App.css';
import Character from './componentes/Characters';
import {Routes, Route} from 'react-router-dom';
import LandingPage from './componentes/LandingPages';
import CardClass from './componentes/CardClass';
import CharacterDetail from './componentes/CharacterDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/Home' element={<Character/>}/>
        <Route path='/card' element={<CardClass/>}/>
        <Route path='/detail/:id' element={<CharacterDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
