import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Banner.module.scss";
import demo from "../Assets/img/Demoday.png";

function Banner() {
  return (
    <div className="container">
      <div className={styles.banner}>
        <div className={styles.banner_item}>
          <Link to="#">
            <img src={demo} alt="banner" />
          </Link>
        </div>
        <div className={styles.banner_item}>
          <h2>Conoce a los finalistas de nuestro Demo Day 2021</h2>
          <Link to="#" className={styles.banner_item__button}>
            Ingresa aquí
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
