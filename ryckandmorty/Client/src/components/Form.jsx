import styles from "../style/Form.module.css";
import { useState } from "react";
import validation from "./validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState();

  const handleForms = (event) => {
    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value }),
      setUserData({ ...userData,[event.target.name]: event.target.value,})
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.contenedor}>
      <form action="" onSubmit={handleForms} className={styles.form}>
        <div>
          <label htmlFor="email" className={styles.label}>
            Email:
            
          </label>
          <input
              onChange={handleForms}
              value={userData.email}
              name='email'
              type="text"
              placeholder="Ingrese su email"
            />
          {errors?.e1 ? (
          <p>{errors?.e1}</p>
        ) : errors?.e2 ? (
          <p>{errors?.e2}</p>
        ) : (
          <p>{errors?.e3}</p>
        )}
        </div>
        

        <div>
          <label htmlFor="password" className={styles.label}>
            Password:
            <input
              onChange={handleForms}
              value={userData.password}
              name="password"
              type="text"
              placeholder="Escriba su Password"
            />
          </label>
        </div>
        {errors?.p1 ? <p>{errors?.p1}</p> : <p>{errors?.p2}</p>}

        <div className={styles.btn}>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
