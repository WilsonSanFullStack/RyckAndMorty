import Card from "./Card";
import styles from "../styles/cards.module.css";

const Cards = ({ characters, onClose }) => {
  return (
    <div className={styles.contenedorCard}>
      {characters.map(
        ({ id, name, species, gender, image, origin, status }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              origin={origin.name}
              status={status}
              onClose={onClose}
            />
          );
        }
      )}
    </div>
  );
};

export default Cards;
