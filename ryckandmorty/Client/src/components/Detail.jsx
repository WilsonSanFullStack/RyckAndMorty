import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "../styles/detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
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
    <div className={styles.global}>
    <div className={styles.cardOne}>
      <div className={styles.divimage}>
        <img src={character.image && character.image} alt="" />
      </div>
      
      <div className={styles.text}>
        <h1>Name: "{character.name && character.name}"</h1>
        <h1>Status: "{character.status && character.status}"</h1>
        <h1>Species: "{character.species && character.species}"</h1>
        <h1>Gender: "{character.gender && character.gender}"</h1>
        <h1>Origins: "{character.origin?.name && character.origin?.name}"</h1>
      </div>
        <Link to="/home">
          <button>HOME</button>
        </Link>
    </div>
    </div>
  );
};

export default Detail;
