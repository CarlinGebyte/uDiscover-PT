import React from "react";
import AliceCarousel from "react-alice-carousel";
import styles from "../Styles/Brands.module.scss";
import moodle from "../Assets/img/Brands/Moodle.png";
import nogal from "../Assets/img/Brands/FundacionNogal.png";
import hubbog from "../Assets/img/Brands/HubBog.png";
import ingenio from "../Assets/img/Brands/Ingenio.png";
import innpulsa from "../Assets/img/Brands/Innpulsa.jpeg";
import pearson from "../Assets/img/Brands/Pearson.png";
import santillana from "../Assets/img/Brands/Santillana.png";

const items = [
  <div className={styles.brands}>
    <img src={moodle} alt="brand" />
  </div>,
  <div className={styles.brands}>
    <img src={nogal} alt="brand" />
  </div>,
  <div className={styles.brands}>
    <img src={hubbog} alt="brand" />
  </div>,
  <div className={styles.brands}>
    <img src={ingenio} alt="brand" />
  </div>,
  <div className={styles.brands}>
    <img src={innpulsa} alt="brand" />
  </div>,
  <div className={styles.brands}>
    <img src={pearson} alt="brand" />
  </div>,
  <div className={styles.brands}>
    <img src={santillana} alt="brand" />
  </div>,
];
function Brands() {
  return (
    <div className={styles.brands_container}>
      <div className={styles.brands_header}>
        <h2>ALIADOS</h2>
      </div>
      <AliceCarousel
        mouseTracking={true}
        items={items}
        responsive={{
          0: {
            items: 3,
          },
          1000: {
            items: 4,
          },
        }}
        autoPlay={true}
        autoPlayInterval={5000}
        infinite={true}
        disableButtonsControls={true}
      />
    </div>
  );
}

export default Brands;
