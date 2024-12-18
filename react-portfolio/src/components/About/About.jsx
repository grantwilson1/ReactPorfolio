import React from "react";
import styles from "./About.module.css";
import student from "../../../assets/about/graduated.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={me} alt="me" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={student} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend dev</h3>
              <p>Im a frontend....</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={me} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend dev</h3>
              <p>Im a frontend....</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={me} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend dev</h3>
              <p>Im a frontend....</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
