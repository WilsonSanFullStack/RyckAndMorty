import styles from "../style/card.module.css";

export default function Card({
  name,
  status,
  species,
  gender,
  origin,
  onClose,
  image,
  id,
}) {
  return (
    <div className={styles.cardOne}>
      <div className={styles.divimage}>
        <img className={styles.image} src={image} alt="" />
      </div>
      <div className={styles.text}>
        <h2>name: {name} </h2>
        <h2>status: {status} </h2>
        <h2>species: {species} </h2>
        <h2>gender: {gender} </h2>
        <h2>origin: {origin} </h2>
        <button onClick={() => {onClose(id)}}>Cerrar</button>
      </div>
    </div>
  );
}
