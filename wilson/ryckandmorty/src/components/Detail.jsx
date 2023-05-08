import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from '../style/detail.module.css'

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.cardOne}>
      <div className={styles.divimage}>
        <img className={styles.image} src={character.image && character.image} alt="" />
      </div>
        
      <div className={styles.text}>
        <h2 className={styles.decoracion}>name: {character.name && character.name} </h2>
        <h2>status: {character.status && character.status} </h2>
        <h2>species: {character.species && character.species} </h2>
        <h2>gender: {character.gender && character.gender} </h2>
        <h2>origin: {character.origin?.name && character.origin?.name} </h2>
        
      </div>
          
    </div>
  );
};
export default Detail;
