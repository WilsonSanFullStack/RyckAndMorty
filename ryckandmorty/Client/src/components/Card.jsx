import { Link } from "react-router-dom";
import styles from "../style/card.module.css";
import { connect } from "react-redux";
import { agregarFavorito, eliminarFavorito } from "../redux/actions";
import { useState, useEffect } from "react";

function Card({
  name,
  status,
  species,
  gender,
  origin,
  onClose,
  image,
  id,
  agregarFavorito,
  eliminarFavorito,
  misFavoritos,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorito = () => {
    if (isFav) {
      setIsFav(false);
      eliminarFavorito(id);
    } else {
      setIsFav(true);
      agregarFavorito({
        name,
        status,
        species,
        gender,
        origin,
        image,
        id,
        agregarFavorito,
        eliminarFavorito,
      });
    }
  };

  useEffect(() => {
    misFavoritos.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [misFavoritos]);

  return (
    <div className={styles.cardOne}>
      <div className={styles.divimage}>
        <img className={styles.image} src={image} alt="" />
        {isFav ? (
          <button onClick={handleFavorito}>❤️</button>
        ) : (
          <button onClick={handleFavorito}>🤍</button>
        )}
      </div>

      <div className={styles.text}>
        <Link to={`/Detail/${id}`}>
          <h2 className={styles.decoracion}>name: {name} </h2>
        </Link>
        <h2>status: {status} </h2>
        <h2>species: {species} </h2>
        <h2>gender: {gender} </h2>
        <h2>origin: {origin} </h2>
        <button
          onClick={() => {
            onClose(id);
          }}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    agregarFavorito: (character) => {
      dispatch(agregarFavorito(character));
    },
    eliminarFavorito: (id) => {
      dispatch(eliminarFavorito(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    misFavoritos: state.misFavoritos,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
