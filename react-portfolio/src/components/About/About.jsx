import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about.png")}
          alt="me"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/graduated.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Student</h3>
              <p>
                I’m currently a student building my foundation in software
                engineering. In the short term, I’m focused on sharpening my
                technical skills through hands-on projects and coursework. I’m
                also actively seeking internship opportunities where I can gain
                real-world experience, collaborate with professionals, and
                further develop my passion for creating innovative software
                solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/hobby.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Hobbies</h3>
              <p>
                In my free time, I enjoy a variety of activities—hunting,
                watching live music, spending time with friends, golfing, and
                playing video games. Each of these hobbies gives me a chance to
                relax, explore new experiences, and return to my projects with
                renewed energy.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
