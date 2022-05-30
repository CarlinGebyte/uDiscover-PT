import React from "react";
import ContactForm from "./ContactForm";
import styles from "../Styles/Contact/Contact.module.scss";

function Contact() {
  return (
    <div className={"container " + styles.contact}>
      <div className={styles.contact_header}>
        <div className={styles.contact_header__title}>
          <h3>
            Por una <br /> educación <br />
            <span className={styles.contact_header__title__plus}>+</span>{" "}
            <span className={styles.contact_header__title__humana}>humana</span>
          </h3>
        </div>
        <div className={styles.contact_header__body}>
          <h5>
            uDiscover es un Colegio Virtual bilingüe Americano, con enfoque en
            Tecnología, Emprendimiento e Innovación.
          </h5>
          <p>
            Ofrecemos la modalidad: Académica bilingüe (español-inglés).
            Contamos con 3 niveles:{" "}
            <span>
              Elementary School (básica primaria) , Middle School (básica
              secundaria) y High School (educación media)
            </span>{" "}
            de carácter mixto, Calendarios A (Inicio clases Febrero) y B (Inicio
            clases Agosto).
          </p>
        </div>
      </div>
      <div className={styles.contact_body}>
        <div className={styles.contact_body__background}>
          <div className={styles.contact_body__info}>
            <div className={styles.contact_body__info__header}>
              <div>
                <i className="fa-solid fa-angles-right"></i>
              </div>
              <h3>Inscríbete ahora</h3>
              <p>
                Nuestra asesora pedagógica se pondrá en contacto para iniciar el
                proceso de inscripción de tu hijo.
              </p>
            </div>
            <div className={styles.contact_body__info__footer}>
              <p>
                ¿Ya te inscribiste?{" "}
                <a href="#?">
                  Ingresa aquí para conocer el proceso de admisión.
                </a>
              </p>
            </div>
          </div>
          <div className={styles.contact_body__formContainer}>
            <div>
              <ContactForm />
            </div>
            <div className={styles.contact_body__formContainer__registered}>
              <p>
                ¿Ya te inscribiste?{" "}
                <a href="#?">
                  Ingresa aquí para conocer el proceso de admisión.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
