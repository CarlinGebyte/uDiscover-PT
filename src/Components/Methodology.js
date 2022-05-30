import React from "react";
import methodology from "../Assets/img/Methodology.png";
import styles from "../Styles/Methodology.module.scss";

function Methodology() {
  return (
    <header className={"container " + styles.methodology}>
      <div className={styles.methodology_image}>
        <img src={methodology} alt="metodología" />
      </div>
      <div className={styles.methodology_text}>
        <div className={styles.methodology_text__header}>
          <h2>
            <span>S</span>aberes y
          </h2>
          <h2>
            <span>E</span>xperiencias para
          </h2>
          <h2>
            <span>R</span>econocerse
          </h2>
        </div>
        <div className={styles.methodology_text__body}>
          <div>
            <h2>Educación para la vida</h2>
            <p>
              Más que la mera transmisión de información, el conocimiento es una
              herramienta para descubrir por sí mismos el rol dentro de una
              sociedad, las virtudes y las pasiones. Con una mentalidad de
              libertad e interminable curiosidad, aquí lo importante, más que
              las respuestas, son las preguntas.
            </p>
          </div>
          <div>
            <a href="#?">CONOCE NUESTRA METODOLOGÍA</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Methodology;
