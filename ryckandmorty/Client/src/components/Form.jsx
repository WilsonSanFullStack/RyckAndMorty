import styles from "../styles/Forms.module.css";
import { useState } from "react";
import validation from "./validation";

const Forms = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.global}>
      <form  className={styles.contenedor}>
        <div className={styles.form} >
          <label htmlFor="email"><b>Email: </b> </label>
          <input
            onChange={handleChange}
            value={userData.email}
            type="text"
            name="email"
          />
          {errors.e1 ? (
            <p><b>{errors.e1}</b></p>
          ) : errors.e2 ? (
            <p><b>{errors.e2}</b></p>
          ) : (
            <p><b>{errors.e3}</b></p>
          )}
        </div>
        <div className={styles.form}>
          <label htmlFor="password"><b>Password: </b></label>
          <input
            onChange={handleChange}
            value={userData.password}
            type="password"
            name="password"
          />
        </div>
        {errors.p1 ? <p><b>{errors.p1}</b></p> : <p><b>{errors.p2}</b></p>}
        <div className={styles.btn}>
          <button onClick={handleSubmit} type="submit">
            <b>SUBMIT</b>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
//
