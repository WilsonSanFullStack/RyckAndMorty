import SearchBar from "./SearchBar";
import styles from "../style/navsear.module.css";
import { Link } from "react-router-dom";

export default function NavSearch({ onSearch }) {
  return (
    <div className={styles.nav}>
      <div className={styles.btn}>
      <Link to="/Home">
        <button>Home</button>
      </Link>
      </div>
      <div className={styles.btn}>
      <Link to="/About">
        <button>About</button>
      </Link>
      </div>
      <div className={styles.btn}>
      <Link to="/favoritos">
        <button>Favoritos</button>
      </Link>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
