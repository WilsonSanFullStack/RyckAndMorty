import Card from "./Card";
import styles from "../style/cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={styles.contenedorCard}>
      {characters.map(
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
              onClose={onClose}
            />
          );
        }
      )}
      ,
    </div>
  );
}
