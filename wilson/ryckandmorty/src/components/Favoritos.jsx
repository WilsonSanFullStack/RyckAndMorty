import styles from '../style/favoritos.module.css'
import { useSelector } from 'react-redux'
import Card from './Card'


export function Favoritos () {

  const favoritos = useSelector((state) => state.misFavoritos);

  return (
    <div className={styles.contenedorCard} >
      {favoritos.map(({ name, onClose, status, species, gender, origin, image, id }) => {
      return (
        <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin.name}
              image={image}
              onClose={onClose}
              
            />
      )
    })}
    
    </div>

  );
};
export default Favoritos;