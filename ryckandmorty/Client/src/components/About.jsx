import styles from "../styles/about.module.css";
const About = () => {
  return (
    <div className={styles.about}>
      <h1>Creado por Wilson Arvey Sanchez Remolina</h1>
      <h3>
        Estudiante de Programacion Web FULL STACK DEVELOPERS en la academia
        HENRY.
      </h3>
      <p>
        Estudios iniciados el <b> 10 De Abril Del 2023</b>. A la fecha{" "}
        <b>18 De Mayo Del 2023</b> me encuentro cursando el <b>M3</b> habiendo
        terminado todo lo referente a Front-End
      </p>

      <h4>Les dejo donde contactarme:</h4>
      
      <div className={styles.containerFotos}>
        <div className={styles.fotos}>
          <a href="https://github.com/ryuksan">
            <img src="../imagen/github.png" alt="GitHub" width={250} />
          </a>
        </div>

        <div className={styles.fotos}>
          <a href="https://www.linkedin.com/in/wilson-san-280893265/overlay/contact-info/">
            <img src="../imagen/linkendin.png" alt="Linkendin" width={200} />
          </a>
        </div>

        <div className={styles.fotos}>
          <a href="https://mail.google.com/mail/u/4/#inbox?compose=GTvVlcSHxwPqnbChMGcVwjlXWmSFXqFrbNfxkjPmkJGcFfZlPTVVRtGSzRfvRxjsqgRMsPVrnhWJG">
            <img src="../imagen/gmail.png" alt="gmail.com" width={200} />
          </a>
        </div>

        <div className={styles.fotos}>
          <a href="https://t.me/+573213041636">
            <img src="../imagen/telegram.png" alt="Telegram" width={200} />
          </a>
        </div>

        <div className={styles.fotos}>
          <a href="https://wa.me/qr/4V5CDNDQ4SRGG1">
            <img src="../imagen/whatsapp.png" alt="WhatsApp" width={200} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;
