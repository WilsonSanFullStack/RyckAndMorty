import SearchBar from "./SearchBar";
import styles from "../style/navsear.module.css";

export default function NavSearch({onSearch}) {
  return (
    <div className={styles.nav}>
      <SearchBar onSearch = {onSearch} />
    </div>
  );
}
