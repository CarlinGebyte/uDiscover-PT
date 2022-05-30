import React from "react";
import styles from "../Styles/Footer.module.scss";
import logo from "../Assets/img/LogoFooter.png";

function Footer() {
  return (
    <footer className={"container " + styles.footer_container}>
      <div className={styles.footer}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.footer_second}>
          <h4>Contáctanos</h4>
          <div>
            <i className="fa-brands fa-whatsapp"></i>
            <a href="#?" target="_blank">
              +57 3054246600
            </a>
          </div>
          <div>
            <i className="fa-solid fa-phone"></i>
            <a href="#?" target="_blank">
              USA +1 786 789 0299
            </a>
          </div>
          <div>
            <i className="fa-solid fa-phone"></i>
            <a href="#?" target="_blank">
              COL +57 333 033 3477
            </a>
          </div>
          <div>
            <i className="fa-solid fa-phone"></i>
            <a href="#?" target="_blank">
              CHI +56 323 820 966
            </a>
          </div>
          <div>
            <i className="fa-solid fa-phone"></i>
            <a href="#?" target="_blank">
              MEX +52 559 063 3939
            </a>
          </div>
          <h4 className={styles.footer_second__mail}>Correo</h4>
          <div>
            <i className="fa-solid fa-envelope"></i>
            <a href="#?" target="_blank">
              admisiones@ud.school
            </a>
          </div>
        </div>
        <div className={styles.footer_third}>
          <h4>Síguenos</h4>
          <div>
            <a href="#?" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#?" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#?" target="_blank">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="#?" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <a href="#?" target="_blank" className={styles.footer_third__links}>
            Registro ante el departamento de educación de la florida
          </a>
          <a href="#?" target="_blank" className={styles.footer_third__links}>
            Politica de privacidad
          </a>
        </div>
      </div>
      <div></div>
    </footer>
  );
}

export default Footer;
