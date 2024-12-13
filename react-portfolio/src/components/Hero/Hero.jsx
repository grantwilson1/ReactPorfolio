import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, Im Grant</h1>
        <p className={styles.description}>
          Im a college student at Virginia Tech, ...
        </p>
        <a href="mailto:grantvwilson@icloud.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("skills/react.png")}
        alt="Image of me"
        className={styles.headShot}
      />
      <div className={StyleSheet.topBlur} />
      <div className={StyleSheet.bottomBlur} />
    </section>
  );
};
