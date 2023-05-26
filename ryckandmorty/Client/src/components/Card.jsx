import styles from "../styles/card.module.css";
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../Redux/action";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav
      ? removeFav(id)
      : addFav({ id, name, status, species, gender, origin, image, onClose });
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === +id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.cardOne}>
      <div className={styles.divimage}>
        <img className={styles.image} src={image} alt="" />
        {<button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>}
      </div>
      <div className={styles.text}>
        <NavLink to={`/Detail/${id}`}>
          <h1>Name: {name}</h1>
        </NavLink>
        <h1>Status: {status}</h1>
        <h1>Species: {species}</h1>
        <h1>Gender: {gender}</h1>
        <h1>Origin: {origin}</h1>
        <button
          onClick={() => {
            onClose(id);
          }}
        ><b>Close</b>
          
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
