import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, Im Grant</h1>
        <p className={styles.description}>
          I’m a computer science student at Virginia Tech, and this site is my
          way of sharing my projects, skills, and experiences. Take a look
          around to see what I’ve been working on and how I’m growing in the
          tech world.
        </p>
        <a href="mailto:grantvwilson@icloud.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("contact/headshot.png")}
        alt="Image of me"
        className={styles.headShot}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
