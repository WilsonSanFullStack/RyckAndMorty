import Titulo from "./componentes/Titulo";
import Alumnos from "./componentes/Alumnos";
import Boton from "./componentes/Boton";
import Boton2 from "./componentes/Boton2";

const alumnos =[
{name: 'Rodrigo', age: '22'},
{name: 'Facundo', age: '20'},
{name: 'ariel',  age: '29'},
{name: 'Carlos', age: '24'},
{name: 'Maty', age: '31'},
{name: 'Samuel', age: '18'},
{name: 'Mariel',  age: '29'},
{name: 'Charlos', age: '24'}
]

function App() {
  return (
    <div>
      <h3>Alumnos</h3>
      <Alumnos alumnos = {alumnos}/>
      <Boton text='soy un boton'/>
      <Boton2 text='soy el puto boton 2'/>
    </div>
  )
};

export default App;
