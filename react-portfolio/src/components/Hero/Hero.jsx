import React from "react";

import styles from "./Hero.module.css";
import me from "../../../assets/contact/headshot.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, Im Grant</h1>
        <p className={styles.description}>
          Im a college student at Virginia Tech, aksjdhfkjashdfk
          alkjsdflkasjlkdfj jlkas lkdfjlkasj ddflj jalakdsjf
        </p>
        <a href="mailto:grantvwilson@icloud.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={me} alt="Image of me" className={styles.headShot} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
