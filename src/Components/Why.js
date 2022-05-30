import React from "react";
import { why } from "../Assets/Data/CardsWhy";
import styles from "../Styles/Why.module.scss";

function Why() {
  return (
    <div className={"container " + styles.why}>
      <div className={styles.why_header}>
        <h2>¿Por qué tu hijo debe estudiar en uDiscover?</h2>
        <p>
          Tu hijo merece tener una educación de calidad y a la vez, tiempo para
          desarrollar diferentes actividades. Estudiar en uDiscover les
          permitirá eso y mucho más:
        </p>
      </div>
      <div className={styles.why_cards}>
        {why?.map((item) => (
          <div key={item.id} className={styles.why_cards__card}>
            <div className={styles.why_cards__card___header}>
              <img src={item.image} alt="why cards" />
            </div>
            <div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Why;
