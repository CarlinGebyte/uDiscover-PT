import React from "react";
import { Link } from "react-router-dom";
import { entry } from "../Assets/Data/CardBlog";
import styles from "../Styles/Blog.module.scss";

function Blog() {
  return (
    <div className={"container " + styles.blog_container}>
      <div className={styles.blog_pencil}></div>
      <div className={styles.blog}>
        <div className={styles.blog_header}>
          <h2>
            <Link to="#">BLOG</Link>
          </h2>
        </div>
        <div className={styles.blog_cards}>
          {entry?.map((item) => (
            <div className={styles.blog_cards__card} key={item.id}>
              <div className={styles.blog_cards__card__image}>
                <Link to="#">
                  <img src={item.image} alt="" />
                </Link>
                <span>{item.tag}</span>
              </div>
              <div className={styles.blog_cards__card__text}>
                <h3>
                  <Link to="#">{item.title}</Link>
                </h3>
                <p>{item.text}</p>
                <Link to="#">Leer más »</Link>
              </div>
              <div className={styles.blog_cards__card__date}>
                <p>{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
