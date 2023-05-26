import SearchBar from "./SearchBar";
import styles from "../styles/navsear.module.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ onSearch }) => {
  return (
    <div className={styles.nav}>
      <div className={styles.btn}>
      <NavLink to="/Home">
        <button>Home</button>
      </NavLink>
      </div>
      <div className={styles.btn}>
      <Link to="/About">
        <button>About</button>
      </Link>
      </div>
      <div className={styles.btn}>
      <Link to="/favorites">
        <button>Favorites</button>
      </Link>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default NavBar;
