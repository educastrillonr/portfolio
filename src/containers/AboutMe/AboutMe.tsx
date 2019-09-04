import * as React from "react";
import styles from "./AboutMe.module.scss";
import avatar from "../../assets/images/avatar.jpg";

const AboutMe: React.FC = () => {
  return (
    <section className={styles.container}>
      <section className={styles.wrapper}>
        <header>
          <div className={styles.titles}>
            <h2>Eduardo Castrillon Romero</h2>
            <h3>Code & Me</h3>
            <p>
              Having always loved tech, I enrolled on a CS degree in Spain back
              when I was 18. Eventually, I moved on to working hospitality full
              time.
            </p>
          </div>
          <img src={avatar} alt="Edu" />
        </header>
        <article>
          <p>
            Going into hospitality taught me a lot about working in teams,
            problem solving, and understanding customers. All the while, I
            always had a thought in the back of my mind that I wanted to work
            with technology. Eventually, I decided to get back to coding on my
            own, but I wasn't getting as much from that as I hoped. So I
            commited to a full time coding bootcamp called{" "}
            <a
              rel="noopener noreferrer"
              href="https://www.nology.io/"
              target="_blank"
            >
              _nology
            </a>
            . Now I am looking to use the skills I've gained and be a part of
            the tech industry as I always intended.
          </p>
        </article>
      </section>
    </section>
  );
};

export default AboutMe;
