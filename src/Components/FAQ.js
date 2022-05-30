import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { faq } from "../Assets/Data/FAQ";
import styles from "../Styles/FAQ.module.scss";

function FAQ() {
  return (
    <div className={"container " + styles.faq}>
      <div className={styles.faq_accordion}>
        {faq?.map((item) => {
          let count = 10;
          return (
            <Accordion allowToggle key={item.id}>
              <AccordionItem key={1} className={styles.chakra_accordion__item}>
                <h2>
                  <AccordionButton className={styles.chakra_accordion__button}>
                    <Box flex="1" textAlign="left">
                      {item.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {item.text.map((text) => {
                    count++;
                    return <p key={count + item.title}>{text}</p>;
                  })}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
      <div className={styles.secondary}>
        <h2>
          INSCRIPCIONES <br /> ABIERTAS
        </h2>
        <span>PRIMARY, MIDDLE Y HIGH SCHOOL</span>
        <Link to="#">INSCRÍBETE AHORA</Link>
      </div>
    </div>
  );
}

export default FAQ;
