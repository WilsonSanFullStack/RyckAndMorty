import styles from "../style/favoritos.module.css";
import { useSelector } from "react-redux";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../redux/actions";
import { useState } from "react";

export function Favoritos() {
  const misFavoritos = useSelector((state) => state.misFavoritos);

  const [aux, setAux] = useState(false);


    const dispatch = useDispatch();
    
    const handleOrder = (event) =>{
        dispatch(orderCards(event.target.value));
        setAux(!aux)
    };  

    const handleFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    };


  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <div className={styles.contenedorCard}>
        {misFavoritos?.map(
          ({ name, status, species, gender, origin, image, id }) => {
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
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default Favoritos;
