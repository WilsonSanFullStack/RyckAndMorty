import styles from "../style/Form.module.css";
import { useState } from "react";

const Form = () => {
  const [forms, setForms] = useState({
    email: "",
    password: "",
  });

  const handlerFoms = (event) => {
    const name = event.target.name
    const value = event.target.value
    
  };
  const handlerSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.contenedor}>
      <form action="" onSubmit={handlerSubmit} className={styles.form}>
        <label htmlFor="email" className={styles.label}>
          Email:{" "}
          <input
            value={forms.email}
            type="text"
            placeholder="Ingrese su email"
            onChange={handlerFoms}
          />
        </label>
        <label htmlFor="password" className={styles.label}>
          Password:{" "}
          <input
            value={forms.password}
            type="text"
            placeholder="Escriba su Password"
            onChange={handlerFoms}
          />
        </label>
        <div className={styles.btn}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
