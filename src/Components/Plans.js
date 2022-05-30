import React from "react";
import { prices } from "../Assets/Data/CardsPrices";
import styles from "../Styles/Plans.module.scss";

function Plans() {
  return (
    <div className={"container " + styles.plans}>
      <div className={styles.plans_header}>
        <i className="fa-solid fa-graduation-cap"></i>
        <p>
          Al ser parte de uDiscover, nuestros estudiantes obtienen la titulación
          High School Diploma.
        </p>
      </div>
      <div className={styles.plans_body}>
        <h2>Aprovecha nuestros precios especiales con descuento</h2>
        <div className={styles.plans_body__cards}>
          {prices?.map((price) => (
            <div className={styles.plans_body__cards__card} key={price.id}>
              <div className={styles.plans_body__cards__card__header}>
                <h3>{price.title}</h3>
                <p>{price.payments}</p>
              </div>
              <div className={styles.plans_body__cards__card__body}>
                <img src={price.flag} alt="flag" />
                <p className={styles.plans_body__cards__card__body__price}>
                  {price.price}
                </p>
                <p className={styles.plans_body__cards__card__body__regular}>
                  {price.regular ? price.regular : null}
                </p>
                <p className={styles.plans_body__cards__card__body__saving}>
                  {price.saving ? price.saving : null}
                </p>
              </div>
              <div className={styles.plans_body__cards__card__footer}>
                <div>
                  <p>{price.method.title}</p>
                  {price.method.list?.map((method) => (
                    <p key={method}>{method}</p>
                  ))}
                  <p>{price.warning?.length > 0 ? price.warning : null}</p>
                </div>
                <a href="#?">Contacta a tu asesor</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Plans;
