import * as React from "react";
import styles from "./AboutMe.module.scss";
import avatar from "../../assets/images/avatar.jpg";

const AboutMe: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <header>
        <div className={styles.titles}>
          <h2>Eduardo Castrillon Romero</h2>
          <h3>Code & Me</h3>
        </div>
        <img src={avatar} alt="Edu" />
      </header>
      <article>
        <p>
          Having always loved tech, I enrolled on a CS Degree in Spain back when
          I was 18. Unfortunately, it wasn't what I thought it'd be.
        </p>
        <p>
          While I wondered what to do with myself, I started working at a bar,
          which soon became a full time position and led me to actually enjoy
          working hospitality. All the while, I always had a feeling I wanted to
          work in something related to technology. So I took this thought and
          moved to Bristol, still working hospitality to sustain myself. I
          eventually decided change couldn't happen while I still worked in bars
          full time, so I commited to a full time coding bootcamp called{" "}
          <a
            rel="noopener noreferrer"
            href="https://www.nology.io/"
            target="_blank"
          >
            _nology
          </a>
          . Now I am looking to use the skills I've gained and be a part of the
          tech industry as I always intended.
        </p>
      </article>
    </section>
  );
};

export default AboutMe;
