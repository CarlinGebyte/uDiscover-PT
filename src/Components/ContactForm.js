import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import styles from "../Styles/Contact/Form.module.scss";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(10, "El nombre debe tener mínimo 10 caracteres")
    .max(50, "Máximo 30 caracteres")
    .required("El nombre es requerido"),
  email: Yup.string()
    .email("El email no es válido")
    .required("El email es requerido"),
  phone: Yup.string()
    .min(7, "El teléfono debe tener mínimo 7 caracteres")
    .max(20, "El teléfono debe tener máximo 20 caracteres")
    .required("El teléfono es requerido"),
  country: Yup.string()
    .min(3, "El país debe tener mínimo 3 caracteres")
    .max(25, "El país debe tener máximo 25 caracteres")
    .required("El país es requerido"),
  checkbox: Yup.boolean()
    .isTrue("Debe aceptar la política de privacidad")
    .required("Debe aceptar la política de privacidad"),
});
function ContactForm() {
  return (
    <div>
      <div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            country: "",
            checkbox: false,
          }}
          validationSchema={contactSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <div className={styles.form_item}>
                <label htmlFor="name">Nombre</label>
                <Field
                  className={styles.form_item__text}
                  name="name"
                  id="name"
                  type="text"
                />
                {errors.name && touched.name ? (
                  <div className="error">{errors.name}</div>
                ) : null}
              </div>
              <div className={styles.form_item}>
                <label htmlFor="email">Email</label>
                <Field
                  className={styles.form_item__text}
                  name="email"
                  id="email"
                  type="email"
                />
                {errors.email && touched.email ? (
                  <div className="error">{errors.email}</div>
                ) : null}
              </div>
              <div className={styles.form_item}>
                <label htmlFor="phone">Teléfono</label>
                <Field
                  className={styles.form_item__text}
                  name="phone"
                  id="phone"
                  type="tel"
                />
                {errors.phone && touched.phone ? (
                  <div className="error">{errors.phone}</div>
                ) : null}
              </div>
              <div className={styles.form_item}>
                <label htmlFor="country">País</label>
                <Field
                  className={styles.form_item__text}
                  name="country"
                  id="country"
                  type="text"
                />
                {errors.country && touched.country ? (
                  <div className="error">{errors.country}</div>
                ) : null}
              </div>
              <div className={styles.form_item}>
                <label htmlFor="checkbox">
                  <Field
                    className={styles.form_item__checkbox}
                    name="checkbox"
                    id="checkbox"
                    type="checkbox"
                  />
                  He leído y acepto la <a href="#?"> política de privacidad</a>
                </label>
                {errors.checkbox && touched.checkbox ? (
                  <div className="error">{errors.checkbox}</div>
                ) : null}
              </div>
              <div className={styles.form_button}>
                <button type="submit">Enviar</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ContactForm;
