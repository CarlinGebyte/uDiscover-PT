import React from "react";
import AliceCarousel from "react-alice-carousel";
import jose from "../Assets/img/Testimonials/JoseUssa.png";
import vanessa from "../Assets/img/Testimonials/VanessaPerez.png";
import karen from "../Assets/img/Testimonials/KarenReales.png";
import styles from "../Styles/Testimonial.module.scss";

const items = [
  <div className={styles.testimonial}>
    <div className={styles.testimonial_flex}>
      <div className={styles.testimonial_flex__text}>
        <p>
          “La eficiencia de los procesos a todo nivel y la clase de profesores
          que tienen me parecen muy buenos. Adicionalmente, las clases que
          ofrecen son las necesarias para una consecución de la vida
          profesional.”{" "}
        </p>
        <div>
          <span>JOSÉ USSA</span>
          <br />
          PADRE DE ESTUDIANTE
        </div>
      </div>
      <div className={styles.testimonial_flex__image}>
        <img src={jose} alt="testimonials" />
      </div>
    </div>
  </div>,
  <div className={styles.testimonial}>
    <div className={styles.testimonial_flex}>
      <div className={styles.testimonial_flex__text}>
        <p>
          “Lo que más me gusta de uDiscover es la metodología, lo innovador.”{" "}
        </p>
        <div>
          <span>KAREN REALES</span>
          <br />
          MADRE DE ESTUDIANTE
        </div>
      </div>
      <div className={styles.testimonial_flex__image}>
        <img src={karen} alt="testimonials" />
      </div>
    </div>
  </div>,
  <div className={styles.testimonial}>
    <div className={styles.testimonial_flex}>
      <div className={styles.testimonial_flex__text}>
        <p>
          “Además de la facilidad de las clases virtuales, la propuesta
          educativa innovadora de uDiscover nos ofrece una oportunidad única
          como docentes de compartir aula con estudiantes en diferentes lugares
          del continente. En una clase regular de uDiscover, se respira la
          diversidad cultural, no solo de nuestro país sino de Latinoamérica.”{" "}
        </p>
        <div>
          <span>VANESSA PÉREZ PINZÓN</span>
          <br />
          DOCENTE CIENCIAS NATURALES
        </div>
      </div>
      <div className={styles.testimonial_flex__image}>
        <img src={vanessa} alt="testimonials" />
      </div>
    </div>
  </div>,
];
function Testimonial() {
  return (
    <div className={"container " + styles.container_testimonials}>
      <AliceCarousel
        mouseTracking={true}
        items={items}
        responsive={{
          0: {
            items: 1,
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

export default Testimonial;
