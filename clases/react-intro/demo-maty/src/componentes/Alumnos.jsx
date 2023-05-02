import Boton2 from "./Boton2";

const  Alumnos = (props) => {
  const {alumnos} = props;
  return (
    <div>
      {
      alumnos.map(alum => {
        return (
          <>
          <p>{`Nombre: ${alum.name} Edad: ${alum.age}`}</p>
          <Boton2 text='soy el btn 3'/>
          </>
          );
      })
      }
    </div>
  )
};
export default Alumnos;